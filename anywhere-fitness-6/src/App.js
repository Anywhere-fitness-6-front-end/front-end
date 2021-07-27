import './App.css';
import Navbar from './components/Navbar';
import Form from "./components/Sign-up-form";
import CreateAClass from "./components/Create-a-class"
import ClassSearch from "./components/SearchClass/Class-Search";
import SignIn from "./components/Sign-in";
import Booked from './components/Booked/Booked';
import { Route, Switch, Redirect } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Form} />
      </Switch>
      <Switch>
        <Route path="/create-a-class" component={CreateAClass} />
      </Switch>
      <Switch>
        <Route path="/book-classes" component={ClassSearch} />
      </Switch>
      <Switch>
        <Route path="/your-classes" component={Booked} />
      </Switch>
      <Switch>
        <Route path="/sign-in" component={SignIn} />
      </Switch>
    </div>
  );
}

export default App;
