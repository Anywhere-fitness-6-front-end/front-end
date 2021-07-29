import './App.css';
import Form from "./components/Sign-up-form";
import CreateAClass from "./components/Create-a-class"
import BookClasses from "./components/Book-classes";
import ClassList from "./components/Class-list";
import SignIn from "./components/Sign-in";
import EditDeleteClass from "./components/Edit-delete-class";
import WelcomeInfo from "./components/WelcomeInfo";
import { Route, Switch, Redirect } from "react-router-dom";


function App() {
  return (
    <div className="App">
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
      <Switch>
        <Route exact path="/class-list" component={ClassList} />
      </Switch>
      <Switch>
        <Route exact path="/edit-class" component={EditDeleteClass} />
      </Switch>
      <Switch>
        <Route exact path="/welcome-info" component={WelcomeInfo} />
      </Switch>
    </div>
  );
}

export default App;
