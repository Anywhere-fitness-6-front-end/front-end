import './App.css';
import Navbar from './components/Navbar';
import Form from "./components/Sign-up-form";
import CreateAClass from "./components/Create-a-class"
import BookClasses from "./components/Book-classes";
import SignIn from "./components/Sign-in";
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
        <Route path="/book-classes" component={BookClasses} />
      </Switch>
      <Switch>
        <Route path="/sign-in" component={SignIn} />
      </Switch>
    </div>
  );
}

export default App;
