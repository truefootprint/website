import css from "./styles.module.scss";
import { Image, Row, Col } from "react-bootstrap";

const CorpPartners = () => (
    <section className={`${css.full_width} ${css.gradient}`}>
    <div className={css.wrap}>
    <h4 className={css.partnersColor}>
    PARTNERS
      </h4>
      <p> We have partnered with </p>
    <ul style={{paddingLeft: 125, listStyle: 'decimal'}}>
      <li><a href="https://www.humancapitalnetwork.com/">Human Capital Network </a></li>
      <li><a href="https://besystemic.com/">Systemic </a></li>
      <li><a href="https://humannature-places.com/">Human+Nature </a></li>
      <li>
          <a href="https://www.hoganlovells.com/">Hogan Lovells </a> <br/>
          and are founding members of <a href="https://catalyst2030.net/">Catalyst 2030</a>
      </li>
        
    </ul>
    <br/>
    <Image src="/static/part.png" fluid />
    </div>
  </section>
);

export default CorpPartners;
