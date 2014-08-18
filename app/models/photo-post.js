import DS from 'ember-data';
import Post from '../models/post';

export default Post.extend({
	photoUrl: DS.attr('string'),
	postType: 'photo'
});