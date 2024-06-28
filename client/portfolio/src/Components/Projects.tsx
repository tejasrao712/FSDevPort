import React from 'react';
import DiscordClone from '../media/jpg/Discord-Clone.png'
import TaskMaster from '../media/jpg/TaskMaster2.png'
import FaceRecognition from '../media/jpg/FaceRecognition.jpg'
import HomeSecurity from '../media/jpg/Homesecurity.jpg'
import LibraryMSysytem from '../media/jpg/lms1.png'
import ImageForgery from '../media/jpg/imageforgery.jpg'


const Projects: React.FC = () => {
  const projectList = [
    {
      title: 'Discord Clone',
      description: 'Developed a Discord clone with real-time messaging using Socket.io and file attachments via UploadThing, supporting text, audio, video channels, and private messaging.',
      technologies: 'MERN Stack, Socket.io, UploadThing, @tanstack/query, TailwindCSS, ShadcnUI, Prisma, Planetscale, Clerk',
      link: '#',
      backgroundImage: DiscordClone, 
    },
    {
      title: 'Task Master',
      description: 'Built a task manager app with user authentication, CRUD operations, and validations.',
      technologies: 'MERN Stack, Redux, Tailwind CSS',
      link: '#',
      backgroundImage: TaskMaster, 
    },
    {
      title: 'Image Forgery Detection',
      description: 'Trained a CNN to detect image forgery with 96.56% accuracy. Developed a web interface for forgery detection.',
      technologies: 'CNN, HTML, Python',
      link: '#',
      backgroundImage: ImageForgery,
    },
    {
      title: 'Facial Recognition System',
      description: 'Integrated OpenCV with Raspberry Pi for real-time facial recognition.',
      technologies: 'OpenCV, Raspberry Pi',
      link: '#',
      backgroundImage: FaceRecognition,
    },
    {
      title: 'Library Management System',
      description: 'Developed a Java-based app for book entry and MySQL storage.',
      technologies: 'Java, MySQL',
      link: '#',
      backgroundImage: LibraryMSysytem,
    },
    {
      title: 'Home Security System',
      description: 'Developed an IoT-based security system using Arduino.',
      technologies: 'IoT, Arduino, C',
      link: '#',
      backgroundImage: HomeSecurity
    },
  ];

  return (
    <section id="projects" className="py-20 bg-zinc-800 px-8 text-black">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-center text-white">PROJECTS</h2>
        <div className="flex overflow-x-scroll scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 space-x-4 p-4">
          {projectList.map((project, index) => (
            <div key={index} className="bg-gray-700 p-4 rounded-lg shadow-lg min-w-96"
                 style={{ backgroundImage: `url(${project.backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
              {/* <div className="h-16 rounded-md mb-4"></div> Placeholder for background image */}
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-2">
                  <a href={project.link} className="text-black hover:underline">{project.title}</a>
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


