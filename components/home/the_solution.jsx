import css from "./styles.module.scss";
import Heading from "../heading";
import { Link, Target } from "../scroll";
import { Image, Row, Col } from "react-bootstrap";

const TheSolution = ({ background }) => (
  <Row>
    <Col className={css.padding_for_rows} md={{ offset: 1}}>
      <div className={css.inner}>
        <Heading subheading="FieldApp">Our solutions</Heading>

        <ul>
          <li>
          Our FieldApp means people on the ground can identify and solve problems to improve their lives.
          </li>
          <li>
            Our method means users take ownership of solutions, collecting data
            in the process.
          </li>
          <li>
          This data provides confidence in activities and climate benefits actually happening.
          </li>
          <li>
          We produce reports with rich sustainability data.
          </li>
          <li>
          Companies benefit from an engaged workforce and supply chain to implement successful solutions from the grassroots.
          </li>
        </ul>
      </div>
    </Col>
    <Col className={css.padding_for_working_image_sm}>
      <Image src="/static/farmer.png" fluid />
    </Col>
  </Row>
);

export default TheSolution;
