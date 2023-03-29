import React from "react";

const navItems = [
  { name: "Home", href: "#" },
  { name: "About", href: "" },
  { name: "StyleGuide", href: "" },
  { name: "Licensing", href: "" },
  { name: "Instructions", href: "" },
];

const socialIcons = [
  {
    id: 1,
    src: "https://assets.website-files.com/6315d6de2357050021f26e96/6315f5173de44a84d797a6fb_linkedin.png",
    alt: "linkedin",
    class:" hover:py-4 hover:px-4 items-center rounded-full hover:bg-[#0077B5]   hover:text-white before:content-[''] m-auto   before:scale-150  duration-700"
    
  },
  {
    id: 2,
    src: "https://assets.website-files.com/6315d6de2357050021f26e96/6315f5173de44afa9f97a701_instagram.png",
    alt: "instagram",
    class:" hover:py-4 hover:px-4 items-center rounded-full hover:bg-[#e4405f]   hover:text-white before:content-[''] m-auto   before:scale-150  duration-700"

  },
  {
    id: 3,
    src: "https://assets.website-files.com/6315d6de2357050021f26e96/6315f5173de44a02d697a6fd_twiiter.png",
    alt: "facebook",
    class:" hover:py-4 hover:px-4 items-center rounded-full hover:bg-slateBlue   hover:text-white before:content-[''] m-auto   before:scale-150  duration-700"

  },
  {
    id: 4,
    src: "https://assets.website-files.com/6315d6de2357050021f26e96/6315f5173de44a1a6697a6f9_twitter.png",
    alt: "twitter",
    class:" hover:py-4 hover:px-4 items-center rounded-full hover:bg-[#1D9BF0]   hover:text-white before:content-[''] m-auto   before:scale-150  duration-700"

  },
  {
    id: 5,
    src: "https://assets.website-files.com/6315d6de2357050021f26e96/6315f5173de44a9a4e97a6ff_dribbble.png",
    alt: "dribble",
    class:" hover:py-4 hover:px-4 items-center rounded-full hover:bg-[#e4405f]   hover:text-white before:content-[''] m-auto   before:scale-150  duration-700"

  },
];

const Footer = () => {
  return (
    <div className="px-container relative z-[1] min-h-screen flex flex-col pt-20 bg-gray100">
      <div className="uppercontent flex flex-col items-center justify-center gap-7 pb-16 border-b-2 border-b-lightGray">
        <a
          href="/contact"
          className="p-3 border-2 border-lightGray text-dimGray"
        >
          Stay in touch
        </a>
        <h3 className="text-6xl lg:text-9xl">Ready to talk</h3>
        <p className="text-xl text-dimGray">Feel free to contact us</p>
        <a href="#" className="text-base">
          View on Designer
        </a>
      </div>
      <div className="lowercontent flex flex-col gap-8 py-14 px-2 lg:px-7">
        <h3 className="text-4xl lg:text-7xl flex">TSC</h3>
        <div className="flex flex-col gap-4 lg:flex-row">
          <div className="flex flex-col flex-1 gap-4">
            <p className="text-lg  text-dimGray">
              Kofo is an award UI/UX designs and branding agency based in New
              York, USA.
            </p>
            <nav className="flex flex-wrap gap-3 text-dimGray">
              {navItems.map((item) => (
                <a
                  className="hover:text-black text-lg "
                  key={item.name}
                  href={item.href}
                >
                  {item.name}
                </a>
              ))}
            </nav>
          </div>
          <div className="flex flex-col lg:items-end flex-1 gap-4 lg:-mt-16">
            <div className="icons flex gap-7 w-50 h-10 i">
              {socialIcons.map((item) => (
                // eslint-disable-next-line react/jsx-key
                <div className= {item.class}>
                <img className="w-5  hover:text-white" 
                key={item.id} {...item} />
                </div>
              ))}
            </div>
            <div className="link flex flex-col gap-4 pt-7 lg:items-end">
              <a
                href="#"
                className="text-dimGray text-lg cursor-pointer after:left-0 hover:after:w-[100%]  relative block pb-1 after:w-0 after:absolute after:h-[1px] after:bottom-0 after:bg-dimGray after:ease-in-out after:duration-[0.7s]"
              >
                hello@kofo.com
              </a>
              <a
                href="#"
                className="text-dimGray text-lg cursor-pointer after:left-0 hover:after:w-[100%]  relative block pb-1 after:w-0 after:absolute after:h-[1px] after:bottom-0 after:bg-dimGray after:ease-in-out after:duration-[0.7s]"
              >
                9726392405
              </a>
            </div>
          </div>
        </div>
        <p className="text-dimGray text-lg">
          © This is a Deni Bozo template powered by Webflow.
        </p>
      </div>
    </div>
    // <div className="px-container relative z-[1] min-h-screen flex flex-col pt-20">
    //   <div className="upper_content flex flex-col text-center">
    //     <h3 className="text-9xl">Ready to talk</h3>
    //     <span className="text-dimGray text-xxl">Feel free to contact us</span>
    //   </div>
    //   <a className="">View on Designer</a>
    //   <div className="footer_divider h-[1px] mx-32 mt-20 mb-12 bg-lightGray"></div>
    //   <div className="lower_content flex flex-wrap flex-col gap-10 w-[70%] mx-auto ">
    //     <div className="footer flex flex-col">
    //       <div className="footer_wrapper flex flex-col lg:flex-row gap-10 ">
    //         <div className="flex flex-col gap-3">
    //           <h3 className="text-6xl">TSC</h3>
    //           <div className="content flex flex-col flex-1 gap-4">
    //             <p className="text-lg text-gray flex flex-wrap">
    //               Kofo is an award UI/UX designs and branding agency based in
    //               New York, USA.
    //             </p>
    //             <div className="nav flex flex-row flex-wrap gap-3 cursor-pointer text-lg text-gray">
    //               {navItems.map((item) => (
    //                 <a
    //                   className="hover:text-black"
    //                   key={item.name}
    //                   href={item.href}
    //                 >
    //                   {item.name}
    //                 </a>
    //               ))}
    //             </div>
    //           </div>
    //         </div>
    //         <div className="links flex flex-1 flex-col gap-7 lg:items-end">
    //           <div className="icons flex cursor-pointer gap-4">
    //             {socialIcons.map((item) => (
    //               <img className="w-5" key={item.id} {...item} />
    //             ))}
    //           </div>
    //           <a className="text-lg text-gray cursor-pointer after:left-0 hover:after:w-[100%]  relative block pb-1 after:w-0 after:absolute after:h-[1px] after:bottom-0 after:bg-dimGray after:ease-in-out after:duration-[0.7s]">
    //             hello@kofo.com
    //           </a>
    //           <a className="text-sm text-gray cursor-pointer after:left-0 hover:after:w-[100%] relative block pb-1 after:w-0 after:absolute after:h-[1px] after:bottom-0 after:bg-dimGray after:ease-in-out after:duration-[0.7s]">
    //             +1 (004) 214 5700
    //           </a>
    //         </div>
    //       </div>
    //       <div className="copyright flex my-10 justify-start items-center">
    //         <div className="text-lg text-gray">
    //           © This is a Deni Bozo template powered by Webflow.
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Footer;
