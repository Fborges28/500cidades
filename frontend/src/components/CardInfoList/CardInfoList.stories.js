import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import CardInfoList from './CardInfoList';

storiesOf('CardInfoList', module).add('default', () => <CardInfoList />);
