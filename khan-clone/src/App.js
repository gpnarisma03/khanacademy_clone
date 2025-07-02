import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import CoursesSection from "./components/CoursesSection";
import AboutSection from "./components/AboutSection";
import TeachersSection from "./components/TeacherSection";
import LearnersSection from "./components/LearnersSection";
import TestimonialSection from "./components/TestimonialsSection";
import DonateSection from "./components/DonateSection";
import JoinCTASection from "./components/JointCTASection";
import KeySupportersSection from "./components/KeySupportersSection";
import FooterSection from "./components/FooterSection";

function App() {
  return (
    <>
      <Header />
      <main className="main-content">
        <HeroSection />
        <CoursesSection />
        <AboutSection />
        <TeachersSection />
        <LearnersSection />
        <TestimonialSection />
        <DonateSection />
        <JoinCTASection />
        <KeySupportersSection />
      </main>
      <FooterSection />
    </>
  );
}

export default App;
