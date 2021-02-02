import logo from "./logo.svg";
import "./App.css";
import View from "./components/View";
import Edit from './components/Edit';
import Template from './components/Template';
import Onecms from './components/Onecms';
import { Switch, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/Onecms" component={Onecms}></Route>
        <Route path="/View" component={View}></Route>
        <Route path="/Edit" component={Edit}></Route>
        <Route path="/Template" component={Template}></Route>
        <Route component = {Onecms}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
