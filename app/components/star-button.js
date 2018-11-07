import Component from '@ember/component';

export default Component.extend({
  actions: {
    star(){
      //console.log(this.starred);
      // this.starred = !this.starred;
      this.onClick(!this.starred);
    }
  }
});
