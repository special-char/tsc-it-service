import React from "react";

const FunFact = (data) => {
  const FunFactsdata = data?.data?.data?.funFact?.data;
  console.log("FunFact data:", FunFactsdata);
  //console.log("FunFact data:", FunFactsdata?.attributes?.details);
  return (
    <div className="flex flex-col xl:flex-row my-10 xl:gap-20 max-w-[300px] sm:max-w-[355px] md:max-w-sm lg:max-w-2xl xl:max-w-4xl 2xl:max-w-6xl justify-between w-full">
      {" "}
      <img
        src={FunFactsdata?.attributes?.image?.data?.attributes?.url}
        className="aspect-auto xl:w-[500px] pb-9"
        alt="fun_facts"
      />
      <div className="flex flex-col gap-8 justify-center px-12">
        <h3 className="text-7xl 2xl:text-9xl">
          {FunFactsdata?.attributes?.title}
        </h3>
        {FunFactsdata?.attributes?.details.map((val) => {
          return (
            <h3 className="text-4xl 2xl:text-6xl">
              {val.value} <span className="text-gray ">{val.title}</span>
            </h3>
          );
        })}
        <div>
          <button className="btn" href={FunFactsdata?.attributes?.button?.url}>
            {FunFactsdata?.attributes?.button?.text}
          </button>
        </div>
      </div>
    </div>
  );
};

export default FunFact;
