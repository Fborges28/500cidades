import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Link from 'next/link';
import Router from 'next/router';
import WPAPI from 'wpapi';

import PageWrapper from '../src/components/PageWrapper';
import SignUpForm from '../src/components/SignUpForm';
import Grid from '@material-ui/core/Grid';
import Config from '../config';

//Components
import Layout from '../src/components/Layout';
import Menu from '../src/components/Menu';

//Views
import SidebarMenu from '../src/views/SidebarMenu';

//Containers
import MainHeader from '../src/containers/MainHeader';
import FullContainer from '../src/containers/FullContainer';

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
    const fposts = posts.map(post => {
      return (
        <ul key={post.slug}>
          <li>
            <Link
              as={`/post/${post.slug}`}
              href={`/post?slug=${post.slug}&apiRoute=post`}
            >
              <a>{post.title.rendered}</a>
            </Link>
          </li>
        </ul>
      );
    });
    const fpages = pages.map(ipage => {
      return (
        <ul key={ipage.slug}>
          <li>
            <Link
              as={`/page/${ipage.slug}`}
              href={`/post?slug=${ipage.slug}&apiRoute=page`}
            >
              <a>{ipage.title.rendered}</a>
            </Link>
          </li>
        </ul>
      );
    });

    const content = (
      <div>
        <Grid container spacing={24}>
          <MainHeader />
        </Grid>
      </div>
    );
    return (
      <div>
        <SidebarMenu>{content}</SidebarMenu>
        <FullContainer extraClass={'homeFull'}>
          <Grid item xs={12} md={6}>
            <SignUpForm />
          </Grid>
        </FullContainer>
      </div>
    );
  }
}

Index.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PageWrapper(Index));
