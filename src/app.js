import { CssBaseline, LinearProgress } from "@material-ui/core";
import { lazy, Suspense } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import app from "./mongodb";
const Assignments = lazy(() => import("./assignments"));
const Login = lazy(() => import("./login"));
const CreateAccount = lazy(() => import("./create-account"));

export default function App() {
  return (
    <BrowserRouter>
      <CssBaseline />
      <Suspense fallback={<LinearProgress color="secondary" />}>
        <Switch>
          {app.currentUser?.isLoggedIn ? (
            <Redirect exact from="/" to="/assignments" />
          ) : (
            <Redirect exact from="/" to="/login" />
          )}
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/create-account">
            <CreateAccount />
          </Route>
          <Route path="/assignments">
            <Assignments />
          </Route>
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
}
