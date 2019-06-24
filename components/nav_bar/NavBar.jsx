import Logo from "../logo";
import css from "./styles.scss";

const NavBar = () => (
  <div className={css.nav_bar}>
    <div className={css.logo}>
      <Logo />
    </div>

    <a href="#problem">Problem</a>
    <a href="#solution">Solution</a>
    <a href="#downloads">Downloads</a>
    <a href="#contact">Contact</a>
  </div>
);

export default NavBar;
