import React from "react";
import LandingLayouts from "@/Layouts/LandingLayouts";

export default function AboutPage() {
    return (
        <div>
            <h1 className="text-2xl font-bold">AboutPage</h1>
            <p>Selamat datang!</p>
        </div>
    );
}
AboutPage.layout = (page) => <LandingLayouts children={page} />;
