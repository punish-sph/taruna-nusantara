import React from "react";
import LandingLayouts from "@/Layouts/LandingLayouts";

export default function RegistrationPage() {
    return (
        <div>
            <h1 className="text-2xl font-bold">regis</h1>
            <p>Selamat datang!</p>
        </div>
    );
}
RegistrationPage.layout = (page) => <LandingLayouts children={page} />;
