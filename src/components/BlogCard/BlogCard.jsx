import React from "react";

const BlogCard = ({ tag, date, text, src }) => {
  return (
    <div className="flex flex-col shadow-lg">
      <div>
        <img
          className="hover:opacity-50 hover:ease-in-out hover:duration-[0.6s]"
          src={src}
        />
      </div>
      <div className="BlogContent flex flex-col gap-7 px-4 py-8">
        <div className="news flex flex-row gap-5 items-center">
          <button className="p-2 border-2 border-lightGray rounded text-base text-dimGray hover:opacity-80 hover:ease-in-out hover:duration-[0.3s]">
            {tag}
          </button>
          <p className="mb-0 text-lg">{date}</p>
        </div>
        <p className="text-5xl hover:text-gray hover:duration-[0.4s]">{text}</p>
        <a className="hover:after:w-[18%] items-end text-lg cursor-pointer relative block pb-1 after:w-0  after:absolute after:h-[1px] after:bottom-0 after:left-0 after:bg-dimGray after:ease-in-out after:duration-[0.7s]">
          Read More
        </a>
      </div>
    </div>
  );
};

export default BlogCard;
