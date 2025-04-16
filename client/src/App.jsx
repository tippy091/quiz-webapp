import BannerSection from "./Components/Sections/BannerSection/BannerSection";
import CategorySection from "./Components/Sections/CategorySection/CategorySection";
import Footer from "./Components/Footer/Footer";
import AnnouncementSection from "./Components/Sections/AnnouncementSection/AnnouncementSection";

import content from "../src/Data/content.json";
function App() {
  return (
    // <main className="container">
    //   <Router>
    //     <Navbar />
    //     <Routes>
    //       <Route path="/" element={<Home />} />
    //       <Route path="/quiz-stepper" element={<QuizStepper />} />
    //       <Route path="/take-quiz" element={<Quiz />} />
    //       <Route path="/admin" element={<Admin />} />

    //       <Route path="/create-quiz" element={<AddQuestion />} />
    //       <Route path="/update-quiz/:id" element={<UpdateQuestion />} />
    //       <Route path="/all-quizzes" element={<GetAllQuiz />} />
    //       <Route path="/quiz-result" element={<QuizResult />} />
    //     </Routes>
    //   </Router>
    //   <Footer />
    // </main>

    <div className="container">
      {/* Banner Slide Show - Carousel */}
      <BannerSection />
      {/* Course Categories (Available) */}
      <CategorySection />
      {/* Annoucements */}
      <AnnouncementSection />
      {/*Footer*/}
      <Footer content={content?.footer} />
    </div>
  );
}

export default App;
