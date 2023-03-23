import AboutScreen from "@/containers/aboutScreen/AboutScreen";
import Banner from "@/containers/banner/Banner";
import PageHeader from "@/containers/pageHeader/PageHeader";
import Services from "@/containers/services/Services";
import Team from "@/containers/team/Team";

const About = () => {
  return (
    <>
      <AboutScreen />
      <PageHeader />
      <Banner />
      <Team />
      <Services />
    </>
  );
};

export default About;
