import { quokka } from "./quokka";
import { spacecraftTelemetry } from "./spacecraft-anomaly-detection";
import { routr } from "./url-shortener";
import { teluguCommunityPlatform } from "./cuj-telugu";
import troubleshooter from "./troubleshooter";

export const projects = [
    routr,
    teluguCommunityPlatform,
    troubleshooter,
    spacecraftTelemetry,
    quokka,
];
export const featuredProjects = projects.filter(
    project => project.featured
);