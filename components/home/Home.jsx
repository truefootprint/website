import Layout from "../layout";
import Hero from "../hero";
import NavBar from "../nav_bar";
import Heading from "../heading";
import Report from "../report";
import Profile from "../profile";
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
              <Link to="investors" label="approach-investors">investors</Link> seeking
              to make a positive impact.
            </li>
          </ul>
        </div>
      </section>

      <Target name="companies">
        <section className={css.full_width}>
          <div className={css.wrap}>
            <Heading subheading="for companies">The Problem</Heading>

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
                  but did your sustainability initiative reach its goals? Are people
                  better off? Is production more environmentally sustainable? To what
                  extent have working conditions improved? Too often there are no answers.
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
              We work with people in local communities: the cocoa farmers you try to lift
              out of poverty; the residents of the rural mining village where you are
              constructing a road.
              </p>

              <p>
              Our technology empowers them to collect data and to take ownership of
              solutions to improve their lives.
              The people at the base of your supply chain deliver the data you need
              because it works for them.
              </p>

              <p>
              It’s good for them and it’s good for you.
              </p>
            </div>
          </div>

          <div className={css.right} {...background("/static/working.jpg")} />
        </section>
      </Target>

      <Target name="investors">
        <section className={css.full_width}>
          <div className={css.wrap}>
            <Heading subheading="for investors">The Problem</Heading>

            <div className={css.panels}>
              <div className={css.panel}>
                <div className={css.background} {...background("/static/classroom.jpg")} />

                <h3>Poor reporting</h3>

                <p>
                  More and more companies report sustainability numbers but are
                  they making a difference? They may have spent x amount of money
                  or trained people for y hours, but what impact did that have?
                  What is really behind the numbers?
                </p>
              </div>

              <div className={css.panel}>
                <div className={css.background} {...background("/static/fruit.jpg")} />

                <h3>Difficult to compare</h3>

                <p>
                  It’s hard to compare different companies, especially when
                  absolute numbers will obviously be higher for larger companies
                  than smaller ones. This leaves investors in the dark when trying
                  to compare apples to apples.
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
              Our solution: verifiable, comparable and industry-specific <b>outcome</b> data, in real-time.
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

          <div className={css.right}>
            <div className={css.video_container}>
              <video muted autoPlay loop playsInline poster="/static/esg-score-dashboard-poster.png">
                <source src="/static/esg-score-dashboard.mp4" type="video/mp4" />
              </video>

              <p className={css.disclaimer}>
                Graphs for illustrative purposes only. Based on real but incomplete data.
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

      <section className={`${css.full_width} ${css.team}`}>
        <div className={css.wrap}>
          <Heading>Team</Heading>

          <Profile src="/static/fredrik.jpg" name="Fredrik Galtung" title="Chief Executive">
            <ul>
              <li>
                Founded <a href="https://integrityaction.org/" target="_blank">Integrity Action</a>
              </li>
              <li>Worked with Google, Siemens, World Bank, Global Fund to Fight Aids, TB, Malaria</li>
              <li>
                First employee and Head of Research
                at <a href="https://www.transparency.org.uk/" target="_blank">Transparency International</a>
              </li>
              <li>
                <a href="https://www.ashoka.org/en-gb/fellow/fredrik-galtung" target="_blank">
                  Ashoka Fellow
                </a>
              </li>
            </ul>
          </Profile>

          <Profile src="/static/edwin.jpg" name="Edwin Bos" title="Chief Product Officer">
            <ul>
              <li>
                Chief Innovation Officer
                at <a href="https://www.reevoo.com/en/" target="_blank">Reevoo</a>
              </li>
              <li>PhD in human-computer interaction, postdoc Stanford</li>
              <li>Worked at Apple and Yahoo, Reevoo</li>
              <li>Wikipedia contributor</li>
            </ul>
          </Profile>

          <Profile src="/static/chris.jpg" name="Chris Patuzzo" title="Chief Technology Officer">
            <ul>
              <li>Software engineer and technical architect</li>
              <li>BSc in computer science, Southampton</li>
              <li>Worked at Babylon Health, GOV.UK, Reevoo, Which?</li>
              <li>
                Creator of the <a href="https://sentient-lang.org/" target="_blank">Sentient</a> programming language
              </li>
            </ul>
          </Profile>

          <Profile src="/static/christian.jpg" name="Christian Benigni" title="Chief of Financial Products">
            <ul>
              <li>Co-founder GFP Juniper</li>
              <li>Co-founder First Avenue Partners</li>
              <li>Created the largest hedge fund franchise at the time in German-speaking Europe</li>
              <li>Expert in creation, structuring and placement of financial products</li>
            </ul>
          </Profile>
        </div>
      </section>

      <Target name="press">
        <section className={`${css.full_width} ${css.gradient}`}>
          <div className={css.wrap}>
            <Heading>Press</Heading>

            <div className={css.timeline}>
              <div className={css.item}>
                <time>23 July 2019</time>

                <p>
                  Quote from our CEO Fredrik Galtung in <a
                    href="https://www.theguardian.com/business/2019/jul/23/fairtrade-ethical-certification-supermarkets-sainsburys" target="_blank">
                  The Guardian’s
                  </a> long read "Is fair trade finished?"
                </p>

                <blockquote>
                  “If Fairtrade producers could show that their farmers were 10
                  or 20 years younger on average ... that would be a massive
                  advantage. But we’re unable to see all this.”
                </blockquote>
              </div>

              <div className={css.item}>
                <time>20 June 2019</time>
                <p>
                  In a podcast
                  with <a href="https://soundcloud.com/breakthechainpodcast/measuring-outcomes-not-outputs" target="_blank">
                    Break the Chain
                  </a>,
                  Fredrik spoke about inputs and outputs versus outcomes and impact.
                </p>
              </div>

              <div className={css.item}>
                <time>10 May 2019</time>

                <p>
                Fredrik was interviewed
                by <a href="https://anchor.fm/the-new-ism/episodes/S2-E2-Fredrik-Galtung-e40594" target="_blank">
                  The New Ism
                </a>,
                talking about how bottom-up measurement and empowerment is key in sustainability.
                </p>
              </div>

              <div className={css.item}>
                <time>29 March 2019</time>

                <p>
                Quote from <a href="https://www.miningweekly.com/article/mining-stakeholders-unable-to-assessthe-effectiveness-of-sustainability-investments-analyst-2019-03-29" target="_blank">
                  Mining Weekly
                </a> on TrueFootprint’s mining industry Scorecard:
                </p>

                <blockquote>
                  “governments, investors and customers have no way at present
                  of assessing the effectiveness of key business sustainability
                  investments, which means that some companies are not getting
                  credit for the work they are doing and the social and
                  economic value they create.”
                </blockquote>
              </div>
            </div>
          </div>
        </section>
      </Target>

      <Target name="contact">
        <section className={`${css.full_width} ${css.contact}`}>
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
    </div>
  </Layout>
);

export default Home;
