import "swiper/css";
import "swiper/css/pagination";

import { BedOutlined, Cloud, CloudOutlined, Star } from "@mui/icons-material";
import {
  Box,
  Card,
  CardContent,
  IconButton,
  Tooltip,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Custom styles for pagination dots
const StyledCard = styled(Card)(`
  .swiper-pagination-bullet {
    width: 8px;
    height: 8px;
    background: rgba(255, 255, 255, 0.9);
    opacity: 0.5;
    margin: 0 4px !important;
  }

  .swiper-pagination-bullet-active {
    background: white;
    opacity: 1;
  }

  .swiper-pagination {
    bottom: 16px !important;
  }
`);

const images = [
  "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/25/b3/ab/c0/tents-n-trails.jpg?w=1200&h=-1&s=1",
  "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/da/91/bb/tents-n-trails.jpg?w=1200&h=-1&s=1",
  "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/28/cd/ed/b7/caption.jpg?w=700&h=-1&s=1",
];

const CampCard = () => {
  return (
    <StyledCard
      sx={{
        borderRadius: 3,
        overflow: "hidden",
        position: "relative",
        maxWidth: 350,
      }}
    >
      <Box sx={{ position: "relative" }}>
        {/* Image Slider with Pagination */}
        <Swiper
          modules={[Pagination]}
          pagination={{
            clickable: true,
          }}
          spaceBetween={0}
          slidesPerView={1}
          style={{ height: 350 }}
        >
          {images.map((img, index) => (
            <SwiperSlide key={index}>
              <img
                src={img}
                alt={`Camp view ${index + 1}`}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Rating & Weather Overlay */}
        <Box
          sx={{
            position: "absolute",
            top: 10,
            right: 10,
            display: "flex",
            alignItems: "center",
            bgcolor: "rgba(0,0,0,0.6)",
            borderRadius: 2,
            px: 1,
            py: 0.5,
            zIndex: 2,
          }}
        >
          <Star sx={{ color: "gold", fontSize: 16 }} />
          <Typography sx={{ color: "#fff", fontSize: 14, ml: 0.5 }}>
            4.5
          </Typography>
          <Cloud sx={{ color: "#fff", fontSize: 16, ml: 1 }} />
          <Typography sx={{ color: "#fff", fontSize: 14, ml: 0.5 }}>
            28°C
          </Typography>
        </Box>
      </Box>

      {/* Card Content */}
      <CardContent sx={{ pt: 2, pb: "16px !important" }}>
        <Typography variant="subtitle2" color="text.secondary">
          Borivali
        </Typography>

        {/* Title and Icons Row */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mt: 0.5,
            mb: 1,
          }}
        >
          <Typography variant="h6" sx={{ flex: 1 }}>
            Camp Adventure Rishikesh
          </Typography>

          <Box sx={{ display: "flex", gap: 1, ml: 2 }}>
            <Tooltip
              title="Beds"
              arrow
              placement="top"
              sx={{
                backgroundColor: "rgba(0, 0, 0, 0.8)",
                "& .MuiTooltip-arrow": {
                  color: "rgba(0, 0, 0, 0.8)",
                },
              }}
            >
              <IconButton
                sx={{
                  backgroundColor: "white",
                  border: "1px solid grey",
                  padding: "4px",
                  "&:hover": { backgroundColor: "white" },
                }}
              >
                <BedOutlined sx={{ color: "black", fontSize: 20 }} />
              </IconButton>
            </Tooltip>

            <IconButton
              sx={{
                border: "1px solid grey",
                padding: "4px",
                "&:hover": { backgroundColor: "white" },
              }}
            >
              <CloudOutlined sx={{ color: "blue", fontSize: 20 }} />
            </IconButton>
          </Box>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography variant="h6" sx={{ fontWeight: "bold", color: "green" }}>
            ₹ 7383
          </Typography>
          <Typography
            variant="body2"
            sx={{ textDecoration: "line-through", ml: 1, color: "gray" }}
          >
            ₹ 8932
          </Typography>
        </Box>
      </CardContent>
    </StyledCard>
  );
};

export default CampCard;
