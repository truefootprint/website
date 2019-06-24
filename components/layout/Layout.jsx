import Head from "next/head";

import "./reset.scss";
import "./typography.scss";

const Layout = ({ children }) => <>
  <Head>
    <link href="https://fonts.googleapis.com/css?family=Lato:400,900" rel="stylesheet" />
  </Head>

  {children}
</>;

export default Layout;
