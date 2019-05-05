import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import CenterGrid from '../CenterGrid';

const FullContainer = props => {
  const { children, extraClass } = props;

  return (
    <div className={`fullcontainer ${extraClass ? extraClass : ''}`}>
      <CenterGrid>{children}</CenterGrid>
    </div>
  );
};

export default FullContainer;
