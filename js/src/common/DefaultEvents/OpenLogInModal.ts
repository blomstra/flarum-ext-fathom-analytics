import { FathomEvent } from '../EventsRepository';
import LogInModal from 'flarum/forum/components/LogInModal';
import { extend } from 'flarum/common/extend';

export default {
  name: 'Log in modal opened',
  description: 'Triggered when the log in modal is opened',
  id: 'log-in-modal-opened',
  code(e: FathomEvent) {
    extend(LogInModal.prototype, 'oninit', function () {
      e.track();
    });
  },
};
