import Ember from 'ember';
import moment from 'moment';

export default Ember.Component.extend({
  addNewComment: false,
  actions: {
    commentFormShow() {
      this.set('addNewComment', true);
    },
    saveComment() {
      var params = {
        title: this.get('comment-title'),
        date: moment().format('MMMM Do YYYY'),
        author: this.get('comment-author'),
        text: this.get('comment-text'),
        post: this.get('post')
      };
      this.set('addNewComment', false);
      this.sendAction('saveComment', params);
    }
  }
});
