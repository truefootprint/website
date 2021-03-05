import css from "./styles.module.scss";
import Heading from "../heading";
import { Link, Target } from "../scroll";

const TheSolutionOutcomeTracker = ({background}) => (

<section className={css.side_by_side}>
<div className={css.left}>
  <div className={css.inner}>
    <Heading subheading="outcome tracker">OUR SOLUTIONS</Heading>

    <p>
    Our solution: verifiable, comparable and industry-specific <b>outcome</b> data, in real-time.
    </p>

    <p>
    We provide dashboards that allow investors to compare apples to
    apples on Environmental, Social and Governance outcomes, such as:
    </p>

    <ul>
      <li>Greenhouse gas emissions per tonne of product</li>
      <li>Resolution rate of conflicts with the local community</li>
      <li>Dozens more, tailored by sector</li>
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