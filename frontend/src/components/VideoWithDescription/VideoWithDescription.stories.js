import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import VideoWithDescription from './VideoWithDescription';

storiesOf('VideoWithDescription', module).add('default', () => {
	let videoInfo = {
		"video_url": "https://www.youtube.com/watch?v=wLAURi-Zx2c&feature=youtu.be",
		"date": "30-05-2019",
		"title": "Rosa Luxemburgo - O filme"
	}

	return (
		<VideoWithDescription videoInfo={videoInfo}/>
	)
});
