import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Fab from '@material-ui/core/Fab';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';

const theme = createMuiTheme({
  palette: {
    primary: { main: '#7dc9c0' }, // Purple and green play nicely together.
    secondary: { main: 'rgba(0,0,0,0)' }, // This is just green.A700 as hex.
  },
  shadows: ['none'],
  typography: { useNextVariants: true },
});

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: 0,
    marginRight: 10,
  },
};

function Header(props) {
  const { classes, onClickMenu } = props;
  return (
    <MuiThemeProvider theme={theme}>
      <div className={classes.root}>
        <AppBar position="static" color="secondary">
          <Toolbar variant="dense">
            <IconButton
              className={classes.menuButton}
              color="inherit"
              aria-label="Menu"
              onClick={onClickMenu}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" className={classes.grow} />
            <Fab
              variant="extended"
              color="primary"
              aria-label="Add"
              className={classes.menuButton}
            >
              Criar conta
            </Fab>
            <Fab
              variant="extended"
              color="secondary"
              aria-label="Add"
              className={classes.menuButton}
            >
              Entrar
            </Fab>
          </Toolbar>
        </AppBar>
      </div>
    </MuiThemeProvider>
  );
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);
