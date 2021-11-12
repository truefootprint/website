import css from "./styles.module.scss";
import Heading from "../heading";

const Covid = ({background}) => (
    <section
    className={css.side_by_side}
    style={{ backgroundColor: "white", padding: "20px" }}
  >
    <div className={css.left}>
      <div className={css.inner}>
        <Heading subheading="FieldApp">DEPLOYMENTS</Heading>
        <ul>
              <li>
              We used our FieldApp to help improve public health safety during Covid-19
              </li>
              <li>We started in June 2020 and by September were live in 19 countries</li>
              <li>Pilots now live in 27 countries</li>
              <li>New pilots with people living with HIV, TB and malaria</li>
              <li>
              Results: All pilots flagged up important safety issues: <br />
              - 73% of users reported test kits not present when needed <br />
              - Over 400 reports of infected patients not being separated<br />
              - A nurse set up a makeshift second waiting area to separate suspected infected patients from others<br />
              - Malaria patients alerted sponsors to send more bednets
              </li>
              <li>
              9 Ministries of Health have signed a Memorandum of Understanding in support of national scale-up plans
              </li>
            </ul>
      </div>
    </div>

    <div className={`${css.right} ${css.closer_mobile}`} {...background("/static/map.png")} />
  </section>
);

export default Covid;