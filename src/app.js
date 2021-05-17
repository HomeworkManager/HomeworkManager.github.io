import { CssBaseline } from "@material-ui/core";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Assignments from "./assignments";
import Login from "./login";

export default function App() {
  return (
    <BrowserRouter>
      <CssBaseline />
      {!sessionStorage.getItem("access_token") ? (
        <Switch>
          <Route>
            <Login path="/login" />
          </Route>
        </Switch>
      ) : (
        <Switch>
          <Route path="/assignments">
            <Assignments />
          </Route>
        </Switch>
      )}
    </BrowserRouter>
  );
}
