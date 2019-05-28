import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import TitleUnderline from './TitleUnderline';

storiesOf('TitleUnderline', module).add('default', () => (
  <TitleUnderline text="Titulo fictício" />
));
