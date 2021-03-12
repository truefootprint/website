import Head from "next/head";
import ReactGA from "react-ga";
import { Container, Row, Col } from "react-bootstrap";

// import "./reset.module.scss";
// import "./typography.module.scss";


ReactGA.initialize("UA-144174517-1");
ReactGA.pageview("/");

const Layout = ({ children }) => <>
  <Head>
    <link rel="shortcut icon" href="/static/TF-Favicon.svg" />
    <link href="https://fonts.googleapis.com/css?family=Lato:400,700,900" rel="stylesheet" />
    <title>TrueFootprint</title>
  </Head>
  <Container fluid>
  <Row>
    <Col>
  {children}
  </Col>
  </Row>
  </Container>
</>;

export default Layout;
