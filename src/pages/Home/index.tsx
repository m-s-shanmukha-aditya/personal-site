import Hero from "./sections/Hero";
import FeaturedProjects from "./sections/FeaturedProjects";
import Thesis from "./sections/Thesis";
import AreasOfExploration from "./sections/AreasOfExploration";
import ContinueExploring from "./sections/ContinueExploring";

export default function Home() {
    return (
        <>
            <Hero />
            <Thesis />
            <FeaturedProjects />
            <AreasOfExploration />
            <ContinueExploring />
        </>
    );
}