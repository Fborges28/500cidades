import { configure, addDecorator } from '@storybook/react';

//const req = require.context('../components', true, /\.stories\.js$/);
const req = require.context(
  '../src',
  true,
  /(\.stories\.js$)|(\.stories\.jsx$)/,
);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
