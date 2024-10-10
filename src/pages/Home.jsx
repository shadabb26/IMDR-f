import DirectorInfo from "../components/DirectorInfo";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import MajorRecruiters from "../components/MajorRecruiter";
import PlacementTeam from "../components/PlacementTeam";
import RecruitmentProcess from "../components/RecruitmentProcess";
import TPOInfo from "../components/TPOInfo";
import WhyIMDR from "../components/WhyIMDR";

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
