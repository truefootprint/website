import Logo from "../logo";
import { Link } from "../scroll";
import css from "./styles.scss";

const NavBar = () => (
  <div className={css.nav_bar}>
    <div className={css.logo}>
      <Link to="top" label="navbar-logo"><Logo /></Link>
    </div>

    <div className={css.right}>
      <Link to="companies" label="navbar-companies" activeClass={css.active}>Companies</Link>
      <Link to="investors" label="navbar-investors" activeClass={css.active}>Investors</Link>
      <Link to="downloads" label="navbar-downloads" activeClass={css.active}>Downloads</Link>
      <Link to="press" label="navbar-press" activeClass={css.active}>Press</Link>
      <Link to="contact" label="navbar-contact" activeClass={css.active}>Contact</Link>
    </div>
  </div>
);

export default NavBar;
