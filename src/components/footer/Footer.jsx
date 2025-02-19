import { Box, Typography } from "@mui/material";

const EcoFooter = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#272727",
        p: 3,
        textAlign: "center",
        maxWidth: "100vw",
      }}
    >
      <Typography variant="body2" color="white">
        © {new Date().getFullYear()} Eco-Friendly Brand. All rights reserved.
      </Typography>
    </Box>
  );
};

export default EcoFooter;
