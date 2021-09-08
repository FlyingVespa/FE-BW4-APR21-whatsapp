import "./App.css";
import "./components/MainSection/mainsection.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import pattern from "..public/pattern.png";
import LoginPage from "./components/WelcomePage/LoginPage";
import { BrowserRouter, Route } from "react-router-dom";
import configureStore from "./Redux/store";
import { Provider } from "react-redux";

// import { Image } from "react-bootstrap";
import RegistrationPage from "./components/WelcomePage/RegistrationPage";
import Main from "./components/Main";
import LoginTest from "./components/WelcomePage/LoginTest";
// import pattern from "/images/pattern.png";
// import logo from `process.env.PUBLIC_URL + "/logo_wa.png"`

function App() {
  return (
    <Provider store={configureStore}>
      <BrowserRouter>
        <Route path="/" exact component={LoginTest} />
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
    </Provider>
  );
}

export default App;
