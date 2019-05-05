import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import SignUpForm from './SignUpForm';

storiesOf('SignUpForm', module).add('default', () => <SignUpForm/>);
