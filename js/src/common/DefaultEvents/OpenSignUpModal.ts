import { FathomEvent } from '../EventsRepository';
import SignUpModal from 'flarum/forum/components/SignUpModal';
import { extend } from 'flarum/common/extend';

export default {
  name: 'Sign up modal opened',
  description: 'Triggered when the sign up modal is opened',
  id: 'sign-up-modal-opened',
  code(e: FathomEvent) {
    extend(SignUpModal.prototype, 'oninit', function () {
      e.track();
    });
  },
};
