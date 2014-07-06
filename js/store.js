App.ApplicationAdapter = DS.RESTAdapter;

App.ApplicationSerializer = DS.RESTSerializer.extend({
  primaryKey: "_id"/*,

  normalizeHash: {
  	posts: function(hash) {
  		console.log("That's a hash");
  		delete hash.__v;
  		return hash;
  	}
  }*/
});