import Logo from "../logo";
import { Link } from "../scroll";
import css from "./styles.module.scss";
import { Container, Row, Col } from "react-bootstrap";

const NavBar = () => (

  <div className={css.nav_bar}>
    <div className={css.logo}>
      <Link to="top" label="navbar-logo"><Logo /></Link>
    </div>

    <div className={css.right}>
      <Link to="approach" label="navbar-approach" activeClass={css.active}>Approach</Link>
      <Link to="solutions" label="navbar-solutions" activeClass={css.active}>Solutions</Link>
      <Link to="downloads" label="navbar-downloads" activeClass={css.active}>Downloads</Link>
      <Link to="press" label="navbar-press" activeClass={css.active}>Press</Link>
      <Link to="team" label="navbar-team" activeClass={css.active}>Team</Link>
      <Link to="contact" label="navbar-contact" activeClass={css.active}>Contact</Link>
    </div>
  </div>
);

export default NavBar;
