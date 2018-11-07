import Controller from '@ember/controller';
import window from 'ember-window-mock';

export default Controller.extend({
  actions: {
    deleteEmail(email){
      let confirmed = window.confirm(
        'Are you sure you want to delete this email?'
      );

      if (confirmed) {
        let afterdestroy = email.destroyRecord();

        afterdestroy.then(() => {
          this.transitionToRoute('index');
        });


      }
    }
  }
});
