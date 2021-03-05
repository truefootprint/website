import css from "./styles.module.scss";
import Heading from "../heading";
import { Link, Target } from "../scroll";

const TheSolution = ({background}) => (
<section className={css.side_by_side}>
<div className={css.left}>
  <div className={css.inner}>
    <Heading subheading="FieldApp">Our solutions</Heading>

    <ul>
                <li>
                  Our FieldApp means people on the ground can identify and solve
                  problems to improve their lives.
                </li>
                <li>
                  The data and solutions they find can be scaled up so everyone
                  benefits.
                </li>
                <li>
                  You decide the questions that need answering: users give you
                  data and come up with solutions.
                </li>
                <li>
                  Our method means users take ownership of solutions, collecting
                  data in the process.
                </li>
                <li>
                  We produce reports tailored to you, with the rich
                  sustainability data you need.
                </li>
                <li>
                  You benefit from an engaged workforce to implement successful
                  solutions from the grassroots.
                </li>
              </ul>
  </div>
</div>

<div className={css.right} {...background("/static/working.jpg")} />
</section>
);

export default TheSolution;