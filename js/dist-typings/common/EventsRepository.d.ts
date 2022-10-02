export declare type FathomEventParams = Pick<FathomEvent, 'id' | 'code' | 'name' | 'description'>;
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
export declare class EventsRepository {
    private events;
    constructor();
    getAllEvents(): FathomEvent[];
    registerEvent(event: FathomEventParams): EventsRepository;
    getEnabledEvents(): FathomEvent[];
    isEventEnabled(eventId: string): boolean;
    getServerEventData(): FathomEventAttributeData;
    propogateServerEventData(): void;
    saveServerEventData(eventData: FathomEventAttributeData): Promise<void>;
    getEnabledEventIDs(): string[];
}
