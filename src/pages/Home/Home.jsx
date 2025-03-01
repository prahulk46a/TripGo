// import CampCard from "../../components/Cards/Card1";
import heroImg from "../../assets/image.png";
import Hero from "../../components/hero/Hero";
import SocialSection from "../../components/SocialSection/SocialSection";
import NordicSection from "../../components/Suggestion/NordiacSea/NordiacSeaPromo";
import ProductSuggestion from "../../components/Suggestion/ProductSuggestion/ProductSuggestion";
import TravelGrid from "../../components/Suggestion/SpotLight/SpotLight";
const Home = () => {
  return (
    <>
      <Hero image={heroImg} text="Gear up for Great Outdoors®" />
      <TravelGrid />
      <NordicSection />
      <ProductSuggestion />
      <SocialSection />
    </>
  );
};

export default Home;
