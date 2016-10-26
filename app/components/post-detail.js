import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveComment(params) {
      this.sendAction('saveComment', params);
    },
    destroyComment(comment) {
      this.sendAction('destroyComment', comment);
    },
    update(comment, params) {
      this.sendAction('update', comment, params);
    }
  }
});
