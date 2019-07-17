import Logo from "../logo";
import { Link } from "../scroll";
import css from "./styles.scss";

const NavBar = () => (
  <div className={css.nav_bar}>
    <div className={css.logo}>
      <Link to="top"><Logo /></Link>
    </div>

    <div className={css.right}>
      <Link to="companies" activeClass={css.active}>Companies</Link>
      <Link to="investors" activeClass={css.active}>Investors</Link>
      <Link to="downloads" activeClass={css.active}>Downloads</Link>
      <Link to="contact" activeClass={css.active}>Contact</Link>
    </div>
  </div>
);

export default NavBar;
