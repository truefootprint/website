import { Link as L, Element } from "react-scroll";

const navBarHeight = 7 * 16;

const Link = ({ children, ...rest }) => (
  <L smooth={true} offset={-navBarHeight} duration={500} spy={true} {...rest}>
    {children}
  </L>
);

const Target = ({ children, ...rest }) => (
  <Element {...rest}>
    {children}
  </Element>
);

export { Link, Target };
