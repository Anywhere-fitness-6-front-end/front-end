import './App.css';
import Form from "./Components/Sign-up-form";
import SignIn from "./Components/Sign-in";
import CreateAClass from "./Components/Create-a-class"
import BookClasses from "./Components/Book-classes";
import ClassList from "./Components/Class-list";
import EditDeleteClass from "./Components/Edit-delete-class";
import WelcomeInfo from "./Components/WelcomeInfo";
import { Route, Switch, Redirect } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <h1> Homepage</h1>
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
