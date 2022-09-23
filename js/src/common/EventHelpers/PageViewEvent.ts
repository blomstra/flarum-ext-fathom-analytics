import { FathomEvent } from '../EventsRepository';
import LogInModal from 'flarum/forum/components/LogInModal';
import { extend } from 'flarum/common/extend';
import Page from 'flarum/common/components/Page';
import app from 'flarum/forum/app';

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
export default function PageViewEvent({ name, description, id, requiresExtensions, flarumRouteName }: IPageViewEventArgs) {
  return {
    name,
    description,
    id,
    requiresExtensions,

    code(e: FathomEvent) {
      if (!Object.keys(app.routes).includes(flarumRouteName)) {
        console.warn(
          `[Fathom Analytics] The route name passed to event ${id} (${flarumRouteName}) is not present in Flarum. Does this route use an extension not provided in the requiresExtensions array?`
        );
        return;
      }

      extend(Page.prototype, 'oncreate', function () {
        const routeName = app.current.get('routeName');

        if (routeName === flarumRouteName) e.track();
      });
    },
  } as FathomEvent;
}
