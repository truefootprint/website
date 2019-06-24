import css from "./styles.scss";

const Hero = () => (
  <div className={css.hero}>
    <video autoPlay loop>
      <source src="/static/cranes.mp4" type="video/mp4" />
    </video>

    <div className={css.crosshatch} />
  </div>
);

export default Hero;
