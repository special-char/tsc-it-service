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
    <div className="blog">
      <div className="blog_wrapper mt-10 flex relative px-[5%] justify-center">
        <div className="container relative z-[1] mx-auto flex flex-col my-7 gap-10 flex-wrap flex-shrink flex-grow basis-[0%] max-w-[1200]">
          <div className="heading flex flex-col gap-3 md:flex-row md:justify-between items-center">
            <h3 className="text-6xl">From Blog</h3>
            <a className="text-lg">View all Post</a>
          </div>
          <div className="card grid grid-rows-2 gap-6 lg:grid-cols-2 lg:grid-rows-none">
            {data.map((item) => (
              <BlogCard key={item.id} {...item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
