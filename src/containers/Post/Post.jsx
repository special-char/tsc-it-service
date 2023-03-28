import React from "react";

const Post = () => {
  return (
    <div className="flex flex-col justify-center w-full max-w-6xl mx-auto gap-3 px-5">
      <div className="title flex flex-col gap-9 items-center h-screen justify-center ">
        <h1 className=" text-7xl lg:text-[90px] 2xl:text-[120px]  md:text-9xl   text-center  ">
          Designers who changed the web with Webflow
        </h1>

        <p className="text-dimGray text-xxl">February 25, 2021</p>
      </div>
      <div className="flex flex-col gap-9">
        <div className=" flex flex-col  gap-14 ">
          <img
            className=""
            src="https://assets.website-files.com/6315d6de235705e568f26e9b/631763088c207c7278f87176_blog-1.jpg"
            alt="image"
          />
          <p className="text-dimGray text-lg">
            The rich text element allows you to create and format headings,
            paragraphs, block-quotes, images, and video all in one place instead
            of having to add and format them individually. Just double-click and
            easily create content. <br />
            For dynamic content, add a rich text field to any collection and
            then connect a rich text element to that field in the settings
            panel. Headings, paragraphs, block-quotes, figures, images, and
            figure captions can all be styled.
          </p>
        </div>
        <div className=" flex flex-col mx-auto gap-11 ">
          <div>
            <h3 className="text-2xl">We love design beautiful things.</h3>
            <p className="text-dimGray text-lg">
              Headings, paragraphs, blockquotes, figures, images, and figure
              captions can all be styled after a class is added to the rich text
              element using the "When inside of" nested selector system. A rich
              text element can be used with static or dynamic content. For
              static content, just drop it into any page and begin editing.
            </p>
          </div>
          <div>
            <blockquote className="border-l-2  px-5 border-black text-6xl border-spacing-2">
              A rich text element can be used with static or dynamic content.
              For static content, just drop it into any page and begin editing.
            </blockquote>
          </div>
          <div>
            <p className="text-dimGray text-lg">
              The rich text element allows you to create and format headings,
              paragraphs, blockquotes, images, and video all in one place
              instead of having to add and format them individually. Just
              double-click and easily create content.
            </p>
          </div>
          <div>
            <h3 className="text-2xl">
              How to customize formatting for each rich text.
            </h3>
            <p className="text-dimGray text-lg">
              The rich text element allows you to create and format headings,
              paragraphs, blockquotes, images, and video all in one place
              instead of having to add and format them individually. A rich text
              element can be used with static or dynamic content. For static
              content, just drop it into any page and begin editing. For dynamic
              content, add a rich text field to any collection and then connect
              a rich text element to that field in the settings panel. Voila!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
