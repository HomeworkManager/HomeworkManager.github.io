import { useState } from "react";
import { Button, Container, Grid, TextField, Typography } from "@material-ui/core";
import { useHistory } from "react-router";
import { NavLink } from "react-router-dom";
import app from "./mongodb";

export default function CreateAccount() {
  const history = useHistory();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function submit(e) {
    e.preventDefault();
    try {
      try {
        await app.emailPasswordAuth.registerUser(email, password);
        app.currentUser.profile.name = name;
        history.push("/login");
      } catch {}
    } catch {}
  }

  return (
    <form onSubmit={submit}>
      <Container component="main" maxWidth="xs">
        <div style={{ marginTop: "80px", display: "flex", flexDirection: "column", alignItems: "center" }}>
          <Typography component="h1" variant="h5">
            Create Account
          </Typography>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="name"
            label="Name"
            name="name"
            autoFocus
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
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
              <NavLink to="/login" variant="body2">
                Login
              </NavLink>
            </Grid>
          </Grid>
        </div>
      </Container>
    </form>
  );
}
