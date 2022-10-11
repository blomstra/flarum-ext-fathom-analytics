import { FathomEvent } from '../EventsRepository';
import { override } from 'flarum/common/extend';
import SignUpModal from 'flarum/forum/components/SignUpModal';
import app from 'flarum/forum/app';

export default {
  name: 'User registers',
  description: 'Triggered when a user registers on the forum',
  id: 'user-register',
  code(fathomEv: FathomEvent) {
    override(SignUpModal.prototype, 'onsubmit', function (this: SignUpModal, orig, domEv) {
      domEv.preventDefault();

      this.loading = true;

      const body = this.submitData();

      app
        .request({
          url: app.forum.attribute('baseUrl') + '/register',
          method: 'POST',
          body,
          errorHandler: this.onerror.bind(this),
        })
        .then(() => {
          fathomEv.track();
          window.location.reload();
        }, this.loaded.bind(this));
    });
  },
} as FathomEvent;
