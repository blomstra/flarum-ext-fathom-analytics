import app from 'flarum/common/app';
import { EventsRepository } from './EventsRepository';

// Remove old canonical links - https://github.com/flarum/framework/issues/3648

const oldPushState = window.history.pushState;

window.history.pushState = function (...args) {
  oldPushState.call(this, ...args);

  document.head.querySelectorAll('link[rel="canonical"]').forEach((link) => {
    link.remove();
  });

  document.head.querySelectorAll('link[rel="next"], link[rel="prev"]').forEach((link) => {
    link.remove();
  });
};

// ------------------------------------------------------------------------

app.initializers.add('blomstra/fathom-analytics/common', () => {
  ((window as any).app as typeof app).fathomEventsRepository = new EventsRepository();
});

export { EventsRepository };
export * as DefaultEvents from './DefaultEvents';
export * as EventHelpers from './EventHelpers';
