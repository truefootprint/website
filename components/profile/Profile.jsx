import css from "./styles.module.scss";
import { Figure, Image, Row, Col } from "react-bootstrap";

const Profile = ({ src, name, title, children }) => (
  <Row className={css.paddingBottomForProfileRow}>
    <Col md={3} className={css.center_on_small_screen}>
      <Figure>
        <Figure.Image width={171} height={180} alt="171x180" src={src} roundedCircle />
        <Figure.Caption className={css.name}>
          {name}
        </Figure.Caption>
        <br/>
        <Figure.Caption className={css.title}>
          {title}
        </Figure.Caption>
      </Figure>
    </Col>
    <Col>
      {children}
    </Col>
  </Row>
);

export default Profile;
