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
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    remember: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({
      email: "",
      password: "",
      remember: false,
    });
  };

  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
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
          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="Email"
              margin="normal"
              variant="outlined"
              name="email"
              value={formData.email}
              onChange={handleChange}
              autoComplete="email"
              InputLabelProps={{ style: { color: "white" } }}
              sx={{
                input: { color: "white" },
                bgcolor: "#222",
                borderRadius: 1,
              }}
            />
            <TextField
              fullWidth
              label="Password"
              type="password"
              margin="normal"
              variant="outlined"
              name="password"
              value={formData.password}
              onChange={handleChange}
              autoComplete="current-password"
              InputLabelProps={{ style: { color: "white" } }}
              sx={{
                input: { color: "white" },
                bgcolor: "#222",
                borderRadius: 1,
              }}
            />
            <FormControlLabel
              control={
                <Checkbox
                  sx={{ color: "white", "&.Mui-checked": { color: "white" } }}
                  name="remember"
                  checked={formData.remember}
                  onChange={handleChange}
                />
              }
              label={
                <Typography variant="body2" sx={{ color: "white" }}>
                  Remember for 30 days
                </Typography>
              }
            />
            <Button
              fullWidth
              variant="contained"
              sx={{ mt: 2, bgcolor: "#7a5af5" }}
              type="submit"
            >
              Sign In
            </Button>
          </form>
          <Button
            fullWidth
            variant="outlined"
            sx={{ mt: 1, color: "white", borderColor: "white" }}
          >
            Sign in with Google
          </Button>
          <Typography variant="body2" sx={{ mt: 2 }}>
            Don&apos;t have an account?{" "}
            <Link to="/signup" style={{ color: "#7a5af5" }}>
              Sign up
            </Link>
          </Typography>
        </Box>
      </Grid>
      <Grid
        item
        xs={false}
        sm={6}
        sx={{
          backgroundImage:
            "url(https://images.pexels.com/photos/2108845/pexels-photo-2108845.jpeg?cs=srgb&dl=pexels-mohamedelaminemsiouri-2108845.jpg&fm=jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
    </Grid>
  );
};

export default SignIn;
