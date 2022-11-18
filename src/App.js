import { Route, Switch } from "react-router-dom";

import Home from "./allcomponents/home/Home";
import Feed from "./allcomponents/feed/Feed";
import Library from "./allcomponents/library";
import Videos from "./allcomponents/Videos/Videos";
import Photos from "./allcomponents/photos/Photos";
import Apresenting from "./allcomponents/Apresenting/Apresenting";
import OtherWishespost from "./allcomponents/othersWishes/otherWishespost";
import NavBar from "./navbar/NavBar";

function App() {
  return (

      <div className="flex flex-col flex-wrap bg-white dark:bg-black">
        <NavBar />
        <Switch>
          <Route path="/Home">
            <Home />
          </Route>
          <Route path="/Explore">
            <Photos />
          </Route>
          <Route path="/Library">
            <Library/>
            {/* <Videos /> */}
          </Route>
          <Route path="/Feed">
            <Feed />
          </Route>
          <Route path="/post">
            <OtherWishespost />
          </Route>

          <Route path="/Apresenting">
            <Apresenting />
          </Route>
        </Switch>
      </div>

  );
}

export default App;
