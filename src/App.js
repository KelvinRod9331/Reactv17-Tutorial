import Navbar from "./Navbar";
import Home from "./Home";
import Create from "./Create";
import BlogDetails from "./BlogDetails";
import { Route, Switch } from "react-router-dom";

import "./index.css";
import NotFound from "./NotFound";

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
          <Route path="*"> {/**  This is a catch all route that will catch any route that is not listed above and display the NotFound component */}
            <NotFound></NotFound>
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
