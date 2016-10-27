import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    savePost() {
      var params = {
        title: this.get('post-title'),
        date: moment().format('MMMM Do YYYY'),
        text: this.get('post-text'),
        image: this.get('post-image')
      };
      console.log(params);
      this.sendAction('savePost', params);
    }
  }

});
