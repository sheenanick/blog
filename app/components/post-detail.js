import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveComment(params) {
      this.sendAction('saveComment', params);
    },
    destroyComment(comment, post) {
      this.sendAction('destroyComment', comment, post);
    },
    update(comment, params) {
      this.sendAction('update', comment, params);
    }
  }
});
