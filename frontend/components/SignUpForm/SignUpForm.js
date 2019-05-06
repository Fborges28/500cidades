import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  textField: {},
  button: {
    padding: '18px',
  },
  paper: {
    color: theme.palette.text.secondary,
  },
  introText: {
    padding: 0,
  },
});

class SignUpForm extends Component {
  onSubmit(e) {
    e.preventDefault();
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <form onSubmit={this.onSubmit}>
          <Grid container spacing={24} className={classes.paper}>
            <Grid item xs={8}>
              <p className={classes.introText}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aliquam, eligendi soluta enim, ipsa eaque similique a voluptatum
                tempora neque fuga nobis repellat, error reiciendis molestiae
                animi id quidem quia esse.
              </p>
            </Grid>
            <Grid item xs={12} md={8}>
              <TextField
                id="outlined-email-input"
                label="Email"
                className={classes.textField}
                type="email"
                name="email"
                autoComplete="email"
                margin="normal"
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} md={4} />
            <Grid item xs={12} md={4}>
              <TextField
                id="outlined-helperText"
                label="Usuário"
                defaultValue="Seu usuário"
                className={classes.textField}
                helperText="usuário disponível"
                margin="normal"
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <TextField
                id="outlined-password-input"
                label="Senha"
                className={classes.textField}
                type="password"
                autoComplete="current-password"
                margin="normal"
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <TextField
                id="outlined-password-input"
                label="Confirmar senha"
                className={classes.textField}
                type="password"
                autoComplete="current-password"
                margin="normal"
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <Typography align="center">Sua url personalizada é</Typography>
            </Grid>
            <Grid item xs={12}>
              <Button
                variant="contained"
                fullWidth
                color={'secondary'}
                className={classes.button}
              >
                Criar conta
              </Button>
            </Grid>
          </Grid>
        </form>
      </div>
    );
  }
}

SignUpForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SignUpForm);
