import { Box, Button, Grid, Paper, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    contact: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({
      name: "",
      email: "",
      password: "",
      contact: "",
    });
  };

  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
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
          <Typography variant="h4">Create an account</Typography>
          <Typography variant="body2" sx={{ mb: 3 }}>
            Enter your details below
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="Full Name"
              margin="normal"
              variant="outlined"
              name="name"
              value={formData.name}
              onChange={handleChange}
              autoComplete="name"
              InputLabelProps={{ style: { color: "white" } }}
              sx={{
                input: { color: "white" },
                bgcolor: "#222",
                borderRadius: 1,
              }}
            />
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
              autoComplete="new-password"
              InputLabelProps={{ style: { color: "white" } }}
              sx={{
                input: { color: "white" },
                bgcolor: "#222",
                borderRadius: 1,
              }}
            />
            <TextField
              fullWidth
              label="Contact Number"
              margin="normal"
              variant="outlined"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
              autoComplete="tel"
              InputLabelProps={{ style: { color: "white" } }}
              sx={{
                input: { color: "white" },
                bgcolor: "#222",
                borderRadius: 1,
              }}
            />
            <Button
              fullWidth
              variant="contained"
              sx={{ mt: 2, bgcolor: "#7a5af5" }}
              type="submit"
            >
              Sign Up
            </Button>
          </form>
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
