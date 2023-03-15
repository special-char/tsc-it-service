import React from "react";
import "./style.css";

const BlogCard = ({ news, date, text, img }) => {
  return (
    <div className="wrapper">
      <div className="flex flex-col">
        <div className="img-1">
          <img src={img} />
        </div>
        <div className="BlogContent">
          <div className="div_news">
            <p className="inline-block py-1 px-3 border-2 border-solid border-hsla rounded text-base font-medium no-underline">
              {news}
            </p>
            <p className="mb-0">{date}</p>
          </div>
          <p className="text">{text}</p>
          <a href="" className="block">
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
