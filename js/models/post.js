App.Post = DS.Model.extend({
	title: 			DS.attr(),
	post_content: 		DS.attr(),
	tags: 			DS.attr(),
	creationDate: 	DS.attr()
});

/*
App.Post.FIXTURES = [{
  _id: 1,
  title: 'A great post',
  post_content: 'A few brilliant things to say here.',
  tags: ['JavaScript', 'Underscore'],
  creationDate: 'Mon, 26 Aug 2013 20:23:43 GMT'
}, {
  _id: 2,
  title: 'A really great post',
  post_content: 'A few more brilliant things to say here.',
  tags: ['JavaScript', 'jQuery'],
  creationDate: 'Fri, 07 Aug 2013 10:10:10 GMT'
}
];

*/