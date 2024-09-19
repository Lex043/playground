import HomePage from "../components/home-page";
import LanrePreloader from "../components/lanre-preloader";

export default function Home() {
    return (
        <section className="h-screen bg-black">
            <LanrePreloader />
            <HomePage />
        </section>
    );
}
