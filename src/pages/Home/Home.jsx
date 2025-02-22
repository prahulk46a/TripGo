import { Box } from "@mui/material";

// import CampCard from "../../components/Cards/Card1";
import Hero from "../../components/hero/Hero";
import TravelGrid from "../../components/Suggestion/SpotLight/SpotLight";

const Home = () => {
  return (
    <>
      <Hero />
      <TravelGrid />
      <Box sx={{ display: { md: "flex" }, gap: 2 }}></Box>
    </>
  );
};

export default Home;
