// src/components/SignIn.js

import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleSignIn = () => {
    console.log({ email, password, rememberMe });
  };
  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
      {/* Left Section (Form) */}
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
          <Typography variant="h4">Welcome back</Typography>
          <Typography variant="body2" sx={{ mb: 3 }}>
            Please enter your details
          </Typography>
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
          <FormControlLabel
            control={
              <Checkbox
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
            }
            label={
              <Typography variant="body2">Remember for 30 days</Typography>
            }
          />
          <Button
            fullWidth
            variant="contained"
            sx={{ mt: 2, bgcolor: "#7a5af5" }}
            onClick={handleSignIn}
          >
            Sign In
          </Button>
          <Button
            fullWidth
            variant="outlined"
            sx={{ mt: 1, color: "white", borderColor: "white" }}
          >
            Sign in with Google
          </Button>
          <Typography variant="body2" sx={{ mt: 2 }}>
            Don't have an account?{" "}
            <Link to="/signup" style={{ color: "#7a5af5" }}>
              Sign up
            </Link>
          </Typography>
        </Box>
      </Grid>

      {/* Right Section (Image) */}
      <Grid
        item
        xs={false}
        sm={6}
        sx={{
          backgroundImage:
            "url(https://images.pexels.com/photos/4095483/pexels-photo-4095483.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
    </Grid>
  );
};

export default SignIn;
