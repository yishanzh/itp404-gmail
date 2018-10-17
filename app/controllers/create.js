import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    createEmail(event){
      event.preventDefault();

      // console.log(this.subject, this.from, this.to, this.message);

      let email = this.store.createRecord('email', {
        subject: this.subject,
        from: this.from,
        to: this.to,
        message: this.message
      });

      email.save().then(() => {
        this.transitionToRoute('email', email.id);
      });

    }
  }
});
