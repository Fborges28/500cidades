import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import BoxNumbers from './BoxNumbers';

storiesOf('BoxNumbers', module).add('default', () => (
  <BoxNumbers numbers={'53'} />
));
