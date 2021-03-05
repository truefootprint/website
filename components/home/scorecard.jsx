import css from "./styles.module.scss";
import Heading from "../heading";
import Report from "../report";

const Scorecard = () => (
<section className={`${css.full_width} ${css.gradient}`}>
          <div className={css.wrap}>
            <Heading>Scorecards</Heading>

            <p>
              We have analysed sustainability and annual reports in key
              industries. We have found that they do not report enough on the{" "}
              <b>outcomes</b> of sustainability efforts. Our aim is to help
              companies be strategic and impactful in their reporting on
              sustainability.
            </p>

            <p>You can download our free reports:</p>

            <ul>
              <li>
                <Report
                  label="Agribusiness"
                  filename="01-agribusiness-sustainability-report-2019.pdf"
                />
              </li>

              <li>
                <Report
                  label="Cocoa, Coffee, Tea"
                  filename="02-cocoa-coffee-tea-sustainability-report-2019.pdf"
                />
              </li>

              <li>
                <Report
                  label="Mining"
                  filename="03-mining-sustainability-report-2019.pdf"
                />
              </li>
            </ul>
          </div>
        </section>
);

export default Scorecard;