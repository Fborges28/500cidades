import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import VideoPlayer from './VideoPlayer';

storiesOf('VideoPlayer', module).add('default', () => (
  <VideoPlayer url={'https://www.youtube.com/watch?v=ysz5S6PUM-U'} />
));
