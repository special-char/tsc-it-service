import React from "react";

const navItems = [
  { name: "Home", href: "#" },
  { name: "About", href: "" },
  { name: "StyleGuide", href: "" },
  { name: "Licensing", href: "" },
  { name: "Instructions", href: "" },
];
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_wrapper  mt-10 flex relative px-[4%] justify-center">
        <div className="container relative z-[1] mx-auto flex flex-col flex-wrap flex-shrink flex-grow basis-[0%] max-w-[1200]">
          <div className="upper_content flex flex-col text-center mx-auto">
            <h3 className="text-9xl">Ready to talk</h3>
            <span className="text-dimGray text-xxl mt-10">
              Feel free to contact us
            </span>
            <a className="cursor-pointer mt-6">View on Designer</a>
          </div>
          <div className="footer_divider w-[70%] h-[1px] mx-auto mt-20 mb-12 bg-lightGray"></div>
          <div className="lower_content flex flex-wrap flex-col gap-10 w-[70%] mx-auto ">
            <div className="footer flex flex-col">
              <div className="footer_wrapper flex flex-col lg:flex-row gap-10 ">
                <div className="flex flex-col gap-3">
                  <h3 className="text-6xl">TSC</h3>
                  <div className="content flex flex-col flex-1 gap-3">
                    <p className="text-lg text-gray flex flex-wrap">
                      Kofo is an award UI/UX designs and branding agency based
                      in New York, USA.
                    </p>
                    <div className="nav flex flex-row flex-wrap gap-3 cursor-pointer text-lg text-gray">
                      {navItems.map((item) => (
                        <a key={item.name} href={item.href}>
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="links flex flex-1 flex-col gap-7 lg:items-end">
                  <div className="icons flex cursor-pointer gap-4">
                    <img
                      className=" w-4"
                      src="https://assets.website-files.com/6315d6de2357050021f26e96/6315f5173de44a84d797a6fb_linkedin.png"
                      alt="linkedin"
                    />
                    <img
                      className=" w-4"
                      src="https://assets.website-files.com/6315d6de2357050021f26e96/6315f5173de44afa9f97a701_instagram.png"
                      alt="instagram"
                    />
                    <img
                      className=" w-4"
                      src="https://assets.website-files.com/6315d6de2357050021f26e96/6315f5173de44a02d697a6fd_twiiter.png"
                      alt="facebook"
                    />
                    <img
                      className=" w-4"
                      src="https://assets.website-files.com/6315d6de2357050021f26e96/6315f5173de44a1a6697a6f9_twitter.png"
                      alt="twitter"
                    />
                    <img
                      className=" w-4"
                      src="https://assets.website-files.com/6315d6de2357050021f26e96/6315f5173de44a9a4e97a6ff_dribbble.png"
                      alt="dribble"
                    />
                  </div>
                  <a className="text-lg text-gray cursor-pointer">
                    hello@kofo.com
                  </a>
                  <a className="text-sm text-gray cursor-pointer">
                    +1 (004) 214 5700
                  </a>
                </div>
              </div>
              <div className="copyright flex mt-10 justify-start items-center">
                <span className="text-lg text-gray">
                  © This is a <span className="underline">Deni Bozo</span>{" "}
                  template powered by{" "}
                  <span className="underline">Webflow.</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
