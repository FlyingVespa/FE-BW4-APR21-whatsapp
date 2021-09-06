import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import pattern from "..public/pattern.png";
import LoginPage from "./components/WelcomePage/LoginPage";
import { BrowserRouter, Route } from "react-router-dom";
import RegistrationPage from "./components/WelcomePage/RegistrationPage";
import MainChat from "./components/MainSection/MainChat";

function App() {
  return (
    <div className="App" styles={{ backgroundImage: `url("pattern.png")` }}>
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
          path="/mainchat"
          render={(routerProps) => <MainChat routerProps={routerProps} />}
        />
      </BrowserRouter>
    </div>
  );
}

export default App;
