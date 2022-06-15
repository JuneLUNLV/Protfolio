import Acomplishments from '../components/Acomplishments/Acomplishments';
import BgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation';
import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import Technologies from '../components/Technologies/Technologies';
import Timeline from '../components/TimeLine/TimeLine';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';
import HeroAnimation from '../components/HeroAnimation/HeroAnimation';
import Fade from 'react-reveal/Fade';

const Home = () => {
  return (
    <Layout>
    {/* https://www.vipuljha.com/ */}
      <Section id="hello" grid style={{overflow: "revert",paddingTop:'180px'}}>
        <Hero />
        {/* <BgAnimation /> */}
        <HeroAnimation/>
      </Section>
      <Fade bottom>
        <Projects />
        <Technologies />
        <Timeline />
        <Acomplishments/>
      </Fade>
    </Layout>
  );
};

export default Home;
