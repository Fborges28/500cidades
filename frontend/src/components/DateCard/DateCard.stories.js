import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import DateCard from './DateCard';

storiesOf('DateCard', module).add('default', () => <DateCard />);
