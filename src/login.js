import { useState } from "react";
import { Button, Container, Grid, TextField, Typography } from "@material-ui/core";
import { useHistory } from "react-router";
import { NavLink } from "react-router-dom";

export default function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginFailed] = useState(false);

  async function submit(e) {
    console.log(email, password);
    e.preventDefault();
    const { access_token /*, refresh_token*/ } = await fetch(
      "https://realm.mongodb.com/api/client/v2.0/app/application-0-eomix/auth/providers/local-userpass/login",
      {
        headers: { "Content-Type": "application/json" },
        method: "POST",
        body: JSON.stringify({ username: email, password }),
      }
    ).then((res) => res.json());
    sessionStorage.setItem("access_token", access_token);
    history.push("/assignments");
  }

  return (
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
          {loginFailed && <Typography component="p">Login Failed</Typography>}
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
  );
}
