import Ember from 'ember';

export default Ember.Route.extend({
	model: function() {
		Ember.$.mockjax({
			url: '/topics/1',
			response: function(settings) {
				var json = {
					topic: {
						id: 1, 
						title: 'My Topic Title',
						links: {
							pages: '/topics/1/pages'
						}
					}
				};
				settings.success(json);
			}
		});


		Ember.$.mockjax({
			url: '/topics/1/pages',
			response: function(settings) {
				var json = {
					pages: [ 
						{
							id: 1,
							title: 'A Video',
							videoUrl: "www.google.com",
							type: "video"

						},{
							id: 2,
							title: 'Some Text',
							type: "textOnly"
						}
					]
				};
				settings.success(json);
			}
		});
		return this.store.find('topic', 1);
	}
});