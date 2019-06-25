import Layout from "../layout";
import Hero from "../hero";
import NavBar from "../nav_bar";
import Heading from "../heading";
import url from "../../helpers/url";
import css from "./styles.scss";

const Home = () => (
  <Layout>
    <NavBar />
    <Hero />

    <div className={css.content}>
      <section className={css.side_by_side}>
        <div className={css.left}>
          <Heading>Solution</Heading>

          <p>
          We work with the beneficiaries of your sustainability projects:
          the residents of the rural mining villages where you are constructing roads;
          the cocoa farmers whose children go to the new schools you’re paying for.
          </p>

          <p>
          Our technology empowers them to collect data and to take ownership of
          solutions to improve their lives.
          </p>

          <p>
          The people at the base of your supply chain deliver the data you need
          because it works for them.  It’s good for them and it’s good for you.
          </p>
        </div>

        <div className={css.right} />
      </section>

      <section className={css.full_width}>
        <Heading>Scorecards</Heading>

        <p>
          We have analysed sustainability and annual reports in key industries.
          We have found that they do not report enough on the <b>outcomes</b> of sustainability efforts.
          Our aim is to help companies be strategic and impactful in their reporting on sustainability.
        </p>

        <p>
          You can download our free reports:
        </p>

        <ul>
          <li>
            Agribusiness: <a href={url("/static/01-agribusiness-sustainability-report-2019.pdf")} target="_blank">
              The State of Agribusiness Sustainability 2019</a>
          </li>

          <li>
            Cocoa, Coffee, Tea: <a href={url("/static/02-cocoa-coffee-tea-sustainability-report-2019.pdf")} target="_blank">
              The State of Cocoa, Coffee, Tea Sustainability 2019</a>
          </li>

          <li>Mining: <a href={url("/static/03-mining-sustainability-report-2019.pdf")} target="_blank">
            The State of Mining Sustainability 2019</a>
          </li>
        </ul>
      </section>

      <section className={css.full_width}>
        <Heading>Contact</Heading>

        <h4>Inquiries</h4>

        <p>
          For any inquiries, questions or commendations, please email us at <a href="mailto:info@truefootprint.com">info@truefootprint.com</a>.
        </p>
      </section>
    </div>
  </Layout>
);

export default Home;
