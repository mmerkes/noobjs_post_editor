App.PostsController = Ember.ArrayController.extend({
	sortProperties: ['title'],
	sortAscending: true,

	postsCount: function() {
		return this.get('model.length');
	}.property('@each')
});