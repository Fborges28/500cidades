import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import MainHeader from './MainHeader';

storiesOf('MainHeader', module).add('default', () => <MainHeader />);
