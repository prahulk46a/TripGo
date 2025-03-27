import { Box, Button, Grid, Paper, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = () => {
    console.log({ fullName, email, password });
  };

  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
      {/* Left Section (Image) */}
      <Grid
        item
        xs={false}
        sm={6}
        sx={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1586022045497-31fcf76fa6cc?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      {/* Right Section (Form) */}
      <Grid
        item
        xs={12}
        sm={6}
        component={Paper}
        elevation={6}
        square
        sx={{
          bgcolor: "#111",
          color: "white",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          p: 4,
        }}
      >
        <Box sx={{ maxWidth: 400, textAlign: "center" }}>
          <Typography variant="h4">Create an Account</Typography>
          <Typography variant="body2" sx={{ mb: 3 }}>
            Join us today!
          </Typography>
          <TextField
            fullWidth
            label="Full Name"
            margin="normal"
            variant="outlined"
            InputLabelProps={{ style: { color: "white" } }}
            sx={{ input: { color: "white" }, bgcolor: "#222", borderRadius: 1 }}
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
          <TextField
            fullWidth
            label="Email"
            margin="normal"
            variant="outlined"
            InputLabelProps={{ style: { color: "white" } }}
            sx={{ input: { color: "white" }, bgcolor: "#222", borderRadius: 1 }}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            fullWidth
            label="Password"
            type="password"
            margin="normal"
            variant="outlined"
            InputLabelProps={{ style: { color: "white" } }}
            sx={{ input: { color: "white" }, bgcolor: "#222", borderRadius: 1 }}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            fullWidth
            variant="contained"
            sx={{ mt: 2, bgcolor: "#7a5af5" }}
            onClick={handleSignUp}
          >
            Sign Up
          </Button>
          <Typography variant="body2" sx={{ mt: 2 }}>
            Already have an account?{" "}
            <Link to="/login" style={{ color: "#7a5af5" }}>
              Sign in
            </Link>
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default SignUp;
