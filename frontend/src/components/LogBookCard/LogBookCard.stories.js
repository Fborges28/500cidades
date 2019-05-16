import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import LogBookCard from './LogBookCard';

storiesOf('LogBookCard', module).add('default', () => <LogBookCard />);
