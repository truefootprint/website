import ReactGA from "react-ga";

const Report = ({ label, filename }) => {
  const track = () => ReactGA.event({ category: "User", action: "Downloaded report", label });

  return <>
    {label}: <a href={`/static/${filename}`} onClick={track} target="_blank">
      The State of {label} Sustainability 2019
    </a>
  </>;
};

export default Report;
