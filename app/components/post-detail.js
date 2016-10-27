import Ember from 'ember';

export default Ember.Component.extend({
  sortBy: ['date:desc'],
  sortedComments: Ember.computed.sort('post.comments', 'sortBy'),
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
