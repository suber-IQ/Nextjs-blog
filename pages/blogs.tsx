import { NextPage } from "next";
import BlogCard from "../components/BlogCard";

interface Props {}

const blogs: NextPage<Props> = () => {
  return (
    <div className="max-w-3xl mx-auto p-2 space-y-5">
      <BlogCard
        title="This is my Blog"
        desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut distinctio asperiores ad dolores soluta aperiam excepturi repudiandae placeat error sit quibusdam ab, amet sunt impedit beatae sed non ipsa voluptatum!"
      />
      <BlogCard
        title="This is my Blog"
        desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut distinctio asperiores ad dolores soluta aperiam excepturi repudiandae placeat error sit quibusdam ab, amet sunt impedit beatae sed non ipsa voluptatum!"
      />
      <BlogCard
        title="This is my Blog"
        desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut distinctio asperiores ad dolores soluta aperiam excepturi repudiandae placeat error sit quibusdam ab, amet sunt impedit beatae sed non ipsa voluptatum!"
      />
    </div>
  );
};

export default blogs;
