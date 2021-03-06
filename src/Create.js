import { useState } from "react";
import { useHistory } from "react-router-dom";  //This method allow you to programmatically control the routes

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("Mario");
  const [message, setMessage] = useState("");
  const [error, setError] = useState(null);

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, author };
    fetch("http://localhost:8000/blogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    })
      .then(() => {
        console.log("data added");
        setMessage("New Blog Added");
      })
      .catch((err) => {
        setError(err.message);
      });

    //   history.go(-1) This will go back one route history so the previous history
    //   history.go(1) This will go forward 

    history.push('/') //history.push just pushed the route you wish to go to.

  };
  return (
    <div className="create">
      <h2>Add A new Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog Title</label>
        <input
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          type="text"
          required
        />

        <label>Blog Body</label>
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
          required
        ></textarea>

        <label>Blog Author</label>
        <select required value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value="Mario">Mario</option>
          <option value="Luigi">Luigi</option>
          <option value="Peach">Peach</option>
        </select>

        <button>Add Blog</button>
      </form>
    </div>
  );
};

export default Create;
