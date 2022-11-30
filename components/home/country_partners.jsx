import { Accordion, Card, Button } from "react-bootstrap";
import Profile from "../profile";
import css from "./styles.module.scss";
import { Image, Row, Col } from "react-bootstrap";
import { FaCaretRight, FaCaretDown } from 'react-icons/fa';
import React, { useState, useEffect, useContext, useRef, cloneElement } from "react";


const CountryPartners = () => {

  const [open, setOpen] = useState(false);

  return(
  <div>
    <section className={css.wrap}>
      <h4 className={css.partnersColor}>COUNTRY PARTNERS</h4>
      <br />
      <p style={{ marginLeft: 20}} className={css.partnersSize}>
        We have country partners in the following countries:
        <br />
        DR Congo, Kenya, South Sudan, Nepal, Timor Leste, Rwanda, Burundi,
        Guinea.
      </p>
      <br />
    </section>
    <Accordion>
      <Card className={css.no_card_border}>
        <Row>
          <Col md={{ offset: 3, span: 6 }}>
            <Card.Header className={css.country_partners_header}>
              <Accordion.Toggle as={Button} variant="link" eventKey="0" onClick={() => setOpen(!open)}> 
                <h3 className={css.partnersSize}>
                { open ? <FaCaretDown /> : <FaCaretRight/> } Meet our country partners...
                </h3>
              </Accordion.Toggle>
            </Card.Header>
          </Col>
        </Row>
        <Accordion.Collapse eventKey="0">
          <Card.Body>
            <section className={`${css.full_width} ${css.team}`}>
              <Row>
                <Col md={{ offset: 1 }}>
                  <Profile
                    src="/static/samuel.jpg"
                    name="Samuel Niyomuremyi"
                    title="Country Partner"
                  >
                    <ul>
                      <li>Country Partner Rwanda</li>
                      <li>
                        Maternal health program coordinator
                        <br /> at Rwanda Village community
                        <br /> promoters(RVCP) organization.
                      </li>
                      <li>
                        Founder of stop covid19 campaign(SCC)
                        <br /> project.
                      </li>
                    </ul>
                  </Profile>
                </Col>
                <Col>
                  <Profile
                    src="/static/Heri.jpg"
                    name="Heri Bitamala"
                    title="Country Partner"
                  >
                    <ul>
                      <li>Country partner DR Congo</li>
                      <li>Founder CEO of CERC</li>
                      <li>Community monitoring expert</li>
                    </ul>
                  </Profile>
                </Col>
              </Row>

              <Row>
                <Col md={{ offset: 1 }}>
                  <Profile
                    src="/static/camara.jpeg"
                    name="Pierre Camara"
                    title="Country Partner"
                  >
                    <ul>
                      <li>Country partner Guinea</li>
                      <li>Field monitor at World Food Programme</li>
                      <li>Président Les Mêmes Droits pour Tous</li>
                    </ul>
                  </Profile>
                </Col>
                <Col>
                  <Profile
                    src="/static/Floribert.jpg"
                    name="Dr Floribert Kazingufu"
                    title="Country Partner"
                  >
                    <ul>
                      <li>Country Partner Burundi</li>
                      <li>
                        Founder of "Réseau des Églises Misssionnaires du Christ"
                      </li>
                      <li>Expert in community and people upliftment </li>
                      <li>Founder of Peace University, Fondation Chirezi</li>
                    </ul>
                  </Profile>
                </Col>
              </Row>

              <Row>
                <Col md={{ offset: 1 }}>
                  <Profile
                    src="/static/Isaac.jpg"
                    name="Isaac Abamwizeye"
                    title="Country Partner"
                  >
                    <ul>
                      <li>Country Partner Rwanda</li>
                      <li>
                        CEO and Founder of Confidence of <br /> Success Academy
                      </li>
                      <li>
                        Rwanda Volunteer in community to avoid <br />
                        human security issues and Covid-19
                      </li>
                    </ul>
                  </Profile>
                </Col>
                <Col>
                  <Profile
                    src="/static/john.jpg"
                    name="John Wabwire Shikuku"
                    title="Country Partner"
                  >
                    <ul>
                      <li>Country Partner Kenya</li>
                      <li>
                        Community health worker specialising in community health
                        management of <br />
                        HIV/ TB, pregnant mothers and under 5 children
                      </li>
                      <li>
                        Co-founder, Kenya Adolescent Youth Reproductive Health
                        and HIV Network
                      </li>
                    </ul>
                  </Profile>
                </Col>
              </Row>

              <Row>
                <Col md={{ offset: 1 }}>
                  <Profile
                    src="/static/judith.jpeg"
                    name="Judith Mutange"
                    title="Country Partner"
                  >
                    <ul>
                      <li>Country Partner Kenya</li>
                      <li>
                        Founding Director, <br /> Great Mercy Development Centre
                      </li>
                      <li>Mentors to vulnerable children and women</li>
                      <li>
                        Founded a school for accelerated learning <br /> from
                        primary to high school
                      </li>
                    </ul>
                  </Profile>
                </Col>
                <Col md={{ offset: 1}}>
                  <Profile
                    src="/static/jose.JPG"
                    name="Jose Alves da Costa"
                    title="Country Partner"
                  >
                    <ul>
                      <li>Country Partner Timor Leste</li>
                      <li>
                        Co-founder and Executive Director, <br />
                        Luta Hamutuk
                      </li>
                      <li>
                        Member of the Consultative Council
                        <br /> of the Ombusman
                      </li>
                    </ul>
                  </Profile>
                </Col>
              </Row>

              <Row>
                <Col md={{ offset: 1 }}>
                  <Profile
                    src="/static/rachel.jpeg"
                    name="Rachel Uwizerwa"
                    title="Country Partner"
                  >
                    <ul>
                      <li>Country Partner Rwanda</li>
                      <li>
                        Founder and CEO of Ngoboka Project <br /> to help
                        vulnerable single mothers and <br /> pregnant women who{" "}
                        <br /> are affected by Covid-19{" "}
                      </li>
                    </ul>
                  </Profile>
                </Col>
                <Col>
                  <Profile
                    src="/static/richard.jpg"
                    name="Richard Arinitwe"
                    title="Country Partner"
                  >
                    <ul>
                      <li>Country Partner Rwanda</li>
                      <li>
                        Founder and CEO at Mubuzima, a platform to raise health{" "}
                        <br /> calamities awareness in local language
                      </li>
                      <li>
                        Intern medical doctor at Kabgayi District Hospital
                      </li>
                    </ul>
                  </Profile>
                </Col>
              </Row>

              <Row>
                <Col md={{ offset: 1 }}>
                  <Profile
                    src="/static/Tarak.jpg"
                    name="Dr Tarak Bahadur"
                    title="Country Partner"
                  >
                    <ul>
                      <li>Country Partner Nepal</li>
                      <li>Visiting faculty, Kathmandu University</li>
                      <li>
                        Former Deputy Executive Director,
                        <br /> Nepal Administrative Staff College
                      </li>
                    </ul>
                  </Profile>
                </Col>
                <Col>
                  <Profile
                    src="/static/victor.jpeg"
                    name="Victor Alex"
                    title="Country Partner"
                  >
                    <ul>
                      <li>Country Partner South Sudan</li>
                      <li>Co-founder, African Youth Action Network (AYAN)</li>
                      <li>Monitoring and evaluation specialist</li>
                    </ul>
                  </Profile>
                </Col>
              </Row>
            </section>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  </div>);
};

export default CountryPartners;
