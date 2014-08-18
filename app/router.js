import Ember from 'ember';

var Router = Ember.Router.extend({
  location: PolymorphicTestENV.locationType
});

Router.map(function() {
});

export default Router;
