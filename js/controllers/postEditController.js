App.PostEditController = Ember.ObjectController.extend({
  actions: {
    save: function(){
    	var post = this.get('model');
    	// this will tell Ember-Data to save/persist the new record
    	post.save();
    	
/*
    	// verify that the post was updated before routing
  		post.one('didUpdate', this, function() {
  			console.log('It worked!')
  			// redirects to post itself
  			this.transitionToRoute('post', post);
  		}); */

		this.transitionToRoute('post', post);
    }
  }
});