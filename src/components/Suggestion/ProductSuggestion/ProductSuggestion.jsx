import { Box, Typography } from "@mui/material";

import CampCard from "../../Cards/Card1";

const ProductSuggestion = () => {
  return (
    <Box
      sx={{
        mr: { xs: 2, md: 4, xl: 14 },
        ml: { xs: 2, md: 4, xl: 14 },
        mt: { xs: 2, md: 4, xl: 14 },
        pb: { xs: 2, md: 6 },
        overflow: "hidden",
      }}
    >
      <Typography
        variant="h6"
        sx={{
          mb: 4,
          fontSize: "1.7rem",
          pl: 1,
        }}
      >
        New Destinations
        <Box
          sx={{
            background: `linear-gradient(to left, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.4))`,
            height: "2px",
            width: "30%",
          }}
        />
      </Typography>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "1fr 1fr",
            md: "repeat(4, 1fr)",
          },
          gap: 3,
          mt: 4,
        }}
      >
        <CampCard></CampCard>
        <CampCard></CampCard>
        <CampCard></CampCard>
        <CampCard></CampCard>
        <CampCard></CampCard>
        <CampCard></CampCard>
        <CampCard></CampCard>
        <CampCard></CampCard>
      </Box>
    </Box>
  );
};

export default ProductSuggestion;
