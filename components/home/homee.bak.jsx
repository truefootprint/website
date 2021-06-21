import Layout from "../layout";
import Hero from "../hero";
import NavBar from "../nav_bar";
import Heading from "../heading";
import Report from "../report";
import Profile from "../profile";
import { Link, Target } from "../scroll";
import css from "./styles.module.scss";
import CountryPartners from "./country_partners";
import Advisory from "./advisory";
import CorpPartners from "./corp_partners";

const background = (src) => ({ style: { backgroundImage: `url(${src})` } });

const Home = () => (
  <Layout>
    <Target name="top" />

    <NavBar />
    <Hero />
    <div >
      <section className={`${css.full_width} ${css.gradient}`}>
        <div className={css.wrap}>
          <Heading>Our Approach</Heading>

          <p>
            Whether you’re a finance organisation, part of a global supply
            chain, or a government body, we can help you improve your
            sustainability and impact. Our approach is unique and proven:
          </p>

          <ul>
            <li>
              We harness the knowledge of global workforces at the frontline of
              production and service delivery…
            </li>
            <li>
              …and positively engage them in delivering better outcomes and
              impacts
            </li>
            <li>
              In the process, we provide you with the richest possible
              sustainability data.
            </li>
            <li>
              This contributes to embedding sustainability into the DNA of your
              organisation.
            </li>
          </ul>
        </div>
      </section>

      <Target name="companies">
        <section className={css.side_by_side}>
          <div className={css.left}>
            <div className={css.inner}>
              <Heading>Our solutions</Heading>
              <ul>
                <li>
                  Our FieldApp means people on the ground can identify and solve
                  problems to improve their lives.
                </li>
                <li>
                  The data and solutions they find can be scaled up so everyone
                  benefits.
                </li>
                <li>
                  You decide the questions that need answering: users give you
                  data and come up with solutions.
                </li>
                <li>
                  Our method means users take ownership of solutions, collecting
                  data in the process.
                </li>
                <li>
                  We produce reports tailored to you, with the rich
                  sustainability data you need.
                </li>
                <li>
                  You benefit from an engaged workforce to implement successful
                  solutions from the grassroots.
                </li>
              </ul>
            </div>
          </div>

          <div className={css.right} {...background("/static/working.jpg")} />
        </section>
      </Target>

      <Target name="investors">


        <section className={`${css.side_by_side} ${css.gradient}`}>
          <div className={css.left}>
            <div className={css.inner}>
              <Heading>Solution</Heading>
              <ul>
                <li>
                  Our OutcomeTracker relates ESG/Sustainability data to
                  traditional corporate ratios and ensures their seamless
                  integration into all our clients’ decision-making processes…
                </li>
                <li>
                  ...so that you know all your decisions take into account the
                  true impact of a company’s practices.
                </li>
                <li>
                  OutcomeTracker integrates with our clients’ corporate data
                  systems.
                </li>
                <li>
                  ESG/Sustainability data can be ingested and extracted
                  automatically as and when needed.
                </li>
                <li>Data can be customised to our clients’ metrics system.</li>
                <li>
                  Clients decide which information they consider to be
                  “material” for all communication, management and corporate
                  funding projects.
                </li>
                <li>
                  OutcomeTracker provides industry comparisons, supports all
                  stakeholder engagement projects and can do so with high
                  frequency.
                </li>
              </ul>
            </div>
          </div>

          <div className={css.right}>
            <div className={css.video_container}>
              <video
                muted
                autoPlay
                loop
                playsInline
                poster="/static/esg-score-dashboard-poster.png"
              >
                <source
                  src="/static/esg-score-dashboard.mp4"
                  type="video/mp4"
                />
              </video>

              <p className={css.disclaimer}>
                Graphs for illustrative purposes only. Based on real but
                incomplete data.
              </p>
            </div>
          </div>
        </section>
      </Target>

      <Target name="downloads">
        <section className={`${css.full_width} ${css.gradient}`}>
          <div className={css.wrap}>
            <Heading>Scorecards</Heading>

            <p>
              We have analysed sustainability and annual reports in key
              industries. We have found that they do not report enough on the{" "}
              <b>outcomes</b> of sustainability efforts. Our aim is to help
              companies be strategic and impactful in their reporting on
              sustainability.
            </p>

            <p>You can download our free reports:</p>

            <ul>
              <li>
                <Report
                  label="Agribusiness"
                  filename="01-agribusiness-sustainability-report-2019.pdf"
                />
              </li>

              <li>
                <Report
                  label="Cocoa, Coffee, Tea"
                  filename="02-cocoa-coffee-tea-sustainability-report-2019.pdf"
                />
              </li>

              <li>
                <Report
                  label="Mining"
                  filename="03-mining-sustainability-report-2019.pdf"
                />
              </li>
            </ul>
          </div>
        </section>
      </Target>
      <Target name="press">
        <section className={`${css.full_width} ${css.gradient}`}>
          <div className={css.wrap}>
            <Heading>Press</Heading>

            <div className={css.timeline}>
              <div className={css.item}>
                <time>The Guardian</time>

                <p>
                  Quote from our CEO Fredrik Galtung in{" "}
                  <a
                    href="https://www.theguardian.com/business/2019/jul/23/fairtrade-ethical-certification-supermarkets-sainsburys"
                    target="_blank"
                  >
                    The Guardian’s
                  </a>{" "}
                  long read "Is fair trade finished?"
                </p>

                <blockquote>
                  “If Fairtrade producers could show that their farmers were 10
                  or 20 years younger on average ... that would be a massive
                  advantage. But we’re unable to see all this.”
                </blockquote>
              </div>

              <div className={css.item}>
                <time>Break the Chain</time>
                <p>
                  In a podcast with{" "}
                  <a
                    href="https://soundcloud.com/breakthechainpodcast/measuring-outcomes-not-outputs"
                    target="_blank"
                  >
                    Break the Chain
                  </a>
                  , Fredrik spoke about inputs and outputs versus outcomes and
                  impact.
                </p>
              </div>

              <div className={css.item}>
                <time>The New Ism</time>

                <p>
                  Fredrik was interviewed by{" "}
                  <a
                    href="https://anchor.fm/the-new-ism/episodes/S2-E2-Fredrik-Galtung-e40594"
                    target="_blank"
                  >
                    The New Ism
                  </a>
                  , talking about how bottom-up measurement and empowerment is
                  key in sustainability.
                </p>
              </div>

              <div className={css.item}>
                <time>Mining Weekly</time>

                <p>
                  Quote from{" "}
                  <a
                    href="https://www.miningweekly.com/article/mining-stakeholders-unable-to-assessthe-effectiveness-of-sustainability-investments-analyst-2019-03-29"
                    target="_blank"
                  >
                    Mining Weekly
                  </a>{" "}
                  on TrueFootprint’s mining industry Scorecard:
                </p>

                <blockquote>
                  “governments, investors and customers have no way at present
                  of assessing the effectiveness of key business sustainability
                  investments, which means that some companies are not getting
                  credit for the work they are doing and the social and economic
                  value they create.”
                </blockquote>
              </div>
            </div>
          </div>
        </section>
      </Target>
      <section className={`${css.full_width} ${css.gradient}`}>
        <div className={css.wrap}>
          <Heading>News</Heading>
          <ul style={{ paddingLeft: 125 }}>
            <li>
              Chad becomes the 26th country from where we receive FieldApp data
              (Feb ‘21)
            </li>
            <li>Imran Ahmad has joined our Advisory Board (Feb ‘21)</li>
            <li>
              We wrote a blogpost ‘Using real-time data to save lives’ for
              Apolitical. (Dec ‘20)
            </li>
            <li>
              We signed a strategic partnership agreement with Human Capital
              Network. (Dec ‘20)
            </li>
          </ul>
        </div>
      </section>
      <section
        className={css.side_by_side}
        style={{ backgroundColor: "white", padding: "20px" }}
      >
        <div className={css.left}>
          <div>
            <Heading>COVID-19</Heading>
            <ul>
              <li>
                We used our FieldApp to help improve public health safety during
                Covid-19
              </li>
              <li>Pilots live in 26 countries</li>
              <li>
                Results: All pilots flagged up important safety issues: <br />
                - 73% of users reported test kits not present when needed <br />
                - Over 400 reports of infected patients not being separated
              </li>
              <li>
                9 Ministries of Health have signed a Memorandum of Understanding
                in support of national scale-up plans
              </li>
            </ul>
          </div>
        </div>

        <div className={css.right} {...background("/static/covidmap.png")} />
      </section>
      <br />
      <br />
      <br />
      <br />
      <br />
      <Target name="team">
        <section className={`${css.full_width} ${css.team}`}>
          <div className={css.wrap}>
            <Heading>Team</Heading>
          </div>
        </section>
      </Target>
      <section className={`${css.full_width} ${css.team}`}>
        <div className={`${css.side_by_side}`}>
          <div className={css.left}>
            <Profile
              src="/static/fredrik.jpg"
              name="Fredrik Galtung"
              title="Chief Executive"
            >
              <ul>
                <li>
                  Founded{" "}
                  <a href="https://integrityaction.org/" target="_blank">
                    Integrity Action
                  </a>
                </li>
                <li>
                  Worked with Google, Siemens, World Bank, <br /> Global Fund to
                  Fight Aids, TB, Malaria
                </li>
                <li>
                  First employee and Head of Research <br />
                  at{" "}
                  <a href="https://www.transparency.org.uk/" target="_blank">
                    Transparency International
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.ashoka.org/en-gb/fellow/fredrik-galtung"
                    target="_blank"
                  >
                    Ashoka Fellow
                  </a>
                </li>
              </ul>
            </Profile>
          </div>
          <div className={css.right}>
            <Profile
              src="/static/christian-color.png"
              name="Christian Benigni"
              title="Chief of Financial Products"
            >
              <ul>
                <li>Co-founder GFP Juniper</li>
                <li>Co-founder First Avenue Partners</li>
                <li>
                  Created the largest hedge fund franchise at <br /> the time in
                  German-speaking Europe
                </li>
                <li>
                  Expert in creation, structuring and placement of financial
                  products
                </li>
              </ul>
            </Profile>
          </div>
        </div>

        <div className={`${css.side_by_side}`}>
          <div className={css.left}>
            <Profile
              src="/static/edwin.jpg"
              name="Edwin Bos"
              title="Chief Product Officer"
            >
              <ul>
                <li>
                  Chief Innovation Officer at{" "}
                  <a href="https://www.reevoo.com/en/" target="_blank">
                    Reevoo
                  </a>
                </li>
                <li>
                  PhD in human-computer interaction, postdoc
                  <br />
                  Stanford
                </li>
                <li>Worked at Apple and Yahoo, Reevoo</li>
                <li>Wikipedia contributor</li>
              </ul>
            </Profile>
          </div>
          <div className={css.right}>
            <Profile
              src="/static/chanda.jpeg"
              name="Chanda Pwapwa"
              title="Lead Engineer"
            >
              <ul>
                <li>Full stack developer</li>
                <li>Avid reader</li>
                <li>
                  Has worked on distributed teams located in <br /> Cape Town,
                  Singapore and London.
                </li>
              </ul>
            </Profile>
          </div>
        </div>
        <div className={`${css.side_by_side}`}>
          <div className={css.left}>
            <Profile
              src="/static/jackie.jpg"
              name="Jackie Acaa"
              title="Rural Development Specialist"
            >
              <ul>
                <li>
                  Agriculturalist, Master Trainer in FFS
                  <br /> methodology
                </li>
                <li>
                  Former Program Coordinator with Sasakawa <br /> Global 2000
                  Uganda
                </li>
                <li>Volunteer with Field of Hope</li>
              </ul>
            </Profile>
          </div>
          <div className={css.right}>
            <Profile
              src="/static/d1.jpg"
              name="Daisy Barlett"
              title="Project Coordinator"
            >
              <ul>
                <li>Former Program Coordinator at Hospice Africa Uganda </li>
                <li>
                  Experience in PR at Weber Shandwick Paris, for Twitter,
                  Motorola and Rolls-Royce Motor Cars
                </li>
                <li>
                  Master's in Trilingual Negotiation & Intercultural Management
                </li>
                <li>Avid Traveler</li>
              </ul>
            </Profile>
          </div>
        </div>
        <div className={`${css.side_by_side}`}>
          <div className={css.left}>
            <Profile
              src="/static/Carly.jpeg"
              name="Carly Dryhurst-Smith"
              title="Designer"
            >
              <ul>
                <li>Designed for Reevoo, Topshop and NHS</li>
                <li>Founder agency With Bells On!</li>
                <li>Lead UX designer at VC Forward Partners</li>
              </ul>
            </Profile>
          </div>
          <div className={css.right}>
            <Profile
              src="/static/audrey.JPG"
              name="Audrey de Garidel"
              title="Non-Executive Director"
            >
              <ul>
                <li>Facilitator of positive impact projects</li>
                <li>Co-founder, So Impact</li>
                <li>
                  Worked at Agence Française de Développement, FMO, InfraVia
                  Capital Partners, Latham & Watkins
                </li>
              </ul>
            </Profile>
          </div>
        </div>
      </section>

      <br/>
      <CountryPartners/>
      <br/><br/>
      <Advisory/>
      <br/><br/>
      <CorpPartners/>
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
          </div>
        </section>
      </Target>
      <section className={`${css.full_width} ${css.contact}`}>
        <div className={css.wrap}>
          <p className={css.copyright}>
            © {new Date().getFullYear()} TrueFootprint
          </p>
        </div>
      </section>
    </div>
  </Layout>
);

export default Home;
