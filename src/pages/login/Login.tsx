import React from "react";
import { Theme, Container, TextField, Grid, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
    padding: theme.spacing(4),
    justifyContent: "center",
    height: "100vh",
    alignItems: "center"
  },
  container: {
    backgroundColor: "white",
    borderRadius: theme.shape.borderRadius,
    padding: theme.spacing(4)
  }
}));

const Login = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container maxWidth="xs" className={classes.container}>
        <Grid container spacing={3}>
          <Grid item container justify="center">
            <h2>Curhat ASI</h2>
          </Grid>
          <Grid item md={12} sm={12} xs={12}>
            <TextField id="username" label="Username" type="email" fullWidth autoFocus required />
          </Grid>
          <Grid item md={12} sm={12} xs={12}>
            <TextField id="username" label="PIN" type="password" fullWidth required />
          </Grid>
          <Grid item md={12} sm={12} xs={12}>
            <Button variant="contained" color="primary" disableElevation fullWidth>
              Login
            </Button>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Login;
