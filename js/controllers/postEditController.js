App.PostEditController = Ember.ObjectController.extend({
  actions: {
    save: function(){
      var post = this.get('model');
      // this will tell Ember-Data to save/persist the new record
      post.save();
      // then transition to the current user
      this.transitionToRoute('post', post);
    }
  }
});