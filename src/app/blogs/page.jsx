import BlogCard from "@/components/BlogCard/BlogCard";
import "./style.css";
const Blogs = () => {
  return (
    <div className="section">
      <div className="container">
        <div className="max-w-width">
          <h3 className="text-6xl">From Blog</h3>
          <p className="text-lg font-extralight">View All Posts</p>
        </div>
        <div className="flex">
          <BlogCard
            news="News"
            date="February 3,2021"
            text="Curating a workplace that inspires all of us"
            img={
              "https://assets.website-files.com/6315d6de235705e568f26e9b/631762feeb3d7b7d675f5c37_blog-3-p-1080.jpg"
            }
          />

          <BlogCard
            news="Design"
            date="February 25,2021"
            text="Designers who changed the web whith Webflow"
            img={
              "https://assets.website-files.com/6315d6de235705e568f26e9b/631763088c207c7278f87176_blog-1-p-800.jpg"
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Blogs;
