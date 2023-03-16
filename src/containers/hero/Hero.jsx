import React from "react";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero_wrapper mt-10 flex relative px-[4%] justify-center ">
        <div className="container flex gap-10 flex-col lg:flex-row lg:flex-nowrap mx-auto max-w-[1200px]">
          <div className="right_content flex flex-col justify-start relative">
            <h3 className="text-9xl md:text-[110px] lg:text-[140px]">
              Think. <br /> <span className="text-dimGray">Create.</span> <br />
              Solution.
            </h3>
          </div>
          <div className="left_content flex justify-between lg:mt-10 xl:mt-16 flex-col">
            <div className="content relative flex flex-col flex-wrap gap-7 overflow-hidden items-start justify-end">
              <p className="text-3xl xl:text-4xl text-dimGray leading-10">
                We are an award-winning branding and web agency committed to
                excellence since forever.
              </p>
              <p className="text-3xl xl:text-4xl text-dimGray">
                We set the standard of exceptional design creatively,
                technically, sustainably, and ethically so that you can make the
                extraordinary impact impact that you seek.
              </p>
              <button className="btn">View on Designer</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // <div className="hero flex relative h-screen pb-14 px-[4%] justify-center items-center">
  //   <div className="container relative mx-auto flex-grow flex-shrink max-w-6xl">
  //     <div className="hero flex flex-row gap-20">
  //       <div className="part2 flex flex-col justify-between">
  //         <div className="hero_flex relative flex flex-col overflow-hidden justify-start items-center">
  //           <div className="hero_display justify-start flex relative z-[1] text-[170px] leading-tight">
  //             Think.
  //           </div>
  //           <div className="hero_display relative z-[1] text-[130px] leading-tight text-gray">
  //             Create.
  //           </div>
  //           <div className="hero_display relative z-[1] text-[170px] leading-tight">
  //             Solution.
  //           </div>
  //         </div>
  //       </div>
  //       <div className="part1 flex justify-between flex-col">
  //         <div className="hero_flex relative flex flex-col overflow-hidden justify-start items-center text-start">
  //           <p className="paragraph text-xxl text-dimGray">
  //             We are an award-winning branding and web agency committed to
  //             excellence since forever.
  //           </p>
  //           <p className="paragraph text-xxl text-dimGray">
  //             We set the standard of exceptional design creatively,
  //             technically, sustainably, and ethically so that you can make the
  //             extraordinary impact impact that you seek.
  //           </p>
  //         </div>
  //         <div className="relative flex flex-row items-center">
  //           <Button text="View On Designer" />
  //           <img
  //             className="absolute right-0 w-24 opacity-100"
  //             src="https://assets.website-files.com/6315d6de2357050021f26e96/63171d2704da6da8b4049353_sammy-line-paper-plane.svg"
  //             alt="airplane"
  //           />
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // </div>
};

export default Hero;
