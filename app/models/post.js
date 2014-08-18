import DS from 'ember-data';

export default DS.Model.extend({
	title: DS.attr('string'),
	person: DS.belongsTo('person'),
	postType: 'basic'
});
