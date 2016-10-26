import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    savePost() {
      var params = {
        title: this.get('title'),
        date: this.get('date'),
        text: this.get('text'),
        image: this.get('image')
      };
      this.sendAction('savePost', params);
    }
  }

});
