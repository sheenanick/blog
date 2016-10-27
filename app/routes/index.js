import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    var currentDate = moment().format('MMMM Do YYYY');
    return Ember.RSVP.hash({
      posts: this.store.findAll('post'),
      comments: this.store.findAll('comment'),
      topFivePosts: this.store.query('post', {
        limitToFirst: 5
      })
    });
  },
  actions: {
    openNav() {
      document.getElementById("mySidenav").style.width = "352px";
    },
    closeNav() {
      document.getElementById("mySidenav").style.width = "0";
    }
  }
});
