import { Link as L, Element } from "react-scroll";

const Link = ({ children, ...rest }) => (
  <L smooth={true} offset={-110} duration={500} spy={true} {...rest}>
    {children}
  </L>
);

const Target = ({ children, ...rest }) => (
  <Element {...rest}>
    {children}
  </Element>
);

export { Link, Target };
