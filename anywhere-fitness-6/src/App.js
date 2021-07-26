import './App.css';
import Form from "./Components/Sign-up-form";
import CreateAClass from "./Components/Create-a-class"
import BookClasses from "./Components/Book-classes";
import SignIn from "./Components/Sign-in";
import { Route, Switch, Redirect } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <h1> Homepage</h1>
      <Form />
      <Switch>
        <Route exact path="/" component={Form} />
      </Switch>
      <Switch>
        <Route exact path="/create-a-class" component={CreateAClass} />
      </Switch>
      <Switch>
        <Route exact path="/book-classes" component={BookClasses} />
      </Switch>
      <Switch>
        <Route exact path="/sign-in" component={SignIn} />
      </Switch>
    </div>
  );
}

export default App;
