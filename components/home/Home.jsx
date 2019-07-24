import Layout from "../layout";
import Hero from "../hero";
import NavBar from "../nav_bar";
import Heading from "../heading";
import Report from "../report";
import { Link, Target } from "../scroll";
import css from "./styles.scss";

const background = (src) => (
  { style: { backgroundImage: `url(${src})` } }
);

const Home = () => (
  <Layout>
    <Target name="top" />

    <NavBar />
    <Hero />

    <div className={css.content}>
      <Target name="approach">
        <section className={`${css.full_width} ${css.gradient}`}>
          <div className={css.wrap}>
            <Heading>Our Approach</Heading>

            <p>
              We believe that data helps solve many sustainability problems.
              We help two types of stakeholders:
            </p>

            <ul className={css.numbered}>
              <li>
                <Link to="companies" label="approach-companies">companies</Link> that
                invest in the sustainability of their supply chain
              </li>

              <li>
                <Link to="investors" label="approach-investors">investors</Link> who
                seek sustainable companies and those seeking to make a positive impact
              </li>
            </ul>
          </div>
        </section>
      </Target>

      <Target name="companies">
        <section className={css.full_width}>
          <div className={css.wrap}>
            <Heading subheading="(for companies)">The Problem</Heading>

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
        </section>

        <section className={css.side_by_side}>
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
        </section>
      </Target>

      <Target name="investors">
        <section className={css.full_width}>
          <div className={css.wrap}>
            <Heading subheading="(for investors)">The Problem</Heading>

            <div className={css.panels}>
              <div className={css.panel}>
                <div className={css.background} {...background("/static/classroom.jpg")} />

                <h3>Inputs and Outputs</h3>

                <p>
                  More and more companies report sustainability numbers but many
                  are simply inputs and outputs:
                  “We spent x on training” or “we trained y people for n days”.
                  It's hard to tell what impact these are having. What do these
                  numbers mean?
                </p>
              </div>

              <div className={css.panel}>
                <div className={css.background} {...background("/static/fruit.jpg")} />

                <h3>How to compare?</h3>

                <p>
                  It's hard to compare these companies, especially when absolute
                  metrics will obviously be higher for bigger companies than
                  small ones. This leaves investors in the dark when trying to
                  compare apples to apples.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className={css.side_by_side}>
          <div className={css.left}>
            <div className={css.inner}>
              <Heading>Solution</Heading>

              <p>
              Our solution: verifiable company-level and industry-specific <b>outcome</b> data, in real-time.
              </p>

              <p>
              We provide dashboards that allow investors to compare apples to
              apples on Environmental, Social and Governance outcomes, such as:
              </p>

              <ul>
                <li>Greenhouse gas emissions per tonne of product</li>
                <li>Resolution rate of conflicts with the local community</li>
                <li>Dozens more, tailored by sector</li>
              </ul>
            </div>
          </div>

          <div className={css.right} {...background("/static/tracker.png")}>
            <p className={css.disclaimer}>
              These graphs are for illustrative purposes only. Their data is not representative.
            </p>
          </div>
        </section>
      </Target>


      <Target name="downloads">
        <section className={`${css.full_width} ${css.gradient}`}>
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
                <Report label="Agribusiness" filename="01-agribusiness-sustainability-report-2019.pdf" />
              </li>

              <li>
                <Report label="Cocoa, Coffee, Tea" filename="02-cocoa-coffee-tea-sustainability-report-2019.pdf" />
              </li>

              <li>
                <Report label="Mining" filename="03-mining-sustainability-report-2019.pdf" />
              </li>
            </ul>
          </div>
        </section>
      </Target>

      <Target name="press">
        <section className={css.full_width}>
          <div className={css.wrap}>
            <Heading>Press</Heading>

            <div className={css.timeline}>
              <div className={css.item}>
                <time>23 July 2019</time>

                <p>
                  Quote from our CEO Fredrik Galtung in the Guardian’s long read about Fairtrade:

                  <blockquote>
                    “If Fairtrade producers could show that their farmers were 10 or 20 years younger on average,
                     that would be something. If they could show they’re more climate-resistant,
                     that would be a massive advantage. But we’re unable to see all this.”
                  </blockquote>
                </p>

                <p>Is fair trade finished? <a
                  href="https://www.theguardian.com/business/2019/jul/23/fairtrade-ethical-certification-supermarkets-sainsburys" target="_blank">
                    The Guardian
                  </a>
                </p>
              </div>

              <div className={css.item}>
                <time>10 May 2019</time>

                <p>
                Fredrik was interviewed by The New Ism
                by <a href="https://anchor.fm/the-new-ism/episodes/S2-E2-Fredrik-Galtung-e40594" target="_blank">
                  The New Ism
                </a>,
                talking about how bottom-up measurement and empowerment is key in sustainability.
                </p>
              </div>

              <div className={css.item}>
                <time>20 June 2019</time>
                <p>
                  And in a podcast
                  with <a href="https://soundcloud.com/breakthechainpodcast/measuring-outcomes-not-outputs" target="_blank">
                    Break the Chain
                  </a>,
                  Fredrik spoke about inputs and outputs versus outcomes and impact.
                </p>
              </div>
            </div>
          </div>
        </section>
      </Target>


      <Target name="contact">
        <section className={css.full_width}>
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
        </section>
      </Target>

      <div className={css.spacer} />
    </div>
  </Layout>
);

export default Home;
