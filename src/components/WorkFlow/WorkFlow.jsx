"use client";
import { useEffect, useRef, useState } from "react";
import "./work.css";




const WorkFlow = () => {
  const [showIcon, setShowIcon] = useState(false);

  useEffect(() => {
    document.getElementById("carousel");
    let windowWidth = window.innerWidth;
    let horizontalLength =
      document.querySelector(".carousel--sticky").scrollWidth;
    let distFromTop = document.querySelector(".carousel").scrollHeight;

    console.log({ windowWidth, horizontalLength, distFromTop });
    let scrollDistance = distFromTop + horizontalLength - windowWidth;
    document.querySelector(".carousel");
    if (windowWidth > 425) {
      document.querySelector(".carousel").style.height = "100";
      document.querySelector(".carousel").style.width = "300";



    }
    //Scroll
    window.onscroll = function () {
      let scrollTop = window.pageYOffset;

      console.log({ scrollTop, distFromTop, scrollDistance });

      if (scrollTop >= distFromTop && scrollTop <= scrollDistance) {
        console.log(true);

        document.querySelector(
          ".carousel--wrapper"
        ).style.transform = `translateX(-${scrollTop - distFromTop}px)`;
          "position:sticky !important;top:10 !important";
      };
    };
  }, []);

  //   useEffect(()=>{
  //       const x = window.matchMedia("(min-width:760px)")
  //       const element = document.querySelector("#container");

  //       element.addEventListener('wheel', (event) => {
  //           event.preventDefault();
  //       //   console.log(window.innerWidth)
  //       if(window.innerWidth > 760){
  //           element.scrollBy({
  //           left: event.deltaY < 0? -30 : 30,
  //          behavior:"auto"
  //     });
  //     }else{
  //         element.scrollBy({
  //             top: event.deltaY < 0? -100 :100,
  //             behavior:"auto"
  //         })

  //     }

  //     console.log(element.scrollWidth)

  //     if(element.scrollWidth >= 1664){
  //         element.scrollBy({
  //             top: event.deltaY < 0? -100 :100,
  //             behavior:"auto"
  //         })
  //     }

  //     const containerScrollPosition = element.scrollLeft;
  //       const maxScrollPosition = element.scrollWidth - element.clientWidth;
  //       const direction = element.scrollWidth;

  //       // If scrolling left and reached beginning, reset to end
  //       if (direction === -1 && containerScrollPosition === 0) {
  //         element.scrollTo({
  //             top: event.deltaY < 0? -100 :100,
  //           behavior: 'smooth',
  //         });
  //       }

  //       return () => {
  //         element.removeEventListener('wheel',  { passive: false });
  //       };

  // });

  // },[])

 

  return (
    <section className="carousel container  scrollbar-hide px-container sticky ">
      <div className="carousel--sticky lg:w-screen lg:overflow-hidden">
        <h2 className="">Featured Work</h2>
        <div className="carousel--wrapper shrink gap-4  grid md:grid-rows-2 md:grid-cols-2 lg:grid-cols-1 lg:flex  sticky  ">
          {workFlowAPI.map((x) => (
            <div
              key={x.h3}
              id="container"
              className="shrink-0 gap-4 relative   lg:grid-rows-none lg:grid-cols-none  lg:flex"
            >
              <img src={x.img} className=" w-[400px] carousel__card__image " />
              <div className="absolute  flex flex-col items-center lg:flex-row bottom-10  gap-2 justify-evenly w-full  text-white font-serif ">
                <h3>{x.h3}</h3>
                <p className="border border-spacing-2 px-3 rounded-xl">{x.p}</p>
              </div>
            </div>
          ))}
         
        </div>
      </div>
    </section>
    
  );
};

export default WorkFlow;
