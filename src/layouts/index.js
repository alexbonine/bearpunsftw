import React from "react";
import { Helmet } from "react-helmet";
import "styles/styles.css";

const Layout = ({ children }) => (
  <div>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Bear Puns FTW</title>
      <meta
        name="description"
        content="Wedding Website of Shawna Carney and Alex Bonine"
      />
      <meta name="author" content="Alex Bonine (lemurdev@gmail.com)" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href="https://bearpunsftw.com/" />
    </Helmet>
    {children}
  </div>
);

export default Layout;
