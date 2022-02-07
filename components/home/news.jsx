import css from "./styles.module.scss";
import Heading from "../heading";

const News = () => (
  <section className={`${css.full_width} ${css.gradient}`}>
    <div className={css.wrap}>
      <Heading>News</Heading>
      <ul>
        <li>Green light for use of FieldApp in Global Partnership for Education with Centre De Recherche Sur L’anti-Corruption in DR Congo (Jan ‘22)</li>
        <li>Project with tea farmers in Rwanda started (Jan ‘22)</li>
        <li> We signed a strategic partnership agreement with rePlant Capital. (Oct ‘21)</li>
        <li>We completed our prototyping projects with farmers in Uganda (Jul '21)</li>
        <li>We registered our Dutch branch with the local chamber of commerce  (Jun '21)</li>
        <li> We receive our 20,000th data point  (Jun '21)</li>
        <li>Imran Ahmad has joined as MD of the Netherlands  (Apr ‘21)</li>
        <li>
          Chad becomes the 26th country from where we receive FieldApp data (Feb
          ‘21)
        </li>
        <li>Imran Ahmad has joined our Advisory Board (Feb ‘21)</li>
        <li>
          We wrote a blogpost{" "}
          <a href="https://apolitical.co/en/solution_article/using-real-time-data-to-save-lives">
            {" "}
            ‘Using real-time data to save lives’
          </a>{" "}
          for Apolitical. (Dec ‘20)
        </li>
        <li>
          We signed a strategic partnership agreement with{" "}
          <a href="https://www.humancapitalnetwork.com/">
            Human Capital Network
          </a>
          . (Dec ‘20)
        </li>
      </ul>
    </div>
  </section>
);

export default News;
