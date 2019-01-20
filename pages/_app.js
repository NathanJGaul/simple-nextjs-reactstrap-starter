import React from 'react';
import App, { Container } from 'next/app';
import Head from 'next/head';

import 'bootstrap/dist/css/bootstrap-reboot.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import TitleBar from '../components/TitleBar';

const Layout = ({ children }) => (
  <>
    <TitleBar />
    {children}
  </>
);

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <Head>
          <title>notes</title>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
        </Head>
        <Container>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </Container>
      </>
    );
  }
}

export default MyApp;
