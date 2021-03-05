import css from "./styles.module.scss";

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
    <img src="/static/part.png"/>
    </div>
  </section>
);

export default CorpPartners;
