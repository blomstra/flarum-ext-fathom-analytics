import app from 'flarum/common/app';

import * as DefaultEvents from './DefaultEvents';

export type FathomEventParams = Pick<FathomEvent, 'id' | 'code' | 'name' | 'description'>;

export interface FathomEventAttributeData {
  [key: string]: {
    eventId: string;
    enabled: boolean;
  };
}

export interface FathomEvent {
  /**
   * Unique ID to represent the event
   *
   * You should prefix this with your extension ID to avoid collisions
   */
  id: string;

  /**
   * A code snippet to execute to set up the event.
   *
   * If your event needs to extend core or extension JS, you should call
   * `extend` or `override` within this snippet.
   *
   * This will only be executed if the event is enabled in the admin
   * dashboard.
   *
   * `this` will be assigned to the FathomEvent object.
   *
   * To log the event, call `e.track()`.
   *
   * **You can use `forum`-scoped imports within this block as the
   * code will never be executed on the admin dashboard.**
   */
  code: (e: FathomEvent) => boolean | void;

  /**
   * An array of extension IDs exposed in `flarum.extensions` to check exist before enabling an event.
   *
   * This is useful if your event depends on an extension, for example.
   *
   * @example `['flarum-tags']`
   */
  requiresExtensions?: string[];

  /**
   * A name for the event to show in the admin dashboard
   */
  name: string;

  /**
   * A description for the event to show in the admin dashboard
   */
  description: string;

  /**
   * Fathom event ID for tracking purposes.
   */
  fathomEventId: string;

  /**
   * Log the event to Fathom.
   */
  track: () => void;
}

export class EventsRepository {
  private events: Record<string, FathomEvent> = {};

  constructor() {
    Object.values(DefaultEvents).forEach((event) => this.registerEvent(event));
  }

  getAllEvents(): FathomEvent[] {
    const events = Object.values(this.events);

    events.sort((a, b) => a.name.localeCompare(b.name));

    return events;
  }

  registerEvent(event: FathomEventParams): EventsRepository {
    this.events[event.id] = {
      ...event,
      fathomEventId: '',
      track() {
        if (!this.fathomEventId) return;

        window.fathom.trackGoal(this.fathomEventId, 0);
      },
    };

    return this;
  }

  getEnabledEvents(): FathomEvent[] {
    const eventIds = new Set(this.getEnabledEventIDs());

    return this.getAllEvents().filter((event) => eventIds.has(event.id));
  }

  isEventEnabled(eventId: string): boolean {
    return this.getEnabledEventIDs().includes(eventId);
  }

  getServerEventData(): FathomEventAttributeData {
    let val = app.forum.attribute<FathomEventAttributeData>('blomstra-fathom-analytics.enabled_events') || {};

    if (typeof val !== 'object' || Array.isArray(val)) {
      val = {};
    }

    val = Object.fromEntries(
      Object.entries(val).filter(([id]) => {
        return id in this.events;
      })
    );

    // deep clone
    return JSON.parse(JSON.stringify(val));
  }

  propogateServerEventData(): void {
    const eventData = this.getServerEventData();

    this.getAllEvents().forEach((event) => {
      const { enabled, eventId } = eventData[event.id] || { enabled: false, eventId: '' };

      event.fathomEventId = eventId;
    });
  }

  async saveServerEventData(eventData: FathomEventAttributeData): Promise<void> {
    await app.request({
      method: 'POST',
      url: app.forum.attribute('apiUrl') + '/settings',
      body: {
        'blomstra-fathom-analytics.enabled_events': JSON.stringify(eventData),
      },
    });

    app.forum.data.attributes!['blomstra-fathom-analytics.enabled_events'] = eventData;
  }

  getEnabledEventIDs(): string[] {
    return Object.entries(this.getServerEventData())
      .filter(([, { enabled }]) => enabled)
      .map(([eventId]) => eventId);
  }
}
