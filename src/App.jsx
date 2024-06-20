import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import "./App.css";
import Home from "./pages/Home";
import OrderPizza from "./pages/OrderPizza";
import Success from "./pages/Success";

function App() {
  return (
    <>
     <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/orderpizza">
          <OrderPizza />
        </Route>
        <Route exact path="/success">
          <Success/>
        </Route>
      </Switch>
    </>
  );
}

export default App;
