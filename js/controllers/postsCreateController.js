App.PostsCreateController = Ember.ObjectController.extend({
	actions: {
		save: function() {
			// just before saving, we set the creationDate
			this.get('model').set('creationDate', new Date());

			// create a record and save it to the store
			var newPost = this.store.createRecord('post', this.get('model'));
			newPost.save();

			// redirects to post itself
			this.transitionToRoute('post', newPost);
		}
	}
});