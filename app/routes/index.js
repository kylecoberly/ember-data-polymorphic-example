import Ember from 'ember';

export default Ember.Route.extend({
	model: function() {
		Ember.$.mockjax({
			url: '/people/1',
			response: function(settings) {
				var json = {
					person: {
						id: 1, 
						first_name: 'luke', 
						last_name: 'skywalker', 
						links: { posts: '/people/1/posts' }
					}
				};
				settings.success(json);
			}
		});


		Ember.$.mockjax({
			url: '/people/1/posts',
			response: function(settings) {
				var json = {
					posts: [ 
						{id: 1, title: 'A Photo', type: "photoPost" }, 
						{id: 2, title: 'Some Text', type: "textPost" }
					]
				};
				settings.success(json);
			}
		});
		return this.store.find('person', 1);
	}
});