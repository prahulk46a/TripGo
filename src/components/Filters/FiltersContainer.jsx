import { Box, Paper, Toolbar, useMediaQuery, useTheme } from "@mui/material";
import { useState } from "react";

import ChipsBar from "./ChipsBar";
import Filters from "./Filters";
import SortBy from "./SortBy";

const FilterContainer = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("RP"));
  const [accommodationType, setAccommodationType] = useState("Tents");

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Paper
        elevation={1}
        sx={{
          position: "relative",
          borderRadius: 0,
          mb: 2,
        }}
      >
        <Toolbar
          sx={{
            px: isMobile ? 1 : 2,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            width: "100%",
          }}
        >
          {/* Filter Component */}
          <Box sx={{ flexShrink: 0 }}>
            <Filters />
          </Box>

          {/* ChipsBar Component */}
          <Box sx={{ flexGrow: 1, mx: 1, overflow: "hidden" }}>
            <ChipsBar
              accommodationType={accommodationType}
              setAccommodationType={setAccommodationType}
            />
          </Box>

          {/* SortBy Component */}
          <Box sx={{ flexShrink: 0 }}>
            <SortBy />
          </Box>
        </Toolbar>
      </Paper>
    </Box>
  );
};

export default FilterContainer;
