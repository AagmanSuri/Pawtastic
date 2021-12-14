import Home from "./pages/Home/Home";
// import Header from "./components/Header/Header";
import About from "./pages/About/About";
import Reviews from "./pages/Reviews/Reviews";
import Services from "./pages/Services/index";
import Signup from "./pages/Signup/index";
import SignupRegister from "./pages/Signup/register";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
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
            <Route path="/Services" component={Services} />
            <Route exact path="/Signup" component={Signup} />
            <Route path="/Signup/register" component={SignupRegister} />
            <Route
              path="/Signup/registerHumanProfile"
              component={registerHumanProfile}
            />
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
