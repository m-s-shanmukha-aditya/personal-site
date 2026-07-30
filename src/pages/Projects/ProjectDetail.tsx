import { useParams } from "react-router-dom";

import Hero from "../../components/project-detail/Hero";

import { projects } from "../../content/projects";
import type { Project } from "../../content/projects/types";
import Overview from "../../components/project-detail/Overview";
import Approach from "../../components/project-detail/Solution";
import Problem from "../../components/project-detail/Problem";
import Architecture from "../../components/project-detail/Architecture";
import Results from "../../components/project-detail/Results";
import LessonsLearned from "../../components/project-detail/LessonsLearned";
import FutureWork from "../../components/project-detail/FutureWork";
import Resources from "../../components/project-detail/Resources";
import MoreProjects from "../../components/project-detail/MoreProjects";

const ProjectDetail = () => {
    const { slug } = useParams();

    const project = projects.find(
        (project: Project) => project.slug === slug
    );

    if (!project || !project.detail) {
        return (
            <main className="mx-auto max-w-6xl px-6 py-20">
                <h1 className="text-3xl font-bold">Project not found</h1>
            </main>
        );
    }

    return (
        <main>
            <Hero
                project={project}
                details={project.detail}
            />

            <Overview overview={project.overview} />

            <Problem problem={project.detail.problem} />

            <Approach approach={project.detail.solution} />

            <Architecture
                architecture={project.detail.architecture}
                // challenges={project.detail.challenges}
            />

            <Results results={project.detail.results} />

            <LessonsLearned lessonsLearned={project.detail.lessonsLearned} />

            <FutureWork futureWork={project.detail.futureWork} />

            <Resources resources={project.detail.resources} />

            <MoreProjects currentProject={project} />
        </main>
    );
};

export default ProjectDetail;