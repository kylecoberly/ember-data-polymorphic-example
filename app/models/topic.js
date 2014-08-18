import DS from 'ember-data';

export default DS.Model.extend({
	title: DS.attr('string'),
	pages: DS.hasMany('page', {async: true, polymorphic: true})
});
