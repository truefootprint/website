import Head from "next/head";
import ReactGA from "react-ga";

import "./reset.scss";
import "./typography.scss";

ReactGA.initialize("UA-144174517-1");
ReactGA.pageview("/");

const Layout = ({ children }) => <>
  <Head>
    <link rel="shortcut icon" href="/static/favicon.png" />
    <link href="https://fonts.googleapis.com/css?family=Lato:400,700,900" rel="stylesheet" />
    <title>TrueFootprint</title>
  </Head>

  {children}
</>;

export default Layout;
