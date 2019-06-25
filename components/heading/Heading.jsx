import css from "./styles.scss";

const Heading = ({ className, children }) => (
  <div className={`Heading ${className}`}>
    <h3 className={css.text}>{children}</h3>
    <div className={css.underline} />
  </div>
);

export default Heading;
