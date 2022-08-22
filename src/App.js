import "./App.css";
import { Route, Switch } from "react-router-dom";
// import Home from "./card/home/Home";
import Home from "./allcomponents/home/Home"
import Videos from "./allcomponents/Videos/Videos";
import Photos from "./allcomponents/photos/Photos";
import Apresenting from "./allcomponents/Apresenting/Apresenting";
import OtherWishespost from "./allcomponents/othersWishes/otherWishespost"
import NavBar from './navbar/NavBar';
function App() {
  return (
    <>
      <div className="App">
        <NavBar/>
              <Switch>

                <Route path="/Adityaflix" exact>
                    <Home/>
                </Route>

                <Route path="/Apresenting">
                  <Apresenting />
                </Route> 

                <Route path="/photos">
                  <Photos />
                </Route>

                <Route path="/videos">
                  <Videos />
                </Route>

                <Route path="/wishes">
                  <OtherWishespost />
                </Route>

              </Switch>
      </div>
    </>
  );
}

export default App;