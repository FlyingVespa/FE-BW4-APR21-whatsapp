import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import pattern from "..public/pattern.png";
import LoginPage from "./components/WelcomePage/LoginPage";
import { BrowserRouter, Route } from "react-router-dom";
import RegistrationPage from "./components/WelcomePage/RegistrationPage";
import Main from "./components/Main";

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
