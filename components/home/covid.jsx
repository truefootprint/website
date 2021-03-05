import css from "./styles.module.scss";
import Heading from "../heading";

const Covid = ({background}) => (
    <section
    className={css.side_by_side}
    style={{ backgroundColor: "white", padding: "20px" }}
  >
    <div className={css.left}>
      <div>
        <Heading subheading="FieldApp">COVID-19</Heading>
        <ul>
          <li>We used our FieldApp to help with Covid-19</li>
          <li>Launched in July 2020</li>
          <li>90 local partners in 54 countries</li>
          <li>Live in 25 countries</li>
          <li>29 countries in process of setting up pilots</li>
          <li>
            Results: All pilots showing safety issues: <br />
            -73% of users reported test kits not present at least once{" "}
            <br />
            -Over 250 reports of infected patients not being separated
          </li>
          <li>
            9 Ministries of Health have signed MOUs in support of national
            scale-up plans
          </li>
        </ul>
      </div>
    </div>

    <div className={css.right} {...background("/static/covidmap.png")} />
  </section>
);

export default Covid;