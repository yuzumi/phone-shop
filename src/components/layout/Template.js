import React from 'react';
import { MDBContainer } from "mdbreact";

import Header from 'components/layout/Header';
import Footer from 'components/layout/Footer';

const Template = ({ children }) => {
  const appName = process.env.REACT_APP_NAME;

  return (
    <>
      <Header appName={appName} />
      <main className="main">
        <MDBContainer>
          {children}
        </MDBContainer>
      </main>
      <Footer appName={appName} />
    </>
  );
};

export default Template;