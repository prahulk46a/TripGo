import { Box, Typography } from "@mui/material";

import Andaman from "../../../assets/andaman.png";
import Canada from "../../../assets/canada.png";
import ECoast from "../../../assets/ecoast.png";
import Konkan from "../../../assets/konkan.png";

const places = [
  { title: "Konkan", image: Konkan },
  { title: "E. Coast", image: Canada },
  { title: "Canada", image: ECoast },
  { title: "Andaman", image: Andaman },
];

const TravelGrid = () => {
  return (
    <Box
      sx={{
        mr: { xs: 2, md: 4, xl: 14 },
        ml: { xs: 2, md: 4, xl: 14 },
        mt: { xs: 2, md: 6 },
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
        Discover the Touch of Nature
        <Box
          sx={{
            background: `linear-gradient(to left, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.4))`,
            height: "2px",
            width: "30%",
          }}
        />
      </Typography>

      {/* Staggered Grid Layout */}
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
        {places.map((destination, index) => (
          <Box
            key={index}
            sx={{
              position: "relative",
              height: { xs: 300, md: 400, lg: 450 },
              borderRadius: 4,
              overflow: "hidden",
              cursor: "pointer",
              marginTop: index % 2 !== 0 ? { xs: 0, md: "50px" } : 0, // Staggered effect on desktop
              "&:hover": {
                transform: "scale(1.02)",
                transition: "transform 0.3s ease-in-out",
              },
            }}
          >
            <Box
              component="img"
              src={destination.image}
              alt={destination.title}
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
            <Box
              sx={{
                position: "absolute",
                top: 16,
                right: 16,
                backgroundColor: "rgba(255, 255, 255, 0.9)",
                borderRadius: 25,
                px: 2,
                py: 0.5,
              }}
            >
              <Typography variant="subtitle1" fontWeight="medium">
                {destination.title}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default TravelGrid;
