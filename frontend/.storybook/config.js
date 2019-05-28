import { configure, addDecorator } from '@storybook/react';
import "../src/styles/_base.scss";
import "../src/styles/components/_all.scss";

const req = require.context(
  '../src',
  true,
  /(\.stories\.js$)|(\.stories\.jsx$)/,
);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
