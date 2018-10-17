import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    deleteEmail(email){
      let confirmed = window.confirm(
        'Are you sure you want to delete this email?'
      );

      if (confirmed) {
        email.destroyRecord();

      }
    }
  }
});
