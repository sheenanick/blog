import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      posts: this.store.findAll('post'),
      comments: this.store.findAll('comment')
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
