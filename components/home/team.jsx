import css from "./styles.module.scss";
import Heading from "../heading";
import Profile from "../profile";

const Team = () => (
  <section className={`${css.full_width} ${css.team} ${css.gradient}`}>
    <div>
      <Heading>Team</Heading>
    </div>
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
              Worked at Agence Française de Développement, FMO, InfraVia Capital
              Partners, Latham & Watkins
            </li>
          </ul>
        </Profile>
      </div>
    </div>
  </section>
);

export default Team;
