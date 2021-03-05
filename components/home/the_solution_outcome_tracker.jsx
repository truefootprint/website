import css from "./styles.module.scss";
import Heading from "../heading";
import { Link, Target } from "../scroll";

const TheSolutionOutcomeTracker = ({background}) => (

<section className={css.side_by_side}>
<div className={css.left}>
  <div className={css.inner}>
    <Heading subheading="outcome tracker">OUR SOLUTIONS</Heading>
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
</div>

<div className={css.right}>
  <div className={css.video_container}>
    <video muted autoPlay loop playsInline poster="/static/esg-score-dashboard-poster.png">
      <source src="/static/esg-score-dashboard.mp4" type="video/mp4" />
    </video>

    <p className={css.disclaimer}>
      Graphs for illustrative purposes only. Based on real but incomplete data.
    </p>
  </div>
</div>
</section>
);

export default TheSolutionOutcomeTracker;