import { Accordion, Card, Button } from "react-bootstrap";
import Profile from "../profile";
import css from "./styles.module.scss";

const Advisory = () => (
    <section className={`${css.full_width} ${css.gradient}`}>
    <div className={css.wrap}>
    <h4 className={css.partnersColor}>
        ADVISORY BOARD MEMBERS
      </h4>
      <ol style={{paddingLeft: 125, listStyle: 'decimal'}}>
        <li><a href="https://www.linkedin.com/in/iwahmad/">Imran Ahmad</a> (ex Transparency International, ex Integrity Action)</li>
        <li><a href="https://www.linkedin.com/in/john-hoffmire-5999621/">John Hoffmire</a> (U. of Oxford, Center on Business and Poverty)</li>
        <li><a href="https://www.linkedin.com/in/rahmyn/">Rahmyn Kress</a> (HumanCapitalNetwork) </li>
        <li><a href="https://www.linkedin.com/in/r-may-lee/">May Lee</a> (HumanCapitalNetwork)</li>
        <li><a href="https://www.linkedin.com/in/farhaan-mir-7a069a/">Farhaan Mir</a> (11Onze, HumanNaturePlaces)</li>
        <li><a href="https://www.linkedin.com/in/nick-tims-64b59b36/">Nick Tims</a> (ex Investec)</li>          
      </ol>
    </div>
  </section>
);

export default Advisory;
