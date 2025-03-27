import { Facebook, Instagram, Twitter, YouTube } from "@mui/icons-material";
import {
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

const SocialSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("RP"));

  return (
    <Box
      sx={{
        background: "linear-gradient(135deg, #f5f5f5, #e0e0e0)", // Gradient background
        py: 4,
        width: "100%",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="stretch">
          {/* Left Section */}
          <Grid item xs={12} RP={5}>
            <Box>
              <Typography
                variant="h5"
                sx={{
                  fontWeight: "bold",
                  mb: 2,
                }}
              >
                Leading the way
                <br />
                in adventure
              </Typography>

              <Box sx={{ display: "flex", gap: 1 }}>
                <IconButton
                  sx={{
                    backgroundColor: "grey.300",
                    "&:hover": { backgroundColor: "grey.400" },
                  }}
                >
                  <Facebook />
                </IconButton>
                <IconButton
                  sx={{
                    backgroundColor: "grey.300",
                    "&:hover": { backgroundColor: "grey.400" },
                  }}
                >
                  <Instagram />
                </IconButton>
                <IconButton
                  sx={{
                    backgroundColor: "grey.300",
                    "&:hover": { backgroundColor: "grey.400" },
                  }}
                >
                  <Twitter />
                </IconButton>
                <IconButton
                  sx={{
                    backgroundColor: "grey.300",
                    "&:hover": { backgroundColor: "grey.400" },
                  }}
                >
                  <YouTube />
                </IconButton>
              </Box>
            </Box>
          </Grid>

          {/* Vertical Separator Line */}
          {!isMobile && (
            <Grid item xs={12} RP={1}>
              <Box
                sx={{
                  width: "1px", // Vertical line width
                  height: "100%", // Full height of the container
                  backgroundColor: "grey.400", // Line color
                  mx: "auto", // Center the line horizontally
                }}
              />
            </Grid>
          )}

          {/* Right Section */}
          <Grid item xs={12} RP={6}>
            <Box>
              <Typography
                variant="h6"
                sx={{
                  mb: 2,
                }}
              >
                Join our Newsletter
              </Typography>

              <Box sx={{ display: "flex", gap: 1 }}>
                <TextField
                  placeholder="Email@mail.com"
                  variant="outlined"
                  fullWidth
                  sx={{
                    backgroundColor: "white",
                    "& .MuiOutlinedInput-root": {
                      borderRadius: 2,
                    },
                  }}
                />
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "black",
                    borderRadius: 2,
                    minWidth: "unset",
                    px: 2,
                    "&:hover": {
                      backgroundColor: "grey.900",
                    },
                  }}
                >
                  →
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default SocialSection;
