import css from "./styles.module.scss";
import Heading from "../heading";

const Covid = ({background}) => (
    <section
    className={css.side_by_side}
    style={{ backgroundColor: "white", padding: "20px" }}
  >
    <div className={css.left}>
      <div className={css.inner}>
        <Heading subheading="FieldApp">COVID-19</Heading>
        <ul>
              <li>
                We used our FieldApp to help improve public health safety during
                Covid-19
              </li>
              <li>Pilots live in 26 countries</li>
              <li>
                Results: All pilots flagged up important safety issues: <br />
                - 73% of users reported test kits not present when needed <br />
                - Over 400 reports of infected patients not being separated
              </li>
              <li>
                9 Ministries of Health have signed a Memorandum of Understanding
                in support of national scale-up plans
              </li>
            </ul>
      </div>
    </div>

    <div className={css.right} {...background("/static/mapcovid.png")} />
  </section>
);

export default Covid;