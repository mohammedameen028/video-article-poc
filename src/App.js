import logo from "./logo.svg";
import "./App.css";
import View from "./components/View";
import Edit from './components/Edit';
import { Switch, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/View" component={View}></Route>
        <Route path="/Edit" component={Edit}></Route>
        <Route component = {View}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
