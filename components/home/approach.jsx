import css from "./styles.module.scss";
import Heading from "../heading";
import { Link, Target } from "../scroll";
import { Image, Row, Col } from "react-bootstrap";

const Approach = () => (
  <section className={`${css.full_width} ${css.gradient}`}>
    <Row>
      <Col className={css.padding_for_rows} >
        <Heading>Our Approach</Heading>
      </Col>
    </Row>
    <br/><br/><br/>
    <Row>
      <Col  md={{ offset: 1}}>
        <p>
        Whether you’re a finance organisation, part of a global supply chain, 
        or a government body, we can help you improve your sustainability and impact.        
        </p>
        <p>Our approach is unique and proven:</p>

        <ul>
          <li>
          We harness the knowledge of global workforces and engage them in delivering better outcomes and impacts.
          </li>
          <li>
          In the process, we provide you with the richest possible sustainability data and 
    help embed sustainability into the DNA of your organisation.
          </li>
        </ul>
      </Col>
      <Col className={css.padding_for_working_image_sm}>
        <Image src="/static/approach.png" fluid />
      </Col>
    </Row>
  </section>
);

export default Approach;