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
import TheSolutionFinProducts from "./the_solution_fin_products";
import CountryPartners from "./country_partners";
import Advisory from "./advisory";
import { Container, Row, Col, Image } from "react-bootstrap";
import CorpPartners from "./corp_partners";
import HubspotForm from 'react-hubspot-form'

const background = (src) => ({ style: { backgroundImage: `url(${src})` } });

const Home = () => (
  <Layout>
    <Target name="top" />

    <NavBar />
    <Hero />

    <div className={css.content}>
      <Target name="approach">
        <Approach />
      </Target>
      <Target name="solutions">
        <TheSolution background={background} />
      </Target>
      <TheSolutionOutcomeTracker />
      <TheSolutionFinProducts/>
      <Covid background={background} />
      
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
              <a href="mailto:info@truefootprint.com">info@truefootprint.com</a>.<br/>
              Or use the form below:              
            </p>
            <br/>
            <div>
            <HubspotForm
              portalId='9481189'
              formId='13da2f3f-d0e7-4f97-92ab-a3bc5aaa8cfa'
              onSubmit={() => console.log('Submit!')}
              onReady={(form) => console.log('Form ready!')}
              loading={<div>Loading...</div>}
              />
            </div>
            <p>
              The partners at TrueFootprint would love to hear from you and
              compare notes on our <br/> respective experiences in the ESG and
              Sustainability space.
              <Row>
              <Col md={{ offset: 1 }}>
                <br/><br/>                
                The Netherlands office:<br/> 
                Fluwelen Burgwal 58 <br/> 
                2511 CJ <br/>
                The Hague  <br/> 
                The Netherlands<br/> 
              </Col>

              <Col >
                <br/><br/>
                The UK office:<br/> 
                Beech House, 
                Newmarket Road 4A, <br/> 
                Cambridge,<br/> 
                Cambridgeshire,<br/>  
                England, <br/> 
                CB5 8DT
              </Col>

              </Row>
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
