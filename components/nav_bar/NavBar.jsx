import Logo from "../logo";
import { Link } from "../scroll";
import css from "./styles.scss";

const NavBar = () => (
  <div className={css.nav_bar}>
    <div className={css.logo}>
      <Link to="top"><Logo /></Link>
    </div>

    <div className={css.right}>
      <Link to="problem" activeClass={css.active}>Problem</Link>
      <Link to="solution" activeClass={css.active}>Solution</Link>
      <Link to="downloads" activeClass={css.active}>Downloads</Link>
      <Link to="contact" activeClass={css.active}>Contact</Link>
    </div>
  </div>
);

export default NavBar;
