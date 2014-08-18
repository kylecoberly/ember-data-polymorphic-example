import DS from 'ember-data';
import Post from '../models/post';

export default Post.extend({
	body: DS.attr('string'),
	postType: 'text'
});