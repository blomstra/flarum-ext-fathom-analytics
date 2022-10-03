import ExtensionPage, { ExtensionPageAttrs } from 'flarum/admin/components/ExtensionPage';
import type Mithril from 'mithril';
import type { FathomEventAttributeData } from '../../common/EventsRepository';
interface IAttrs extends ExtensionPageAttrs {
}
export default class SettingsPage extends ExtensionPage<IAttrs> {
    sections(vnode: Mithril.VnodeDOM<IAttrs, this>): import("flarum/common/utils/ItemList").default<unknown>;
    newEventData: FathomEventAttributeData;
    loadingEventData: boolean;
    updateEventData(id: string, { enabled, eventId }: Partial<{
        enabled: boolean;
        eventId: string;
    }>): void;
    saveEventData(): Promise<void>;
    eventsSection(): JSX.Element;
}
export {};
