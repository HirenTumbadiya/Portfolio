import React from 'react';

interface Project {
  id: number;
  name: string;
  image: string;
  detailsUrl: string;
}

const projects: Project[] = [
  {
    id: 1,
    name: 'Project 1',
    image: '/about.png',
    detailsUrl: '/project1',
  },
  {
    id: 2,
    name: 'Project 2',
    image: '/path/to/image2.jpg',
    detailsUrl: '/project2',
  },
  {
    id: 3,
    name: 'Project 3',
    image: '/path/to/image3.jpg',
    detailsUrl: '/project3',
  },
];

const ProjectSection: React.FC = () => {
  return (
    <section className='bg-[#FFC300] px-32 py-12'>
                <h2 className="text-3xl font-bold my-5">Masterpiece Showcase</h2>
      <ul className="space-y-4">
        {projects.map((project) => (
          <li key={project.id} className="flex items-center w-full bg-[#E6B000] rounded-full h-40 px-20">
            <img src={project.image} alt={project.name} className="w-20 h-20 rounded-full" />
            <div className="ml-4 flex-grow">
              <h3 className="text-xl font-semibold">{project.name}</h3>
            </div>
            <a href={project.detailsUrl} className="text-gray-500 animate-pulse">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-6 w-6 animate-bounce"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectSection;
