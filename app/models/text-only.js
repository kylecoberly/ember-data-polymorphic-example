import DS from 'ember-data';
import Post from '../models/page';

export default Post.extend({
	body: DS.attr('string'),
	pageType: 'textOnly'
});