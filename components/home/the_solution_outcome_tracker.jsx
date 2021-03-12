import css from "./styles.module.scss";
import Heading from "../heading";
import { Link, Target } from "../scroll";

const TheSolutionOutcomeTracker = ({background}) => (

<section className={css.side_by_side}>
<div className={css.left}>
  <div className={css.inner}>
    <Heading subheading="outcometracker">OUR SOLUTIONS</Heading>
    <ul>
    <li>
      Our OutcomeTracker relates ESG/Sustainability data to traditional corporate ratios and ensures their seamless integration into all our clients’ decision-making processes…
    </li>
    <li>
...so that you know all your decisions take into account the true impact of a company’s practices.
</li>
<li>
OutcomeTracker integrates with our clients’ corporate data systems.
</li>
<li>
ESG/Sustainability data can be ingested and extracted automatically as and when needed. 
</li>
<li>
Data can be customised to our clients’ metrics system.
</li>
<li>
Clients decide which information they consider to be “material” for all communication, management and corporate funding projects.
</li>
<li>
OutcomeTracker provides industry comparisons, supports all stakeholder engagement projects and can do so with high frequency.
</li>
  </ul>

  </div>
</div>

<div className={`${css.right} ${css.closer_mobile}`}>
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