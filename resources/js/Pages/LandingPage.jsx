import LandingLayouts from "@/Components/templates/LandingLayout";
import SchoolProfileSection from "../Components/organisms/Landing/SchoolProfile";
import NewsSection from "../Components/organisms/Landing/NewsSection";
import AchievementsSection from "../Components/organisms/Landing/AchievementsSection";
import HeroSection from "../Components/organisms/Landing/HeroSection";

export default function LandingPage() {
    return (
        <div className="space-y-10">
            {/* Hero Section */}
            <HeroSection/>

            <div className="px-4 md:px-8 space-y-16 md:space-y-24 pb-16">
                <SchoolProfileSection/>
                <NewsSection/>
                <AchievementsSection/>
            </div>
        </div>
    );
}

LandingPage.layout = (page) => <LandingLayouts children={page} />;