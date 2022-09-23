import app from 'flarum/admin/app';
import ExtensionPage, { ExtensionPageAttrs } from 'flarum/admin/components/ExtensionPage';
import Switch from 'flarum/common/components/Switch';
import Button from 'flarum/common/components/Button';

import type Mithril from 'mithril';
import { FathomEventAttributeData } from '../../common/EventsRepository';

interface IAttrs extends ExtensionPageAttrs {}

export default class SettingsPage extends ExtensionPage<IAttrs> {
  sections(vnode: Mithril.VnodeDOM<IAttrs, this>) {
    const sects = super.sections(vnode);

    sects.setPriority('content', 100);

    sects.add('events', this.eventsSection(), 50);

    sects.setPriority('permissions', 10);

    return sects;
  }

  newEventData: FathomEventAttributeData = app.fathomEventsRepository.getServerEventData();
  loadingEventData: boolean = false;

  updateEventData(id: string, { enabled, eventId }: Partial<{ enabled: boolean; eventId: string }>) {
    if (!Object.keys(this.newEventData).includes(id)) {
      this.newEventData[id] = { enabled: false, eventId: '' };
    }

    if (enabled !== undefined) this.newEventData[id].enabled = enabled;
    if (eventId !== undefined) this.newEventData[id].eventId = eventId;
  }

  async saveEventData() {
    this.loadingEventData = true;
    m.redraw();

    await app.fathomEventsRepository.saveServerEventData(this.newEventData);

    this.loadingEventData = false;
    m.redraw();
  }

  eventsSection() {
    return (
      <div className="FathomSettings-events">
        <div className="ExtensionPage-permissions-header">
          <div className="container">
            <h2 className="ExtensionTitle">{app.translator.trans('blomstra-fathom-analytics.admin.events.heading')}</h2>
          </div>
        </div>
        <div className="container">
          <ul className="FathomSettings-eventList">
            {app.fathomEventsRepository.getAllEvents().map((event, i) => {
              return (
                <li className="FathomSettings-eventListItem">
                  <div className="FathomSettings-eventListItem-name">{event.name}</div>
                  <div className="FathomSettings-eventListItem-description">{event.description}</div>

                  <label htmlFor={`fathom-event-id-${i}`} className="sr-only">
                    {app.translator.trans('blomstra-fathom-analytics.admin.settings.event_list.event_id')}
                  </label>
                  <input
                    className="FormControl FathomSettings-eventListItem-eventId"
                    disabled={!this.newEventData[event.id]?.enabled}
                    type="text"
                    id={`fathom-event-id-${i}`}
                    placeholder={app.translator.trans('blomstra-fathom-analytics.admin.settings.event_list.event_id')}
                    value={this.newEventData[event.id]?.eventId ?? ''}
                    oninput={(e: InputEvent) => {
                      this.updateEventData(event.id, { eventId: (e.target as HTMLInputElement).value });
                    }}
                  />

                  <Switch
                    className="FathomSettings-eventListItem-toggle"
                    aria-label={app.translator.trans('blomstra-fathom-analytics.admin.settings.event_list.toggle_event_enabled')}
                    checked={app.fathomEventsRepository.isEventEnabled(event.id)}
                    state={this.newEventData[event.id]?.enabled}
                    onchange={(e: boolean) => {
                      this.updateEventData(event.id, { enabled: e });
                    }}
                  />
                </li>
              );
            })}
          </ul>

          <Button
            className="Button Button--primary FathomSettings-eventListSave"
            loading={this.loadingEventData}
            onclick={this.saveEventData.bind(this)}
          >
            {app.translator.trans('blomstra-fathom-analytics.admin.settings.event_list.save')}
          </Button>
        </div>
      </div>
    );
  }
}
