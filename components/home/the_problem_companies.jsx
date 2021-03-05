import css from "./styles.module.scss";
import Heading from "../heading";


const TheProblemCompanies = ({background}) => (
<section className={css.full_width}>
<div className={css.wrap}>
<Heading subheading="for companies">The Problem</Heading>

<div className={css.panels}>
  <div className={css.panel}>
    <div className={css.background} {...background("/static/planning.jpg")} />

    <h3>Lots of activity</h3>

    <p>
      From cocoa to mining, cotton to banking, shipping to computing:
      across all industries companies are investing in the sustainability
      of their supply chains for the planet, for people and for communities.
    </p>
  </div>

  <div className={css.panel}>
    <div className={css.background} {...background("/static/driving.jpg")} />

    <h3>But does it work?</h3>

    <p>
      Many companies struggle to demonstrate the impact of their sustainability
      investments. This starts with credible data. You have spent the money,
      but did your sustainability initiative reach its goals? Are people
      better off? Is production more environmentally sustainable? To what
      extent have working conditions improved? Too often there are no answers.
    </p>

  </div>
</div>
</div>
</section>
);

export default TheProblemCompanies;