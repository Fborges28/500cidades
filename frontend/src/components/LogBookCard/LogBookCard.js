import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { flexbox } from '@material-ui/system';
import IconButton from '@material-ui/core/IconButton';
import ArrowForward from '@material-ui/icons/ArrowForward';

import './LogBookCard.scss';

export default function LogBookCard() {
  return (
    <div className="LogBookCard">
      <Grid container spacing={24}>
        <Grid item xs={12} className="LogBookCard__container__top no-padding">
          <header>
            <img src="/static/images/image4.png" alt="" />
          </header>
        </Grid>
        <Grid
          item
          xs={12}
          className="LogBookCard__container__bottom no-padding"
        >
          <footer>
            <Grid container xs={12}>
              <Grid item xs={10} className="LogBookCard__info">
                <h4 className="title">Cidade histórica de Paraty</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Impedit assumenda vero atque, commodi, earum a vel, quo dolore
                  vitae illum officiis cumque! Quisquam sed accusamus quae ad?
                  Quam, fuga autem.
                </p>
              </Grid>

              <Grid container direction="column" xs={2} wrap="nowrap">
                <Grid item xs={12} />
                <Grid
                  container
                  xs={12}
                  alignItems="center"
                  alignContent="center"
                  justify="center"
                >
                  <div className="LogBookCard-interaction">
                    <IconButton
                      className="top-menu-btn main-menu-btn no-padding"
                      color="inherit"
                      aria-label="Menu"
                    >
                      <ArrowForward />
                    </IconButton>
                  </div>
                </Grid>
              </Grid>
            </Grid>
          </footer>
        </Grid>
      </Grid>
    </div>
  );
}
