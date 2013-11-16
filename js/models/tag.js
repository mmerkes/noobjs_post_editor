App.Tag = DS.Model.extend({
	posts: DS.hasMany('post')
});