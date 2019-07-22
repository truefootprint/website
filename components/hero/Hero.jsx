import Icon from "../icon";
import { Link } from "../scroll";
import css from "./styles.scss";

const Hero = () => (
  <div className={css.hero}>
    <div className={css.background}>
      <div className={css.crosshatch} />
    </div>

    <div className={css.foreground}>
      <h3 className={css.text}>
        <div>We help companies</div>
        <div>and investors</div>
        <div>with better</div>
        <div>sustainability data</div>
      </h3>

      <Link to="approach" label="hero-chevron">
        <Icon className={css.chevron} name="fa-chevron-down" />
      </Link>
    </div>
  </div>
);

export default Hero;
