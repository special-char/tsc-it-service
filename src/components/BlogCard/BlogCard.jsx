import React from "react";
import "./style.css";

const BlogCard = ({ tag, date, text, src }) => {
  return (
    <div className="flex flex-col h-auto shadow-lg">
      <div className="img-1">
        <img src={src} />
      </div>
      <div className="BlogContent flex flex-col gap-7 px-4 py-8">
        <div className="news flex flex-row gap-5 items-center">
          <p className="p-2 border-2 border-lightGray rounded text-base">
            {tag}
          </p>
          <p className="mb-0 text-lg">{date}</p>
        </div>
        <p className="text-5xl">{text}</p>
        <a className="text-lg">Read More</a>
      </div>
    </div>
  );
};

export default BlogCard;
