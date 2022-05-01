import { useState, useEffect } from "react";
import BlogList from "./Bloglist";
const Home = () => {
  const [blogs, setBlogs] = useState([]);

  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id != id);
    setBlogs(newBlogs);
  };

  useEffect(() => {
    fetch("http://localhost:8000/blogs")
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data);
      });
  }, []);

  return (
    <div className="home">
      <BlogList blogs={blogs} title={"My Blogs"} handleDelete={handleDelete} />
    </div>
  );
};

export default Home;
