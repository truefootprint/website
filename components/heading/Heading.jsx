import css from "./styles.scss";

const Heading = ({ className, subheading, children }) => (
  <div className={`Heading ${className}`}>
    <h3 className={css.text}>
      {children}

      {subheading && <div className={css.subheading}>{subheading}</div>}
    </h3>

    <div className={css.underline} />
  </div>
);

Heading.defaultProps = {
  className: ""
};

export default Heading;
