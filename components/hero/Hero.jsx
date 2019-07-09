import Icon from "../icon";
import url, { background } from "../../helpers/url";
import css from "./styles.scss";

const Hero = () => (
  <div className={css.hero}>
    <div className={css.background} {...background("/static/cranes.jpg")}>
      <video muted autoPlay loop>
        <source src={url("/static/cranes.mp4")} type="video/mp4" />
      </video>

      <div className={css.crosshatch} />
    </div>

    <div className={css.foreground}>
      <h3 className={css.text}>
        <div>We help companies</div>
        <div>increase the</div>
        <div>return on investment</div>
        <div>of their</div>
        <div>sustainability</div>
        <div>projects</div>
      </h3>

      <a href="#problem">
        <Icon className={css.chevron} name="fa-chevron-down" />
      </a>
    </div>
  </div>
);

export default Hero;
