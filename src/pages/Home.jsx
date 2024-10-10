import DirectorInfo from "../components/Home/DirectorInfo";
import Footer from "../components/Home/Footer";
import Header from "../components/Home/Header";
import HeroSection from "../components/Home/HeroSection";
import MajorRecruiters from "../components/Home/MajorRecruiter";
import PlacementTeam from "../components/Home/PlacementTeam";
import RecruitmentProcess from "../components/Home/RecruitmentProcess";
import TPOInfo from "../components/Home/TPOInfo";
import WhyIMDR from "../components/Home/WhyIMDR";

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <HeroSection />
        <WhyIMDR />
        <MajorRecruiters />
        <RecruitmentProcess />
        <DirectorInfo />
        <PlacementTeam />
        <TPOInfo />
      </main>
      <Footer />
    </div>
  );
}
