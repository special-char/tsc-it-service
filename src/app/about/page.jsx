import AboutScreen from "@/containers/aboutScreen/AboutScreen";
import Banner from "@/containers/banner/Banner";
import PageHeader from "@/containers/pageHeader/PageHeader";
import Services from "@/containers/services/Services";
import Team from "@/containers/team/Team";

const About = () => {
  return (
    <div className="about mt-10 flex relative px-[5%] justify-center">
      <div className="container relative z-[1] mx-auto flex flex-col gap-10 flex-wrap flex-shrink flex-grow basis-[0%] max-w-[300px] sm:max-w-[355px] md:max-w-sm lg:max-w-2xl xl:max-w-4xl 2xl:max-w-6xl w-full">
        <div>
          <AboutScreen />
          <PageHeader />
          <Banner />
          <Team />
          <Services />
        </div>
      </div>
    </div>
  );
};

export default About;
