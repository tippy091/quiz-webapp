import BannerSection from "./Components/Sections/BannerSection/BannerSection";
import "./App.css";
import FeaturedAppSection from "./Components/Sections/FeaturedAppSection/FeaturedAppSection";
import SmallBannerSection from "./Components/Sections/SmallBannerSection/SmallBannerSection";
import CustomerStory from "./Components/Sections/CustomerStory/CustomerStory";
import InformationSection from "./Components/Sections/InformationSection/InformationSection";
import ApplicationRecommendation from "./Components/Sections/ApplicationRecommandation/ApplicationRecommendation";
function App() {
  return (
    <div className="App">
      {/* Banner Slide Show - Carousel */}
      <BannerSection />
      <SmallBannerSection />
      <FeaturedAppSection />
      <CustomerStory />
      <InformationSection />
      <ApplicationRecommendation />
    </div>
  );
}

export default App;
