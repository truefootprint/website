import Icon from "../icon";
import { Link } from "../scroll";
import css from "./styles.module.scss";

const Hero = () => (
  <div className={css.hero}>
    <div className={css.background}>
      <div className={css.crosshatch} />
    </div>

    <div className={css.foreground}>
      <h3 className={css.text}>
        <div>Harnessing</div>
        <div>grassroots ingenuity</div>
        <div>for your </div>
        <div>sustainable future</div>
      </h3>
    </div>
  </div>
);

export default Hero;
