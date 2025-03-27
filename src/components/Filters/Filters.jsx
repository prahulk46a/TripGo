import {
  Close as CloseIcon,
  TuneOutlined as FilterIcon,
} from "@mui/icons-material";
import {
  alpha,
  Box,
  Button,
  Checkbox,
  Container,
  Dialog,
  Divider,
  Drawer,
  FormControlLabel,
  Grid,
  IconButton,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useState } from "react";

import FilterOption from "./FilterOptions"; // Import the reusable filter option component

const Filters = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("RP"));

  const [open, setOpen] = useState(false);
  const [priceRange, setPriceRange] = useState("");
  const [capacity, setCapacity] = useState("");
  const [rating, setRating] = useState("");
  const [amenities, setAmenities] = useState([]);
  const [moreFilters, setMoreFilters] = useState([]);

  const priceRanges = [
    { value: "under5k", label: "Under ₹5,000" },
    { value: "5kto10k", label: "₹5,000 - ₹10,000" },
    { value: "10kto15k", label: "₹10,000 - ₹15,000" },
    { value: "above15k", label: "Above ₹15,000" },
  ];

  const capacityOptions = [
    { value: "1-2", label: "1-2 Guests" },
    { value: "3-4", label: "3-4 Guests" },
    { value: "5-6", label: "5-6 Guests" },
    { value: "7+", label: "7+ Guests" },
  ];

  const amenitiesOptions = [
    { value: "wifi", label: "Free WiFi" },
    { value: "campfire", label: "Campfire" },
    { value: "breakfast", label: "Free Breakfast" },
    { value: "trekking", label: "Trekking" },
    { value: "safari", label: "Wildlife Safari" },
    { value: "yoga", label: "Yoga Sessions" },
  ];

  const ratingOptions = [
    { value: "4.5+", label: "4.5 & above" },
    { value: "4.0+", label: "4.0 & above" },
    { value: "3.5+", label: "3.5 & above" },
    { value: "3.0+", label: "3.0 & above" },
  ];

  const moreFiltersOptions = [
    { value: "meal", label: "Meal Included" },
    { value: "pet", label: "Pet Friendly" },
    { value: "wheelchair", label: "Wheelchair Accessible" },
    { value: "family", label: "Family Friendly" },
    { value: "couples", label: "Couples" },
    { value: "adventure", label: "Adventure Activities" },
  ];

  const handleOpenFilters = () => setOpen(true);
  const handleCloseFilters = () => setOpen(false);

  const handleApplyFilters = () => {
    console.log("Filters applied:", {
      priceRange,
      capacity,
      rating,
      amenities,
      moreFilters,
    });
    setOpen(false);
  };

  const handleClearAll = () => {
    setPriceRange("");
    setCapacity("");
    setRating("");
    setAmenities([]);
    setMoreFilters([]);
  };

  return (
    <>
      <IconButton
        size="large"
        edge="start"
        aria-label="filter"
        onClick={handleOpenFilters}
        sx={{
          mr: 1,
          bgcolor: "action.hover",
          borderRadius: "50%",
          transition: "all 0.2s",
          "&:hover": {
            transform: "scale(1.05)",
            bgcolor: alpha(theme.palette.primary.main, 0.1),
          },
        }}
      >
        <FilterIcon />
      </IconButton>

      {/* Filter drawer for mobile */}
      {isMobile ? (
        <Drawer
          anchor="bottom"
          open={open}
          onClose={handleCloseFilters}
          PaperProps={{
            sx: {
              width: "100%",
              borderTopLeftRadius: 16,
              borderTopRightRadius: 16,
              maxHeight: "90vh",
              overflowY: "auto",
            },
          }}
        >
          <Box
            sx={{
              width: "100%",
              p: 2,
              position: "sticky",
              top: 0,
              bgcolor: "background.paper",
              zIndex: 1,
              borderBottom: "1px solid #eee",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              Filters
            </Typography>
            <IconButton onClick={handleCloseFilters}>
              <CloseIcon />
            </IconButton>
          </Box>

          <Box sx={{ p: 2 }}>
            {/* Price Range */}
            <FilterOption
              type="radio"
              label="Price Range"
              options={priceRanges}
              selectedValue={priceRange}
              onChange={(e) => setPriceRange(e.target.value)}
            />

            <Divider sx={{ my: 2 }} />

            {/* Capacity */}
            <FilterOption
              type="radio"
              label="Capacity"
              options={capacityOptions}
              selectedValue={capacity}
              onChange={(e) => setCapacity(e.target.value)}
            />

            <Divider sx={{ my: 2 }} />

            {/* Amenities */}
            <FilterOption
              type="checkbox"
              label="Amenities"
              options={amenitiesOptions}
              selectedValue={amenities}
              onChange={(e) => {
                const value = e.target.value;
                setAmenities(
                  amenities.includes(value)
                    ? amenities.filter((item) => item !== value)
                    : [...amenities, value]
                );
              }}
            />

            <Divider sx={{ my: 2 }} />

            {/* Rating */}
            <FilterOption
              type="radio"
              label="Rating"
              options={ratingOptions}
              selectedValue={rating}
              onChange={(e) => setRating(e.target.value)}
            />

            <Divider sx={{ my: 2 }} />

            {/* More Filters */}
            <FilterOption
              type="checkbox"
              label="More Filters"
              options={moreFiltersOptions}
              selectedValue={moreFilters}
              onChange={(e) => {
                const value = e.target.value;
                setMoreFilters(
                  moreFilters.includes(value)
                    ? moreFilters.filter((item) => item !== value)
                    : [...moreFilters, value]
                );
              }}
            />
          </Box>

          {/* Action buttons */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              p: 2,
              position: "sticky",
              bottom: 0,
              bgcolor: "background.paper",
              borderTop: "1px solid #eee",
              zIndex: 1,
            }}
          >
            <Button
              variant="outlined"
              onClick={handleClearAll}
              sx={{
                borderRadius: 28,
                px: 3,
                py: 1,
                flex: 1,
                mr: 1,
              }}
            >
              CLEAR ALL
            </Button>
            <Button
              variant="contained"
              onClick={handleApplyFilters}
              sx={{
                bgcolor: "black",
                color: "white",
                borderRadius: 28,
                px: 3,
                py: 1,
                flex: 1,
                ml: 1,
                "&:hover": {
                  bgcolor: "#333",
                },
              }}
            >
              APPLY
            </Button>
          </Box>
        </Drawer>
      ) : (
        /* Filter dialog for desktop */
        <Dialog
          open={open}
          onClose={handleCloseFilters}
          maxWidth="md"
          fullWidth
          PaperProps={{
            elevation: 3,
            sx: { borderRadius: 2 },
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              p: 2,
              borderBottom: "1px solid #eee",
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              Filters
            </Typography>
            <IconButton onClick={handleCloseFilters}>
              <CloseIcon />
            </IconButton>
          </Box>

          <Container maxWidth="lg" sx={{ py: 3 }}>
            <Grid container spacing={3}>
              {/* Price Range */}
              <Grid item xs={12} md={3}>
                <FilterOption
                  type="radio"
                  label="Price Range"
                  options={priceRanges}
                  selectedValue={priceRange}
                  onChange={(e) => setPriceRange(e.target.value)}
                />
              </Grid>

              {/* Capacity */}
              <Grid item xs={12} md={3}>
                <FilterOption
                  type="radio"
                  label="Capacity"
                  options={capacityOptions}
                  selectedValue={capacity}
                  onChange={(e) => setCapacity(e.target.value)}
                />
              </Grid>

              {/* Amenities */}
              <Grid item xs={12} md={3}>
                <FilterOption
                  type="checkbox"
                  label="Amenities"
                  options={amenitiesOptions}
                  selectedValue={amenities}
                  onChange={(e) => {
                    const value = e.target.value;
                    setAmenities(
                      amenities.includes(value)
                        ? amenities.filter((item) => item !== value)
                        : [...amenities, value]
                    );
                  }}
                />
              </Grid>

              {/* Rating */}
              <Grid item xs={12} md={3}>
                <FilterOption
                  type="radio"
                  label="Rating"
                  options={ratingOptions}
                  selectedValue={rating}
                  onChange={(e) => setRating(e.target.value)}
                />
              </Grid>
            </Grid>

            <Divider sx={{ my: 3 }} />

            {/* More Filters */}
            <Box sx={{ mb: 3 }}>
              <Typography variant="subtitle1" fontWeight="medium" gutterBottom>
                More Filters
              </Typography>
              <Grid container spacing={2}>
                {moreFiltersOptions.map((option) => (
                  <Grid item xs={12} RP={6} md={4} lg={2} key={option.value}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={moreFilters.includes(option.value)}
                          onChange={(e) => {
                            const value = e.target.value;
                            setMoreFilters(
                              moreFilters.includes(value)
                                ? moreFilters.filter((item) => item !== value)
                                : [...moreFilters, value]
                            );
                          }}
                          value={option.value}
                        />
                      }
                      label={option.label}
                    />
                  </Grid>
                ))}
              </Grid>
            </Box>

            {/* Action buttons */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                gap: 2,
                mt: 3,
              }}
            >
              <Button
                variant="outlined"
                onClick={handleClearAll}
                sx={{
                  borderRadius: 28,
                  px: 3,
                  py: 1,
                }}
              >
                CLEAR ALL
              </Button>
              <Button
                variant="contained"
                onClick={handleApplyFilters}
                sx={{
                  bgcolor: "black",
                  color: "white",
                  borderRadius: 28,
                  px: 3,
                  py: 1,
                  "&:hover": {
                    bgcolor: "#333",
                  },
                }}
              >
                APPLY
              </Button>
            </Box>
          </Container>
        </Dialog>
      )}
    </>
  );
};

export default Filters;
