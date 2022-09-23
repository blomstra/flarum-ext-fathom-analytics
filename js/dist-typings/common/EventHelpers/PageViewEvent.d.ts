import { FathomEvent } from '../EventsRepository';
export interface IPageViewEventArgs extends Pick<FathomEvent, 'name' | 'description' | 'id' | 'requiresExtensions'> {
    /**
     * A name of a frontend route.
     *
     * This should match a key in the `app.routes` object.
     *
     * If the route isn't present in this, the event will not be registered.
     */
    flarumRouteName: string;
}
/**
 * Helper to generate an event that triggers when a page is viewed.
 */
export default function PageViewEvent({ name, description, id, requiresExtensions, flarumRouteName }: IPageViewEventArgs): FathomEvent;
