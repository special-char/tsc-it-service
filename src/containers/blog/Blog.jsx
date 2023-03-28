import BlogCard from "@/components/BlogCard/BlogCard";
import React from "react";

const data = [
  {
    id: 1,
    src: "https://assets.website-files.com/6315d6de235705e568f26e9b/631762feeb3d7b7d675f5c37_blog-3-p-800.jpg",
    tag: "News",
    date: "February 3, 2021",
    text: "Curating a workplace that inspires all of us",
  },
  {
    id: 2,
    src: "https://assets.website-files.com/6315d6de235705e568f26e9b/631763088c207c7278f87176_blog-1-p-800.jpg",
    tag: "Design",
    date: "February 25, 2021",
    text: "Designers who changed the web with Webflow",
  },
];

const Blog = () => {
  return (
    <div className="px-container relative items-center z-[1] flex flex-col gap-10 flex-wrap min-h-screen">
      <div className="heading w-full flex flex-col gap-3 md:flex-row md:justify-between items-center">
        <h3 className="text-6xl">From Blog</h3>
        <a className="text-lg cursor-pointer relative block pb-1 after:w-0 hover:after:w-[100%] after:absolute after:h-[1px] after:bottom-0 after:left-0 after:bg-dimGray after:ease-in-out after:duration-[0.7s]">
          View all Post
        </a>
      </div>
      <div className="card grid grid-rows-2 gap-6 lg:grid-cols-2 lg:grid-rows-none">
        {data.map((item) => (
          <BlogCard key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Blog;
