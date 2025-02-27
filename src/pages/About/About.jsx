import { Box, Container, Grid, Typography } from "@mui/material";

import aimg from "../../assets/aboutimage.jpg";
import campfire from "../../assets/campfire.jpg";
import hike from "../../assets/hike.jpg";
import quality from "../../assets/quality.png";
import team from "../../assets/team.jpg.webp";
import travelStory from "../../assets/travelstory.jpg";

const About = () => {
  const journalImages = [travelStory, hike, campfire];

  return (
    <Box sx={{ overflowX: "hidden", width: "100%" }}>
      {/* Hero Section */}
      <Box
        sx={{
          height: { xs: "50vh", md: "70vh" },
          width: "100%",
          position: "relative",
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${aimg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          mb: 8,
        }}
      >
        <Typography
          variant="h2"
          sx={{
            color: "white",
            fontSize: { xs: "2rem", md: "3.5rem" },
            fontWeight: "bold",
            textAlign: "center",
            px: 2,
          }}
        >
          EXPLORE YOUR WAY
        </Typography>
      </Box>

      {/* Manifesto Section */}
      <Box sx={{ mb: 8, textAlign: "center" }}>
        <Typography variant="subtitle1" sx={{ mb: 2, color: "#777" }}>
          Embracing Adventure, Embracing You
        </Typography>

        <Typography
          variant="h4"
          sx={{ mb: 3, maxWidth: "800px", mx: "auto", fontWeight: "bold" }}
        >
          Unbounded: The Travelers&apos; Manifesto
        </Typography>

        <Typography
          variant="body1"
          sx={{ maxWidth: "800px", mx: "auto", color: "#555" }}
        >
          Since 2020, TripGo has been dedicated to providing memorable and
          sustainable travel experiences. With years of expertise, we&apos;ve
          grown to become your trusted partner in creating unforgettable
          journeys that respect both our travelers and our destinations.
        </Typography>
      </Box>

      {/* Features Grid */}
      <Container sx={{ mb: 8 }}>
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <Box sx={{ textAlign: "center" }}>
              <img
                src={team}
                alt="Team"
                style={{
                  width: "100%",
                  maxWidth: "450px",
                  height: "auto",
                  borderRadius: "10px",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                }}
              />
              <Typography variant="h5" sx={{ mt: 3, fontWeight: "bold" }}>
                The Message
              </Typography>
              <Typography variant="body1" sx={{ mt: 2, color: "#555" }}>
                We believe everyone deserves authentic experiences. Whether
                exploring ancient ruins or tasting local cuisine, we&apos;re
                committed to making travel accessible while preserving the
                world&apos;s natural and cultural heritage.
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box sx={{ textAlign: "center" }}>
              <Typography variant="h5" sx={{ mb: 2, fontWeight: "bold" }}>
                Quality and Affordability
              </Typography>
              <Typography variant="body1" sx={{ color: "#555" }}>
                Our commitment to quality and affordability is reflected in
                everything we do. We carefully curate each experience to ensure
                the perfect balance of adventure, comfort, and value—making
                extraordinary travel accessible to everyone.
              </Typography>
              <img
                src={quality}
                alt="Quality and Affordability"
                style={{
                  width: "100%",
                  maxWidth: "350px",
                  height: "auto",
                  borderRadius: "10px",
                  marginTop: "20px",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* Journal Preview Section */}
      <Container sx={{ mb: 8 }}>
        <Typography
          variant="h5"
          sx={{ mb: 4, textAlign: "center", fontWeight: "bold" }}
        >
          OUR JOURNAL
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {journalImages.map((image, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Box sx={{ textAlign: "center" }}>
                <Box
                  sx={{
                    width: "100%",
                    height: 260,
                    borderRadius: "10px",
                    backgroundImage: `url(${image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                  }}
                />
                <Typography variant="h6" sx={{ mt: 2, fontWeight: "bold" }}>
                  Hiking Nature&apos;s Canopy
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Discover amazing destinations and experiences through our
                  travelers&apos; stories.
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default About;
