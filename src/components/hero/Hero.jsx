import { Box, Card, CardMedia, Grid, Typography } from "@mui/material";

import heroImg from "../../assets/image.png";
const Hero = () => {
  return (
    <Box sx={{ width: "100%", position: "relative", overflow: "hidden" }}>
      <Grid container justifyContent="center">
        <Grid item xs={12} sx={{ position: "relative" }}>
          <Card sx={{ boxShadow: "none" }}>
            <CardMedia
              component="img"
              image={heroImg}
              alt="Bonfire gathering"
              sx={{ width: "100vw", height: "70vh", borderRadius: 0 }}
            />
            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "80%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography variant="h3" fontWeight="normal" color="white">
                {/* Gear up for Great Outdoors® */}
                GEAR UP FOR GREAT OUTDOORS®
              </Typography>
            </Box>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Hero;
