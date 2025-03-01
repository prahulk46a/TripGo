import { Box, Pagination } from "@mui/material";

import heroImg from "../../assets/cateBg.png";
import FilterContainer from "../../components/Filters/FiltersContainer";
import Hero from "../../components/hero/Hero";
import ProductSuggestion from "../../components/Suggestion/ProductSuggestion/ProductSuggestion";

const Productlist = () => {
  return (
    <>
      <Hero image={heroImg} text={"Discover the unknown in every adventure"} />
      <FilterContainer />
      <ProductSuggestion />
      <Box
        sx={{
          display: "flex",
          justifyContent: "left",
          marginLeft: "100px",
          marginBottom: "20px",
        }}
      >
        <Pagination count={10} color="primary" />
      </Box>
    </>
  );
};

export default Productlist;
