import { KeyboardArrowUp as KeyboardArrowUpIcon } from "@mui/icons-material";
import { Box, Fab, useMediaQuery, useTheme } from "@mui/material";
import { useEffect, useRef, useState } from "react";

import CustomChip from "./CustomChip"; // Import the reusable chip component

const ChipsBar = ({ accommodationType, setAccommodationType }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const scrollContainerRef = useRef(null);
  const [showScrollToStart, setShowScrollToStart] = useState(false);

  const accommodationTypes = [
    "Tents",
    "Cottages",
    "Farmhouses",
    "Hotels",
    "Homestays",
    "Treehouses",
    "Villas",
  ];

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;

    if (scrollContainer) {
      const handleScroll = () => {
        setShowScrollToStart(scrollContainer.scrollLeft > 50);
      };

      scrollContainer.addEventListener("scroll", handleScroll);
      return () => scrollContainer.removeEventListener("scroll", handleScroll);
    }
  }, []);

  const scrollToStart = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({
        left: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <Box
      ref={scrollContainerRef}
      sx={{
        display: "flex",
        overflowX: "auto",
        py: 1.5,
        flexGrow: 1,
        msOverflowStyle: "none", // IE and Edge
        scrollbarWidth: "none", // Firefox
        "&::-webkit-scrollbar": {
          // Chrome, Safari, Opera
          display: "none",
        },
        position: "relative",
        "&::after": isMobile
          ? {
              content: '""',
              position: "absolute",
              right: 0,
              top: 0,
              height: "100%",
              width: "40px",
              background: "linear-gradient(to right, transparent, #ffffff)",
              pointerEvents: "none",
            }
          : {},
      }}
    >
      {accommodationTypes.map((type) => (
        <CustomChip
          key={type}
          label={type}
          isSelected={accommodationType === type}
          onClick={() => setAccommodationType(type)}
        />
      ))}

      {showScrollToStart && (
        <Fab
          size="small"
          aria-label="scroll to start"
          onClick={scrollToStart}
          sx={{
            position: "absolute",
            left: 60,
            zIndex: 2,
            minWidth: "30px",
            height: "30px",
            opacity: 0.7,
            "&:hover": {
              opacity: 1,
            },
            display: { xs: "flex", sm: "none" },
          }}
        >
          <KeyboardArrowUpIcon sx={{ transform: "rotate(-90deg)" }} />
        </Fab>
      )}
    </Box>
  );
};

export default ChipsBar;
