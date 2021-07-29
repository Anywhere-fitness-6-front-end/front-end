import './App.css';
import Form from "./components/Sign-up-form";
import SignIn from "./components/Sign-in";
import CreateAClass from "./components/Create-a-class"
import ClassList from "./components/Class-list";
import EditDeleteClass from "./components/Edit-delete-class";
import WelcomeInfo from "./components/WelcomeInfo";
import { Route, Switch, Redirect } from "react-router-dom";
import Booked from "./components/Booked/Booked";
import ClassSearch from "./components/SearchClass/Class-Search";


function App() {
  return (
    <div className="App">
      <h1> Homepage</h1>
      <Switch>
        <Route exact path="/" component={Form} />
      </Switch>
      <Switch>
        <Route path="/create-a-class" component={CreateAClass} />
      </Switch>
      {/* <Switch>
        <Route path="/book-classes" component={ClassSearch} />
      </Switch> */}
      <Switch>
        <Route exact path="/your-classes" component={Booked} />
      </Switch>
      <Switch>
        <Route path="/sign-in" component={SignIn} />
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
