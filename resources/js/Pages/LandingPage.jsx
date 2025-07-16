import LandingLayouts from "@/Components/templates/LandingLayout";
import SchoolProfileSection from "../Components/organisms/Landing/SchoolProfile";
import NewsSection from "../Components/organisms/Landing/NewsSection";
import AchievementsSection from "../Components/organisms/Landing/AchievementsSection";
import HeroSection from "../Components/organisms/Landing/HeroSection";
import StatsSection from "../Components/organisms/Landing/StatsSection";

export default function LandingPage() {
    return (
        <div className="space-y-10">
            <HeroSection/>

            <div className="px-4 md:px-8 space-y-16 lg:space-y-18 pb-13">
                <StatsSection/>
                <SchoolProfileSection/>
                <NewsSection/>
                <AchievementsSection/>
            </div>
        </div>
    );
}

LandingPage.layout = (page) => <LandingLayouts children={page} />;