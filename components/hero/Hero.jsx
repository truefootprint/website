import Icon from "../icon";
import { Link } from "../scroll";
import css from "./styles.module.scss";
import { Container, Row, Col, Image } from "react-bootstrap";

const Hero = () => (
  <Row>
    <Col>
  <div className={css.conti}>
    {/* <div className={css.background}>
      <div className={css.crosshatch} />
    </div> */}
    <Image className={css.background_image} src="/static/silhouette.jpg" fluid /> 
    <div className={css.example}>
      <h3 className={css.text}>
        <div>Harnessing</div>
        <div>grassroots ingenuity</div>
        <div>for your </div>
        <div>sustainable future</div>
      </h3>
    </div>
  </div>
    </Col>
  </Row>
);

export default Hero;
