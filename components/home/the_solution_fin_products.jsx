import css from "./styles.module.scss";
import Heading from "../heading";
import { Link, Target } from "../scroll";
import { Image, Row, Col } from "react-bootstrap";

const TheSolutionFinProducts = ({ background }) => (
  <Row >
    <Col className={`${css.padding_for_rows}`} md={{offset: 1}}>
      <div className={css.inner}>
        <Heading subheading="FINANCIAL PRODUCT STRUCTURING">
          OUR SOLUTIONS
        </Heading>
        <p>
          We are looking to collaborate with asset owners and asset managers on
          the facilitation of systems change. Our unique quality of material,
          outcome-focused and constantly updated sustainability data can form
          the basis for:
        </p>
        <ul>
          <li>meaningful risk management tools</li>
          <li>
            the creation of targeted, scalable funding and investment management
            product.
          </li>
        </ul>
        <p>
          We would be delighted to be able to play our part in the unlocking of
          the financial means required to address some of humankind’s most
          pressing sustainability challenges. Examples include:
        </p>
        <ul>
          <li>
            GP stake investing
          </li>
          <li>
            "Contingent payer” structures.
          </li>
        </ul>
        <p>
          We invite asset owners and managers, and the financial, social and
          corporate sectors to accompany us on this journey.
        </p>
     </div>
    </Col>
    <Col className={`${css.padding_for_working_image_sm}`}>
      <Image src="/static/fin_sol.jpg" fluid height={40}/>
    </Col>
  </Row>
);

export default TheSolutionFinProducts;
