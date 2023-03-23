import React from "react";

const FunFact = (data) => {
  const FunFactsdata = data?.data?.data?.funFact?.data;
  console.log("FunFact data:", FunFactsdata);
  //console.log("FunFact data:", FunFactsdata?.attributes?.details);
  return (
    <div className="px-container min-h-screen flex flex-wrap justify-between pb-20">
      {" "}
      <img
        src={FunFactsdata?.attributes?.image?.data?.attributes?.url}
        className="aspect-auto pb-9"
        alt="fun_facts"
      />
      <div className="flex flex-col gap-8 justify-center">
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

        <button className="btn" href={FunFactsdata?.attributes?.button?.url}>
          {FunFactsdata?.attributes?.button?.text}
        </button>
      </div>
    </div>
  );
};

export default FunFact;
