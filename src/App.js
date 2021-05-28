import React from "react";
import { UserProvider } from "./hooks/useUsers";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from "./pages/main";
import EditRegister from "./pages/editRegister";
import UserFirstRegister from "./pages/firstRegister";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <UserProvider>
        <Switch>
          <Route path="/register" component={UserFirstRegister} />
          <Route path="/edit/:id" component={EditRegister} />
          <Route exact path="/" component={Main} />
        </Switch>
      </UserProvider>
    </Router>
  );
}

export default App;
