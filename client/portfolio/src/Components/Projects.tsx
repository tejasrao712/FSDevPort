// import React from 'react';

// // interface ProjectProps{
// //   project:{
// //     title: string,
// //     description: string,
// //     technologies: string[],
// //     link: string
// //   }
// // } 

// const Projects: React.FC = () => {

//   const projectArray = [
//     {
//       title: "Discord Clone",
//       description: `Developed a Discord clone with real-time messaging using Socket.io and file attachments via UploadThing, 
//       supporting text, audio, video channels, and private messaging. Implemented comprehensive user and server management, 
//       including roles, user removal, server creation, customization, and unique invite links. Ensured optimized performance 
//       with infinite message loading using @tanstack/query and designed a responsive UI with TailwindCSS and ShadcnUI, 
//       supporting light and dark modes. Used Prisma ORM with a Planetscale MySQL database and integrated Clerk for secure 
//       authentication and reliable WebSocket fallback to polling.`,
//       technologies: [
//         "MERN Stack", "Socket.io", "UploadThing", "@tanstack/query",
//         "TailwindCSS", "ShadcnUI", "Prisma", "Planetscale", "Clerk"
//       ],
//       link: "#"
//     },
//     {
//       title: "Task Master",
//       description: `Built a task manager app with user authentication, CRUD operations, and validations. 
//       Used Redux and Tailwind CSS for enhanced UX. Ensured secure authentication, responsive design, and seamless routing.`,
//       technologies: ["MERN Stack", "Redux", "Tailwind CSS"],
//       link: "#"
//     }]
//   return (
    
//     <section >
//       <div id="projects" className="bg-white min-h-screen p-8 mx-auto">
//       <h2 className="text-5xl font-semibold mb-4">Projects</h2>

//       <div className="flex flex-wrap justify-center">

//           {projectArray.map((project, index) => (
//             <div key={index} className="bg-white shadow-md rounded-lg p-4">
//               <h3 className="text-xl font-bold mb-2">{project.title}</h3>
//               <p className="mb-2 whitespace-pre-line">{project.description}</p>
//               <div className="mb-4">
//                 {project.technologies.map((tech, index) => (
//                   <span key={index} className="bg-blue-200 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">
//                     {tech}
//                   </span>
//                 ))}
//               </div>
//               <a href={project.link} className="text-blue-500 hover:underline">View Project</a>
//             </div>
//           ))}

//       </div>
//       </div>
//     </section>
//   );
// };

// export default Projects;


import React from 'react';

const Projects: React.FC = () => {
  const projectList = [
    {
      title: 'Project 1',
      description: 'Description of project 1',
      technologies: 'React, TypeScript',
      link: '#',
      image: 'https://via.placeholder.com/150'
    },
    {
      title: 'Project 2',
      description: 'Description of project 2',
      technologies: 'Node.js, Express',
      link: '#',
      image: 'https://via.placeholder.com/150'
    },
    // Add more projects here
  ];

  return (
    <section id="projects" className="py-20 bg-gray-800 text-white">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-center">Projects</h2>
        <div className="flex overflow-x-scroll space-x-4 p-4">
          {projectList.map((project, index) => (
            <div key={index} className="bg-gray-700 p-4 rounded-lg shadow-lg min-w-64">
              <img src={project.image} alt={project.title} className="w-full h-40 object-cover rounded-md mb-4" />
              <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
              <p className="text-lg mb-2">{project.description}</p>
              <p className="text-sm mb-4">{project.technologies}</p>
              <a href={project.link} className="text-blue-500 hover:underline">View Project</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
