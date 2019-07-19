import { Link as L, Element } from "react-scroll";
import ReactGA from "react-ga";

const Link = ({ label, children, ...rest }) => {
  if (!label) throw new Error("Please set the label property for all links.");

  const track = () => ReactGA.event({ category: "User", action: "Clicked link", label });

  return (
    <L smooth={true} offset={-110} duration={500} spy={true} onClick={track} {...rest}>
      {children}
    </L>
  );
};

const Target = ({ children, ...rest }) => (
  <Element {...rest}>
    {children}
  </Element>
);

export { Link, Target };
