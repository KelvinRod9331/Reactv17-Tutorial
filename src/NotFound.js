import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <div className="not-found">
      <h2>Sorry</h2>
      <p>Page Cannot be found</p>
      <Link to="/">Back To Homepage</Link>
    </div>
  );
};

export default NotFound;
