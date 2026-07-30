import {quokka} from "./quokka";
import temporalStateEngine from "./temporal-state-engine";
import {spacecraftTelemetry} from "./spacecraft-anomaly-detection";
import {routr} from "./url-shortener";
import doodleRush from "./doodle-rush";
import {teluguCommunityPlatform} from "./cuj-telugu";

export const projects = [
    quokka,
    temporalStateEngine,
    spacecraftTelemetry,
    routr,
    doodleRush,
    teluguCommunityPlatform,
];
export const featuredProjects = projects.filter(
    project => project.featured
);