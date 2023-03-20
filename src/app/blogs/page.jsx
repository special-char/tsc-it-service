import BlogCard from "@/components/BlogCard/BlogCard";

const data = [
  {
    id: 1,
    src: "https://assets.website-files.com/6315d6de235705e568f26e9b/631762feeb3d7b7d675f5c37_blog-3-p-800.jpg",
    tag: "News",
    date: "February 3, 2021",
    text: "Curating the workplace that inspires all of us",
  },
  {
    id: 2,
    src: "https://assets.website-files.com/6315d6de235705e568f26e9b/631763088c207c7278f87176_blog-1-p-800.jpg",
    tag: "Design",
    date: "February 25, 2021",
    text: "Designers who changed the web with Webflow",
  },
  {
    id: 3,
    src: "https://assets.website-files.com/6315d6de235705e568f26e9b/63176314bf708f01020ea732_blog-2.jpg",
    tag: "Code",
    date: "March 9, 2021",
    text: "Communication between studio departments",
  },
];

const Blogs = () => {
  return (
    <div className="blog">
      <div className="container relative z-[1] mx-auto flex flex-col my-7 gap-10 flex-wrap flex-shrink flex-grow basis-[0%] w-full max-w-sm  md:max-w-2xl lg:max-w-4xl xl:max-w-6xl">
        <div className="card grid grid-rows-3 gap-6 lg:grid-cols-2 lg:grid-rows-2">
          {data.map((item) => (
            <BlogCard key={item.id} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
