import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import NextDatesContainer from './NextDatesContainer';

storiesOf('NextDatesContainer', module).add('default', () => (
  <NextDatesContainer />
));
