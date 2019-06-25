import Layout from "../layout";
import Hero from "../hero";
import NavBar from "../nav_bar";
import Heading from "../heading";
import css from "./styles.scss";

const Home = () => (
  <Layout>
    <NavBar />
    <Hero />

    <Heading>The Problem</Heading>
  </Layout>
);

export default Home;
