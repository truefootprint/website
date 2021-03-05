import Layout from "../layout";
import Hero from "../hero";
import NavBar from "../nav_bar";
import Heading from "../heading";
import Report from "../report";
import Profile from "../profile";
import { Link, Target } from "../scroll";
import css from "./styles.module.scss";

const background = (src) => (
  { style: { backgroundImage: `url(${src})` } }
);

const Mission = () => (
  <Layout>
    <Target name="top" />
   
    <br/><br/>
    
    <div className={css.content}>
      
      <section className={`${css.full_width} ${css.gradient}`}>
        <div className={css.wrap}>
          <a href="/">← Back to home</a>
          <Heading>Our Values</Heading>
          <h4>Vision</h4>
          <p>
            To be a catalyst of the systems change needed for a fair and sustainable world.
          </p>
          <h4>Mission</h4>
          <p>
            To make it possible and rewarding to fix problems that materially affect people and the environment.
          </p>
          <h4>TrueFootprint’s DNA</h4>
          <ul className={css.numbered}>
            <li>
            We focus on  <span style={{fontWeight: "bold"}}>maximum positive impact</span>, not short-term gain
            </li>
            <li><span style={{fontWeight: "bold"}}>
              Teams can achieve transformative results</span> that no one could ever achieve on their own.</li>
            <li>We are <span style={{fontWeight: "bold"}}>radically open-minded and embrace a diversity of perspectives and backgrounds</span>: great new ideas can come from anyone, anywhere, anytime, and through our diversity we complement each other and end up stronger, better.</li>
            <li><span style={{fontWeight: "bold"}}>We go out of our way to be helpful</span> to each other, our clients and our users; we believe that this is where the most sustainable value lies. </li>
            <li>We always try to <span style={{fontWeight: "bold"}}>anticipate and solve problems</span> our users and customers face. We don’t sweep problems under the rug. We embrace problems because they are opportunities for doing better. We admit mistakes and deal with them quickly.</li>
            <li>As part of <span style={{fontWeight: "bold"}}>our commitment to truth and transparency</span> we must be authentic: We are who we are. Not pretentious.</li>
            <li>We value <span style={{fontWeight: "bold"}}>independent thinking</span>. We trust each other to work towards our vision and mission and to speak up. Open discussion is welcomed and never penalised.</li>
            <li>We have a life outside work. <span style={{fontWeight: "bold"}}>Personal well-being</span> is key for company success.</li>
            <li>We welcome <span style={{fontWeight: "bold"}}>humour</span> in our daily work lives as we value the enjoyable journey as well as reaching the destination.</li>
            <li>We provide our users and customers access to our tools and solutions for a <span style={{fontWeight: "bold"}}>fair price</span> proportional to their budget and means. We constantly look for opportunities to create value for them.</li>
          </ul>
        </div>
      </section>


        
    </div>
  </Layout>
);

export default Mission;
