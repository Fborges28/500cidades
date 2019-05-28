import React from 'react';
import Head from 'next/head';
import stylesheet from '../../styles/main.scss';

const HTMLHead = () => (
  <div>
    <Head>
      <style
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: stylesheet }}
      />
      <meta
        name="viewport"
        content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
      />
      <meta charSet="utf-8" />
      <title>WordPress + React Starter Kit Frontend by Postlight</title>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
      />
      <link 
      rel="stylesheet" 
      href="https://use.fontawesome.com/releases/v5.8.2/css/all.css" 
      integrity="sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay" 
      crossOrigin="anonymous"/>
    </Head>
  </div>
);

export default HTMLHead;
