import BlogList from "./Bloglist";
import useFetch from "./useFetch";
const Home = () => {
  const {
    data: blogs,
    isPending,
    error,
  } = useFetch(`http://localhost:8000/blogs`);

  

  return (
    <div className="home">
      {/* The '&&'  is meant to show error IF is true if its a false value it will output the second option */}
      {error && <div>{error}</div>}
      {isPending ? (
        <div className="loading">Loading...</div>
      ) : (
        <BlogList blogs={blogs} title={"My Blogs"} />
      )}
    </div>
  );
};

export default Home;
