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
        We help companies improve their sustainability and impact. 
        We unlock the entrepreneurial energy of people to reduce or sequester carbon emissions. 
        Especially those of global supply chains.       
        </p>
        <ul>
          <li>
          What if millions of smallholder farmers were supported to transition to regenerative farming, each sequestering carbon in the soil? 
          </li>
          <li>
          What if companies were able to develop carbon offsets that directly benefit them, their supply chains and the communities they operate in? 
          </li>
        </ul>
      </Col>
      <Col className={css.padding_for_working_image_sm}>
        <Image src="/static/newApproach.png" fluid />
      </Col>
    </Row>
  </section>
);

export default Approach;