import { url } from 'inspector';
import React from 'react';

const Projects: React.FC = () => {
  const projectList = [
    {
      title: 'Discord Clone',
      description: 'Developed a Discord clone with real-time messaging using Socket.io and file attachments via UploadThing, supporting text, audio, video channels, and private messaging.',
      technologies: 'MERN Stack, Socket.io, UploadThing, @tanstack/query, TailwindCSS, ShadcnUI, Prisma, Planetscale, Clerk',
      link: '#',
      backgroundImage: 'https://via.placeholder.com/400x300', // Replace with actual background image URL
    },
    {
      title: 'Task Master',
      description: 'Built a task manager app with user authentication, CRUD operations, and validations.',
      technologies: 'MERN Stack, Redux, Tailwind CSS',
      link: '#',
      backgroundImage: 'https://via.placeholder.com/400x300', // Replace with actual background image URL
    },
    {
      title: 'Image Forgery Detection',
      description: 'Trained a CNN to detect image forgery with 96.56% accuracy. Developed a web interface for forgery detection.',
      technologies: 'CNN, HTML, Python',
      link: '#',
      backgroundImage: 'https://via.placeholder.com/400x300', // Replace with actual background image URL
    },
    {
      title: 'Facial Recognition System',
      description: 'Integrated OpenCV with Raspberry Pi for real-time facial recognition.',
      technologies: 'OpenCV, Raspberry Pi',
      link: '#',
      backgroundImage: 'https://via.placeholder.com/400x300', // Replace with actual background image URL
    },
    {
      title: 'Library Management System',
      description: 'Developed a Java-based app for book entry and MySQL storage.',
      technologies: 'Java, MySQL',
      link: '#',
      backgroundImage: 'https://via.placeholder.com/400x300', // Replace with actual background image URL
    },
    {
      title: 'Home Security System',
      description: 'Developed an IoT-based security system using Arduino.',
      technologies: 'IoT, Arduino, C',
      link: '#',
      backgroundImage: 'https://via.placeholder.com/400x300', // Replace with actual background image URL
    },
    // Add more projects here if needed
  ];

  return (
    <section id="projects" className="py-20 bg-gray-800 text-white">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-center">Projects</h2>
        <div className="flex overflow-x-scroll space-x-4 p-4">
          {projectList.map((project, index) => (
            <div key={index} className="bg-gray-700 p-4 rounded-lg shadow-lg min-w-96"
                 style={{ backgroundImage: `url(${project.backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
              {/* <div className="h-16 rounded-md mb-4"></div> Placeholder for background image */}
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-2">
                  <a href={project.link} className="text-white hover:underline">{project.title}</a>
                </h3>
                <p className="text-lg mb-2">{project.description}</p>
                <p className="text-sm mb-4">{project.technologies}</p>
                {/* <a href={project.link} className="text-blue-500 hover:underline">View Project</a> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;


