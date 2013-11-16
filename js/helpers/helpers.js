// use moment.js to formate the creation date for the post
Ember.Handlebars.helper('formatDate', function(date) {
	return moment(date).fromNow();
});

// use showdown.js to format the post content in Markdown
var showdown = new Showdown.converter();

Ember.Handlebars.registerBoundHelper('formatMarkdown', function(post_content) {
	return new Handlebars.SafeString(showdown.makeHtml(post_content));
});