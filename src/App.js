import Home from "./pages/Home/Home";
// import Header from "./components/Header/Header";
import About from "./pages/About/About";
import Reviews from "./pages/Reviews/Reviews";
import Services from "./pages/Services/index";
import Signup from "./pages/Signup/index";
import SignupRegister from "./pages/Signup/register";
import registerHumanProfile from "./pages/Signup/registerHumanProfile";
import registerPetBasic from "./pages/Signup/registerPetBasic";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PetDetails from "./pages/Signup/petDetails";
import VetDetails from "./pages/Signup/vetDetails";
import userDetails from "./pages/Signup/userProfile";
import Visit from "./pages/Visit/visit";
import Walk from "./pages/Walk/walk";
import Stay from "./pages/Stay/stay";

function App() {
  return (
    <>
      <Router>
        <div className="App">
          {/* <Header /> */}
          {/* Switch matches the url and stops  */}
          <Switch>
            {/* exact has been intoduced */}
            <Route path="/" exact component={Home} />
            <Route path="/About" component={About} />
            <Route path="/Reviews" component={Reviews} />
            <Route exact path="/Services" component={Services} />
            <Route exact path="/Signup" component={Signup} />
            <Route path="/Signup/register" component={SignupRegister} />
            <Route path="/Services/Visit" component={Visit} />
            <Route path="/Services/Walk" component={Walk} />
            <Route path="/Services/Stay" component={Stay} />


            <Route
              path="/Signup/registerHumanProfile"
              component={registerHumanProfile}
            />
            <Route
              path="/Signup/registerPetBasic"
              component={registerPetBasic}
            />
            <Route path="/Signup/petDetails" component={PetDetails} />
            <Route path="/Signup/vetDetails" component={VetDetails} />
            <Route path="/Signup/userDetails" component={userDetails} />
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
