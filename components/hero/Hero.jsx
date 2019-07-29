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
        <div>We help you</div>
        <div>achieve</div>
        <div>true and improved</div>
        <div>sustainability</div>
        <div>results</div>
      </h3>
    </div>
  </div>
);

export default Hero;
