import css from "./styles.module.scss";
import Heading from "../heading";

const Press = () => (

    <section className={`${css.full_width} ${css.gradient}`}>
    <div className={css.wrap}>
      <Heading>Press</Heading>

      <div className={css.timeline}>
        <div className={css.item}>
          <time>The Guardian</time>

          <p>
            Quote from our CEO Fredrik Galtung in{" "}
            <a
              href="https://www.theguardian.com/business/2019/jul/23/fairtrade-ethical-certification-supermarkets-sainsburys"
              target="_blank"
            >
              The Guardian’s
            </a>{" "}
            long read "Is fair trade finished?"
          </p>

          <blockquote>
            “If Fairtrade producers could show that their farmers were 10
            or 20 years younger on average ... that would be a massive
            advantage. But we’re unable to see all this.”
          </blockquote>
        </div>

        <div className={css.item}>
          <time>Break the Chain</time>
          <p>
            In a podcast with{" "}
            <a
              href="https://soundcloud.com/breakthechainpodcast/measuring-outcomes-not-outputs"
              target="_blank"
            >
              Break the Chain
            </a>
            , Fredrik spoke about inputs and outputs versus outcomes and
            impact.
          </p>
        </div>

        <div className={css.item}>
          <time>The New Ism</time>

          <p>
            Fredrik was interviewed by{" "}
            <a
              href="https://anchor.fm/the-new-ism/episodes/S2-E2-Fredrik-Galtung-e40594"
              target="_blank"
            >
              The New Ism
            </a>
            , talking about how bottom-up measurement and empowerment is
            key in sustainability.
          </p>
        </div>

        <div className={css.item}>
          <time>Mining Weekly</time>

          <p>
            Quote from{" "}
            <a
              href="https://www.miningweekly.com/article/mining-stakeholders-unable-to-assessthe-effectiveness-of-sustainability-investments-analyst-2019-03-29"
              target="_blank"
            >
              Mining Weekly
            </a>{" "}
            on TrueFootprint’s mining industry Scorecard:
          </p>

          <blockquote>
            “governments, investors and customers have no way at present
            of assessing the effectiveness of key business sustainability
            investments, which means that some companies are not getting
            credit for the work they are doing and the social and economic
            value they create.”
          </blockquote>
        </div>
      </div>
    </div>
  </section>
);

export default Press;