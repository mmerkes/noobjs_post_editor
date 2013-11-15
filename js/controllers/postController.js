App.PostController = Ember.ObjectController.extend({
	actions: {
		edit: function() {
			this.transitionToRoute('post.edit');
		}
	}
});