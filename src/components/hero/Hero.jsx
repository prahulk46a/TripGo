import { Box, Card, CardMedia, Grid, Typography } from "@mui/material";

const Hero = ({ image, text }) => {
  return (
    <Box
      sx={{
        width: "100%",
        position: "relative",
        overflow: "hidden",
        marginBottom: "5px",
      }}
    >
      <Grid container alignContent="center" justifyContent="center">
        <Grid item xs={12} sx={{ position: "relative" }}>
          <Card sx={{ boxShadow: "none" }}>
            <CardMedia
              component="img"
              image={image}
              alt="Hero Image"
              sx={{ width: "100vw", height: "70vh", borderRadius: "0" }}
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
                {text}
              </Typography>
            </Box>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Hero;
