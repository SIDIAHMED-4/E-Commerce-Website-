import { ITEMS } from '../Common/functions/items'
import FlashSalesSection from "../Sections/FlashSalesSection";
import BestSellingSection from "../Sections/BestSellingSection";
import NewArrivalSection from "../Sections/NewArrivalSection";
import Services from "../Sections/Services";
import OurProductsSection from "../Sections/OurProductsSection";
import BrowseByCategorySection from "../Sections/BrowseByCategorySection";
import HeroSection from "../Sections/HeroSection";

const Home = () => {
  return (
    <>
      {/* Main Hero Banner */}
      <HeroSection />

      {/* Flash Sale */}
      <FlashSalesSection />

      {/* Categories */}
      <BrowseByCategorySection />

      {/* Best Selling Products */}
      <BestSellingSection items={ITEMS} />

      {/* General Products */}
      <OurProductsSection items={ITEMS} />

      {/* New Arrivals */}
      <NewArrivalSection />

      {/* Services Section */}
      <Services />
    </>
  );
};

export default Home;
