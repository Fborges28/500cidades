import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import DateCard from '../DateCard';

import Slider from './Slider';

storiesOf('Slider', module).add('default', () => {
  const a = <DateCard />;
  const items = [a, a, a, a, a];
  return <Slider items={items} />;
});
