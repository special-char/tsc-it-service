"use client";
import { Element, scroller } from "react-scroll";
import { useEffect, useRef, useState } from "react";
import "./w.css";
import Vision from "../../../public/icons/vision.svg";

const PhotoGallery = () => {
  useEffect(() => {
    if (window.innerWidth > 800) {
      const setStickyContainersSize = () => {
        document
          .querySelectorAll(".sticky-container")
          .forEach(function (container) {
            const stikyContainerHeight =
              container.querySelector("main").scrollWidth;
            container.setAttribute(
              "style",
              "height: " + stikyContainerHeight + "px"
            );
          });
      };

      const isElementInViewport = (el) => {
        const rect = el.getBoundingClientRect();
        return (
          rect.top <= 0 && rect.bottom > document.documentElement.clientHeight
        );
      };

      const wheelHandler = (evt) => {
        const containerInViewPort = Array.from(
          document.querySelectorAll(".sticky-container")
        ).filter(function (container) {
          return isElementInViewport(container);
        })[0];

        if (!containerInViewPort) {
          return;
        }

        var isPlaceHolderBelowTop =
          containerInViewPort.offsetTop < document.documentElement.scrollTop;
        var isPlaceHolderBelowBottom =
          containerInViewPort.offsetTop + containerInViewPort.offsetHeight >
          document.documentElement.scrollTop;
        let g_canScrollHorizontally =
          isPlaceHolderBelowTop && isPlaceHolderBelowBottom;

        if (g_canScrollHorizontally) {
          containerInViewPort.querySelector("main").scrollLeft += evt.deltaY;
        }
      };

      const bindEvents = () => {
        window.addEventListener("wheel", wheelHandler);
      };

      setStickyContainersSize();
      bindEvents();

      document
        .querySelector(".icon")
        .addEventListener("mouseenter", function () {
          this.style.cursor = "pointer";
          this.querySelector(":after").style.opacity = 1;
          this.querySelector(":after").style.visibility = "visible";
        });

      document
        .querySelector(".icon")
        .addEventListener("mouseleave", function () {
          this.querySelector(":after").style.opacity = 0;
          this.querySelector(":after").style.visibility = "hidden";
        });

      return () => {
        window.removeEventListener("wheel", wheelHandler);
      };
    } else {
      window.document.body.style = "flex-col";
    }
  }, []);

  const [showIcon, setShowIcon] = useState(false);

  const handleMouseEnter = () => {
    setShowIcon(true);
  };

  const handleMouseLeave = () => {
    setShowIcon(false);
  };

  const workFlowAPI = [
    {
      img: "https://daks2k3a4ib2z.cloudfront.net/6315d6de2357050021f26e96/63188d435989450c1a7ab839_work-1-p-130x130q80.jpg",
      h3: "Conference",
      p: "Art Direction, Design",
    },
    {
      img: "https://daks2k3a4ib2z.cloudfront.net/6315d6de2357050021f26e96/63188d4396f628d6f095d8e8_work-3-p-130x130q80.jpg",
      h3: "Magazine",
      p: "Logo , User Interface",
    },
    {
      img: "https://daks2k3a4ib2z.cloudfront.net/6315d6de2357050021f26e96/63188d4322cada6cc556c217_work-5-p-130x130q80.jpg",
      h3: "Black Apple Watch",
      p: "Logo , User Interface",
    },
    {
      img: "https://daks2k3a4ib2z.cloudfront.net/6315d6de2357050021f26e96/63188d43bcea839f31cb8215_work-4-p-130x130q80.jpg",
      h3: "Ivor Interface",
      p: " User Interface",
    },
    {
      img: "https://daks2k3a4ib2z.cloudfront.net/6315d6de2357050021f26e96/63188d435989450c1a7ab839_work-1-p-130x130q80.jpg",
      h3: "Conference",
      p: "Art Direction, Design",
    },
    {
      img: "https://daks2k3a4ib2z.cloudfront.net/6315d6de2357050021f26e96/63188d4396f628d6f095d8e8_work-3-p-130x130q80.jpg",
      h3: "Magazine",
      p: "Logo , User Interface",
    },
    {
      img: "https://daks2k3a4ib2z.cloudfront.net/6315d6de2357050021f26e96/63188d4322cada6cc556c217_work-5-p-130x130q80.jpg",
      h3: "Black Apple Watch",
      p: "Logo , User Interface",
    },
    {
      img: "https://daks2k3a4ib2z.cloudfront.net/6315d6de2357050021f26e96/63188d4396f628d6f095d8e8_work-3-p-130x130q80.jpg",
      h3: "Magazine",
      p: "Logo , User Interface",
    },
  ];

  return (
    <>
      <div className="vertical-section">
        <div className="sticky-container">
          <main
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="main "
          >
            {workFlowAPI.map((x) => (
              <div
                key={x.h3}
                id="container"
                className="shrink-0 relative h-fit"
              >
                <img
                  src={x.img}
                  className="imageContainer  md:h-[600px] w-[400px] carousel__card__image  relative"
                />
                {showIcon && (
                  <div className="icon">
                    {/* <img src='https://uploads-ssl.webflow.com/6315d6de2357050021f26e96/63173348890932c62cf7ac32_icons8-eye.json' className='icon' />   */}
                    <Vision />
                  </div>
                )}

                <div className="absolute  flex flex-col items-center lg:flex-row bottom-10  gap-2 justify-evenly w-full  text-white font-serif ">
                  <h3>{x.h3}</h3>
                  <p className="border border-spacing-2 px-3 rounded-xl">
                    {x.p}
                  </p>
                </div>
              </div>
            ))}
          </main>
        </div>
      </div>
    </>
  );
};

export default PhotoGallery;
