import { FathomEvent } from '../EventsRepository';
import { extend } from 'flarum/common/extend';
import Session from 'flarum/common/Session';

export default {
  name: 'User logged in',
  description: 'Triggered when a user logs in',
  id: 'user-log-in',
  code(e: FathomEvent) {
    extend(Session.prototype, 'login', function (promise) {
      promise.then(() => {
        e.track();
      });
    });
  },
} as FathomEvent;
