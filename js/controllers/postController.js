App.PostController = Ember.ObjectController.extend({

	modelUpdater: function() {
		var tags = this.get('model.tags');
		if(!(tags instanceof Array)) {
			// remove whitespace and make into an array
			// .replace(/ /g, '')
			tags = (this.get('model.tags') || "").split(',');
		}
		this.set('model.tags', tags);
	}.observes('model.tags'),

	actions: {
		edit: function() {
			this.transitionToRoute('post.edit');
		},
		delete: function(){
	      	// delete method toggles deleteMode's value
	      	this.toggleProperty('deleteMode');
	    },
	    cancelDelete: function(){
	      	// set deleteMode back to false
	      	this.set('deleteMode', false);
	    },
	    confirmDelete: function(){
	      	// tell Ember-Data to delete the current post
	      	this.get('model').deleteRecord();
	      	this.get('model').save();
	      	// and then go to the posts route
	      	this.transitionToRoute('posts');
	      	// set deleteMode back to false
	      	this.set('deleteMode', false);
	    }
	}
});