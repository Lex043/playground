import React from "react";
import LanrePreloader from "./components/lanre-preloader";
import HomePage from "./components/home-page";

export default function Home() {
    return (
        <section className="h-screen bg-black">
            <LanrePreloader />
            <HomePage />
        </section>
    );
}
