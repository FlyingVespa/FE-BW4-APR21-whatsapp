import "./App.css";
import "./components/MainSection/mainsection.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import pattern from "..public/pattern.png";
import LoginPage from "./components/WelcomePage/LoginPage";
import { BrowserRouter, Route } from "react-router-dom";
import { Image } from "react-bootstrap";
import RegistrationPage from "./components/WelcomePage/RegistrationPage";
import Main from "./components/Main";
// import pattern from "/images/pattern.png";
// import logo from `process.env.PUBLIC_URL + "/logo_wa.png"`

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route
          path="/signup"
          exact
          render={(routerProps) => (
            <RegistrationPage routerProps={routerProps} />
          )}
        />
        <Route
          path="/login"
          exact
          render={(routerProps) => <LoginPage routerProps={routerProps} />}
        />
        <Route
          // path="/login/:userId"
          path="/main"
          render={(routerProps) => <Main routerProps={routerProps} />}
        />
      </BrowserRouter>
    </div>
  );
}

export default App;
