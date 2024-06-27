// src/pages/Projects.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import ProjectCard from '../components/ProjectCard';
import project1Image from '../assets/project1.png';
import project2Image from '../assets/project2.png';

const projects = [
    {
        id: 1,
        title: 'Project One',
        description: 'Fetching data just like Google Keep Clone Site.',
        imageUrl: project1Image,
        projectUrl: 'https://github.com/mdemon201287/GOOGLE-KEEP-CLONE',
    },
    {
        id: 2,
        title: 'Project Two',
        description: 'Fetching data from fake api store.',
        imageUrl: project2Image,
        projectUrl: 'https://github.com/mdemon201287/my-react-ts-project',
    },
    // Add more projects as needed
];

const Projects: React.FC = () => {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">My Projects</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {projects.map((project) => (
                    <Link key={project.id} to={`/projects/${project.id}`}>
                        <ProjectCard
                            title={project.title}
                            description={project.description}
                            imageUrl={project.imageUrl}
                            projectUrl={project.projectUrl}
                        />
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Projects;
