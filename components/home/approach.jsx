import css from "./styles.module.scss";
import Heading from "../heading";
import { Link, Target } from "../scroll";

const Approach = () => (
<section className={`${css.full_width} ${css.gradient}`}>
<div className={css.wrap}>
<Heading>Our Approach</Heading>

<p>
  Whether you’re a finance organisation, part of a global supply
  chain, or a government body, we can help you improve your
  sustainability and impact. Our approach is unique and proven:
</p>

<ul>
  <li>
    We harness the knowledge of global workforces at the frontline of
    production and service delivery…
  </li>
  <li>
    …and positively engage them in delivering better outcomes and
    impacts
  </li>
  <li>
    In the process, we provide you with the richest possible
    sustainability data.
  </li>
  <li>
    This contributes to embedding sustainability into the DNA of your
    organisation.
  </li>
</ul>
</div>
</section>
);

export default Approach;