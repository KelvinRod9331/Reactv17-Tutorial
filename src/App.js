import Navbar from "./Navbar";
import Home from "./Home";
import Create from "./Create";
import BlogDetails from "./BlogDetails";
import { Route, Switch } from "react-router-dom";

import "./index.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        {/**  All routes go into this component Switch */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/create">
            <Create />
          </Route>
          <Route path="/blogs/:id">
            <BlogDetails />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
