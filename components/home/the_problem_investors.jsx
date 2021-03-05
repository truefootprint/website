import css from "./styles.module.scss";
import Heading from "../heading";


const TheProblemInvestors = ({background}) => (
<section className={css.full_width}>
    
<div className={css.wrap}>
  <Heading subheading="for investors">The Problem</Heading>

  <div className={css.panels}>
    <div className={css.panel}>
      <div className={css.background} {...background("/static/classroom.jpg")} />

      <h3>Poor reporting</h3>

      <p>
        More and more companies report sustainability numbers but are
        they making a difference? They may have spent x amount of money
        or trained people for y hours, but what impact did that have?
        What is really behind the numbers?
      </p>
    </div>

    <div className={css.panel}>
      <div className={css.background} {...background("/static/fruit.jpg")} />

      <h3>Difficult to compare</h3>

      <p>
        It’s hard to compare different companies, especially when
        absolute numbers will obviously be higher for larger companies
        than smaller ones. This leaves investors in the dark when trying
        to compare apples to apples.
      </p>
    </div>
  </div>
</div>
</section>
);

export default TheProblemInvestors;