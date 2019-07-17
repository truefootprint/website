import Layout from "../layout";
import Hero from "../hero";
import NavBar from "../nav_bar";
import Heading from "../heading";
import { Target } from "../scroll";
import url, { background } from "../../helpers/url";
import css from "./styles.scss";

const Home = () => (
  <Layout>
    <Target name="top" />

    <NavBar />
    <Hero />

    <div className={css.content}>
      <Target name="approach" className={css.full_width}>
        <div className={css.wrap}>
          <Heading>Our Approach</Heading>

          <p>
            We believe that data helps solve many sustainability problems.
            We help two types of stakeholders:
          </p>

          <ul className={css.numbered}>
            <li><b>companies</b> that invest in the sustainability of their supply chain</li>
            <li><b>investors</b> who seek sustainable companies and those seeking to make a positive impact</li>
          </ul>
        </div>
      </Target>

      <Target name="problem" className={css.full_width}>
        <div className={css.wrap}>
          <Heading>The Problem</Heading>

          <div className={css.panels}>
            <div className={css.panel}>
              <div className={css.background} {...background("/static/planning.jpg")} />

              <h3>Lots of activity</h3>

              <p>
                From cocoa to mining, cotton to banking, shipping to computing:
                across all industries companies are investing in the sustainability
                of their supply chains for the planet, for people and for communities.
              </p>
            </div>

            <div className={css.panel}>
              <div className={css.background} {...background("/static/driving.jpg")} />

              <h3>But does it work?</h3>

              <p>
                Many companies struggle to demonstrate the impact of their sustainability
                investments. This starts with credible data. You have spent the money,
                but did the community project reach its goals? Did the road to the market get built,
                and are people better off as a result? Too often there are no answers.
              </p>
            </div>
          </div>
        </div>
      </Target>

      <Target name="solution" className={css.side_by_side}>
        <div className={css.left}>
          <div className={css.inner}>
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
        </div>

        <div className={css.right} {...background("/static/working.jpg")} />
      </Target>

      <Target name="problem-investors" className={css.full_width}>
        <div className={css.wrap}>
          <Heading>The Problem</Heading>

          <p>
            More and more companies report more and more sustainability numbers.
            But many are simply inputs or outputs.
            “We spent x on training” or “we trained y people for n days”.
            Or they report absolute metrics that obviously are higher for bigger companies than for small companies.
            This leaves investors in the dark when trying to compare apples to apples.
          </p>
        </div>
      </Target>

      <Target name="solution-investors" className={css.full_width}>
        <div className={css.wrap}>
          <Heading>Solution</Heading>

          <p>
            Our solution: verifiable company-level and industry-specific outcome data, in real-time.
          </p>

          <p>
            We provide dashboards that allow investors to compare apples to apples on material Environmental, Social, and Governance outcomes.
            Greenhouse gas emissions per tonne of product. Resolution rate of conflicts with the local community. Dozens more, tailored by sector.
          </p>
        </div>
      </Target>

      <Target name="downloads" className={css.full_width}>
        <div className={css.wrap}>
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
        </div>
      </Target>

      <Target name="contact" className={css.full_width}>
        <div className={css.wrap}>
          <Heading>Contact</Heading>

          <h4>Inquiries</h4>

          <p>
            For any inquiries, questions or commendations, please email us at <a href="mailto:info@truefootprint.com">info@truefootprint.com</a>.
          </p>

          <p className={css.copyright}>
            © {new Date().getFullYear()} TrueFootprint
          </p>
        </div>
      </Target>

      <div className={css.spacer} />
    </div>
  </Layout>
);

export default Home;
