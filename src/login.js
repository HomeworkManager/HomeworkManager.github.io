import { useState } from "react";
import { Button, Container, Grid, Snackbar, TextField, Typography } from "@material-ui/core";
import { useHistory } from "react-router";
import { NavLink } from "react-router-dom";
import app from "./mongodb";
import { Credentials } from "realm-web";

export default function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginFailed, setLoginFailed] = useState(false);

  async function submit(e) {
    e.preventDefault();
    const credentials = Credentials.emailPassword(email, password);
    try {
      await app.logIn(credentials);
      history.push("/assignments");
    } catch {
      setLoginFailed(true);
    }
  }

  return (
    <>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={loginFailed}
        onClose={() => setLoginFailed(false)}
        message="Login Failed!"
      />
      <form onSubmit={submit}>
        <Container component="main" maxWidth="xs">
          <div style={{ marginTop: "80px", display: "flex", flexDirection: "column", alignItems: "center" }}>
            <Typography component="h1" variant="h5">
              Login
            </Typography>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              style={{ marginTop: "20px" }}
              onClick={submit}
            >
              Submit
            </Button>
            <Grid container style={{ marginTop: "10px" }}>
              <Grid item>
                or{" "}
                <NavLink to="/create-account" variant="body2">
                  Create Account
                </NavLink>
              </Grid>
            </Grid>
          </div>
        </Container>
      </form>
    </>
  );
}
