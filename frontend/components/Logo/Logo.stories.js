import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Logo from './Logo';

storiesOf('Logo', module).add('default', () => <Logo />);
