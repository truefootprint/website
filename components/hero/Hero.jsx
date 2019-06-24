import path from "../../helpers/path";
import css from "./styles.scss";

const Hero = () => (
  <div className={css.hero}>
    <div className={css.background}>
      <video autoPlay loop>
        <source src={path("cranes.mp4")} type="video/mp4" />
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
    </div>
  </div>
);

export default Hero;
