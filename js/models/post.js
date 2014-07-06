App.Post = DS.Model.extend({
	title: 			DS.attr(),
	post_content: 		DS.attr(),
  snippet: DS.attr(),
	tags: 			DS.attr(),
	creationDate: 	DS.attr(),
  author: DS.attr(),
  complete: DS.attr()
});
