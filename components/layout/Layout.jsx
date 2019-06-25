import Head from "next/head";

import "./reset.scss";
import "./typography.scss";

const Layout = ({ children }) => <>
  <Head>
    <link href="https://fonts.googleapis.com/css?family=Lato:400,700,900" rel="stylesheet" />
    <script src="https://kit.fontawesome.com/89bcaf21e8.js"></script>
  </Head>

  {children}
</>;

export default Layout;
