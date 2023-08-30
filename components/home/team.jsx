import css from "./styles.module.scss";
import Heading from "../heading";
import Profile from "../profile";
import { Image, Row, Col } from "react-bootstrap";

const Team = () => (
  <section className={`${css.full_width} ${css.team} ${css.gradient}`}>
    <div>
      <Heading>Team</Heading>
      <br/><br/><br/>
    </div>
    
    <Row>
      <Col md={{ offset: 1 }}>
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
      </Col>
      <Col>
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
      </Col>
    </Row>
    
    <Row>
      <Col md={{ offset: 1 }}>
        <Profile
          src="/static/imran.jpeg"
          name="Imran Ahmad"
          title="Global Partnerships and Strategy"
        >
          <ul>
          <li>Worked with Transparency International, Integrity Action</li>
          <li>Former MD Rainbow Collection UAE</li>
          <li>Former anti-corruption advisor to UNDP Mongolia</li>
          <li>Founded NGOs Insani Ekta Muhim and Punasch</li>
          </ul>
        </Profile>
        </Col>
        <Col>
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
      </Col>
    </Row>

    <Row>
      <Col md={{ offset: 1 }}>
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
      </Col>
      <Col>
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
              Former Program Coordinator with Sasakawa <br /> Global 2000 Uganda
            </li>
            <li>Volunteer with Field of Hope</li>
          </ul>
        </Profile>
      </Col>
    </Row>
    
    <Row>
      <Col md={{ offset: 1 }}>
      <Profile
          src="/static/d1.jpg"
          name="Daisy Barlett"
          title="Project Coordinator"
        >
          <ul>
            <li>Former Program Coordinator at Hospice Africa Uganda </li>
            <li>
              Experience in PR at Weber Shandwick Paris, for Twitter, Motorola, Rolls-Royce Motor Cars
            </li>
            <li>
              Masters in Trilingual Negotiation & Intercultural Management
            </li>
            <li>Avid Traveler</li>
          </ul>
        </Profile>
      </Col>
      <Col>
      <Profile
          src="/static/stan.png"
          name="Stanley Hirsch"
          title="Non-Executive Director"
        >
          <ul>
            <li>Group CEO of FuturaGene</li>
            <li>
World leading tree cell biologist
            </li>
          </ul>
        </Profile>
      </Col>      
    </Row>  
    <Row>
      <Col md={{ offset: 1 }}>
      <Profile
          src="/static/don.png"
          name="Don Xia"
          title="Non-executive Director"
        >
          <ul>
<li>Early IT entrepreneur</li>
<li>Established first Internet incubator in China</li>
<li>China Advisor International Crisis Group</li>
          </ul>
        </Profile>
      </Col>
      <Col>
      <Profile
          src="/static/KarenStorey.png"
          name="Karen Storey"
          title="Non-Executive Director"
        >
          <ul>
        <li>Founder of the Storey Group</li> 
<li>One Billion Tree Planting, Waste to Energy</li> 
<li>Deep UAE experience</li> 
          </ul>
        </Profile>
      </Col>      
    </Row> 
  </section>
);

export default Team;
