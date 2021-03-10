import Layout from "../layout";
import Hero from "../hero";
import NavBar from "../nav_bar";
import Heading from "../heading";
import Report from "../report";
import Profile from "../profile";
import { Link, Target } from "../scroll";
import css from "./styles.module.scss";
import Approach from "./approach";
import TheProblemCompanies from "./the_problem_companies";
import TheProblemInvestors from "./the_problem_investors";
import TheSolution from "./the_solution";
import Press from "./press";
import Scorecard from "./scorecard";
import Covid from "./covid";
import Team from "./team";
import News from "./news";
import TheSolutionOutcomeTracker from "./the_solution_outcome_tracker";
import CountryPartners from "./country_partners";
import Advisory from "./advisory";
import { Container, Row, Col } from "react-bootstrap";
import CorpPartners from "./corp_partners";

const background = (src) => ({ style: { backgroundImage: `url(${src})` } });

const Home = () => (
  <Layout>
    <Target name="top" />

    <Hero />
    <div className={css.content}>
    <NavBar />
   

      <Target name="approach">
        <Approach />
      </Target>
      <Target name="solutions">
        <TheSolution background={background} />
      </Target>
      <Covid background={background} />
      <TheSolutionOutcomeTracker />

      <Target name="downloads">
        <Scorecard />
      </Target>
      <Target name="press">
        <Press />
      </Target>
      <News />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Target name="team">
        <Team />
      </Target>
      <CountryPartners />
      <Advisory />
      <CorpPartners />
      <Target name="contact">
        <section className={`${css.full_width} ${css.contact}`}>
          <div className={css.wrap}>
            <Heading>Contact</Heading>

            <h4>Inquiries</h4>

            <p>
              For any inquiries, questions or commendations, please email us at{" "}
              <a href="mailto:info@truefootprint.com">info@truefootprint.com</a>
              .
            </p>

            <p className={css.copyright}>
              © {new Date().getFullYear()} TrueFootprint
            </p>
          </div>
        </section>
      </Target>
    </div>
  </Layout>
);

export default Home;
