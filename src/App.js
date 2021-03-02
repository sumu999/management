import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { adminRoutes } from "./routes";

function App() {
  return (
    <Switch>
      {adminRoutes.map(route => {
        return (
          <Route 
            key= {route.path}
            path= {route.path}
            exact
            render= {routeProps => {
              return <route.component {...routeProps} />
            }}
          />
        )
      })}
      <Redirect to={adminRoutes[0].path} from="/admin" />
      <Redirect to="/404" />
    </Switch>
  );
}

export default App;
