import React from "react";
import { UserProvider } from "./hooks/useUsers";
import { AddressDataProvider } from "./hooks/useAddress";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from "./pages/main";
import EditRegister from "./pages/editRegister";

function App() {
  return (
    <Router>
      <UserProvider>
        <AddressDataProvider>
          <Switch>
            <Route path="/edit" component={EditRegister} />
            <Route exact path="/" component={Main} />
          </Switch>
        </AddressDataProvider>
      </UserProvider>
    </Router>
  );
}

export default App;
