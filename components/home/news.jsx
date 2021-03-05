import css from "./styles.module.scss";
import Heading from "../heading";

const News = () => (

    <section className={`${css.full_width} ${css.gradient}`}>
    <div className={css.wrap}>
      <Heading>News</Heading>
      <ul style={{ paddingLeft: 125 }}>
            <li>
              Chad becomes the 26th country from where we receive FieldApp data
              (Feb ‘21)
            </li>
            <li>Imran Ahmad has joined our Advisory Board (Feb ‘21)</li>
            <li>
              We wrote a blogpost <a href="https://apolitical.co/en/solution_article/using-real-time-data-to-save-lives"> ‘Using real-time data to save lives’
              </a> for
              Apolitical. (Dec ‘20)
            </li>
            <li>
              We signed a strategic partnership agreement with <a href="https://www.humancapitalnetwork.com/">Human Capital
              Network</a>. (Dec ‘20)
            </li>
          </ul>
    </div>
  </section>
);

export default News;