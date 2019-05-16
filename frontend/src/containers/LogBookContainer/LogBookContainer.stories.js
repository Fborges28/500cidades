import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import LogBookContainer from './LogBookContainer';

storiesOf('LogBookContainer', module).add('default', () => (
  <LogBookContainer />
));
