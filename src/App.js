import "./App.css";
import NavBar from "./components/NavBar";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import { Footer } from "./components/pages/Footer/Footer";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
