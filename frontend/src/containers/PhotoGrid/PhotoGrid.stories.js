import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import PhotoGrid from './PhotoGrid';

storiesOf('PhotoGrid', module).add('default', () => {
	let photos = [
		"/static/images/image1.png", 
		"/static/images/image2.png", 
		"/static/images/image3.png", 
		"/static/images/image4.png"
	]

	return (
		<PhotoGrid photos={photos}/>
	)
});
