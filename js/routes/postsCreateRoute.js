App.PostsCreateRoute = Ember.Route.extend({
	model: function() {
		return Em.Object.create({});
	},

	renderTemplate: function() {
		this.render('post.edit', {
			controller: 'postsCreate'
		});
	}
});