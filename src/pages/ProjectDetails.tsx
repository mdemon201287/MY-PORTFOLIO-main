// src/pages/ProjectDetails.tsx
import React from 'react';
import { useParams } from 'react-router-dom';
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

const ProjectDetails: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const project = projects.find((p) => p.id === Number(id));

    if (!project) {
        return <div>Project not found</div>;
    }

    return (
        <div className="container mx-auto p-4">
            <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
                <img className="w-full" src={project.imageUrl} alt={project.title} />
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{project.title}</div>
                    <p className="text-gray-700 text-base">{project.description}</p>
                </div>
                <div className="px-6 pt-4 pb-2">
                    <a
                        href={project.projectUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    >
                        View Project
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetails;
