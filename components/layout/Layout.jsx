import Head from "next/head";
import ReactGA from "react-ga4";
import { Container, Row, Col } from "react-bootstrap";

// import "./reset.module.scss";
// import "./typography.module.scss";


ReactGA.initialize("G-T51BRKN7EH");


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
