import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

import Link from 'next/link';
import Router from 'next/router';
import WPAPI from 'wpapi';

import Config from '../config';

//Components
import PageWrapper from '../src/components/PageWrapper';
import SignUpForm from '../src/components/SignUpForm';
import Layout from '../src/components/Layout';
import Menu from '../src/components/Menu';
import Map from '../src/components/Map';

//Views
import SidebarMenu from '../src/views/SidebarMenu';

//Containers
import MainHeader from '../src/containers/MainHeader';
import FullContainer from '../src/containers/FullContainer';
import LogBookContainer from '../src/containers/LogBookContainer';
import NextDatesContainer from '../src/containers/NextDatesContainer';
import IniciativeContainer from '../src/containers/IniciativeContainer';
import RoadContainer from '../src/containers/RoadContainer';

const wp = new WPAPI({ endpoint: Config.apiUrl });

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  container: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    padding: '18px',
  },
});

const tokenExpired = () => {
  if (process.browser) {
    localStorage.removeItem(Config.AUTH_TOKEN);
  }
  wp.setHeaders('Authorization', '');
  Router.push('/login');
};

class Index extends Component {
  state = {
    id: '',
  };

  static async getInitialProps() {
    try {
      const [page, posts, pages] = await Promise.all([
        wp
          .pages()
          .slug('welcome')
          .embed()
          .then(data => {
            return data[0];
          }),
        wp.posts().embed(),
        wp.pages().embed(),
      ]);

      return { page, posts, pages };
    } catch (err) {
      if (err.data.status === 403) {
        tokenExpired();
      }
    }

    return null;
  }

  componentDidMount() {
    const token = localStorage.getItem(Config.AUTH_TOKEN);
    if (token) {
      wp.setHeaders('Authorization', `Bearer ${token}`);
      wp.users()
        .me()
        .then(data => {
          const { id } = data;
          this.setState({ id });
        })
        .catch(err => {
          if (err.data.status === 403) {
            tokenExpired();
          }
        });
    }
  }

  render() {
    const { id } = this.state;
    const { posts, pages, headerMenu, page, classes } = this.props;

    const notLoggedContent = (
      <div>
        <SidebarMenu>
          <Grid container spacing={24}>
            <MainHeader />
          </Grid>
        </SidebarMenu>
        <FullContainer extraClass={'homeFull'}>
          <Grid item xs={12} md={6}>
            <SignUpForm />
          </Grid>
        </FullContainer>
      </div>
    );

    const loggedContent = (
      <div>
        <SidebarMenu>

        </SidebarMenu>
        <div className="homeMapContainer">
          <Map height="500px"/>
        </div>
        <FullContainer extraClass={'RoadFullContainer'}>
          <RoadContainer/>
        </FullContainer>
        <FullContainer extraClass={'NextDatesFullContainer'}>
          <NextDatesContainer/>
        </FullContainer>
        <FullContainer extraClass={'LogBookFullContainer'}>
          <LogBookContainer/>
        </FullContainer>
        <FullContainer extraClass={'IniciativeFullContainer'}>
          <IniciativeContainer/>
        </FullContainer>
      </div>
    );

    return <div>{loggedContent}</div>;
  }
}

Index.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PageWrapper(Index));
