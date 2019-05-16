import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Button from '@material-ui/core/Button';

import CardInfo from './CardInfo';

storiesOf('CardInfo', module).add('default', () => {
  let content = (
    <div>
      <h3>Titulo</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis ullam
        est voluptatem illo, nulla quo facere velit eos repellat exercitationem
        harum quos reprehenderit labore blanditiis, sunt enim, libero quaerat
        nisi!
      </p>
      <Button variant="outlined">Leia mais</Button>
    </div>
  );
  return <CardInfo>{content}</CardInfo>;
});
