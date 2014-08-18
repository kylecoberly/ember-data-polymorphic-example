import DS from 'ember-data';
import Post from '../models/page';

export default Post.extend({
	videoUrl: DS.attr('string'),
	pageType: 'video'
});