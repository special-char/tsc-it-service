import AboutScreen from "@/containers/aboutScreen/AboutScreen";
import Banner from "@/containers/banner/Banner";
import Services from "@/containers/services/Services";
import Team from "@/containers/team/Team";

const About = () => {
  return (
    <div className="about mt-10 flex relative px-[5%] justify-center">
      <div className="about_wrapper relative z-[1] mx-auto flex flex-col my-7 gap-10 flex-wrap flex-shrink flex-grow basis-[0%] max-w-[1200]">
        <div>
          <AboutScreen />
          <Banner />
          <Team />
          <Services />
        </div>
      </div>
    </div>
  );
};

export default About;
