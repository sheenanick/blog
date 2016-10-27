import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete(comment, post) {
      if(confirm('Are you sure you want to delete your comment')) {
        this.sendAction('destroyComment', comment, post);
      }
    },
    update(comment, params) {
      this.sendAction('update', comment, params);
    }
  }
});
