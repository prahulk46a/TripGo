import { Box } from "@mui/material";

// import CampCard from "../../components/Cards/Card1";
import Hero from "../../components/hero/Hero";
import NordicSection from "../../components/Suggestion/NordiacSea/NordiacSeaPromo";
import TravelGrid from "../../components/Suggestion/SpotLight/SpotLight";

const Home = () => {
  return (
    <>
      <Hero />
      <TravelGrid />
      <NordicSection />
    </>
  );
};

export default Home;
