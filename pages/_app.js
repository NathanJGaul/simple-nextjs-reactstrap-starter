import React from 'react';
import App, { Container } from 'next/app';
import { Navbar, NavbarBrand } from 'reactstrap';

import 'bootstrap/dist/css/bootstrap-reboot.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Layout = ({ children }) => (
  <>
    <Navbar color="dark" dark>
      <NavbarBrand href="">notes</NavbarBrand>
    </Navbar>
    {children}
  </>
);

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Container>
    );
  }
}

export default MyApp;
