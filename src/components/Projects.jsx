import { ArrowRight, ExternalLink, Github, Key } from 'lucide-react';
import React from 'react'
import project2 from '../projects/project2.png';
import project3 from '../projects/project3.png';
import project4 from '../projects/project4.png';
import project5 from '../projects/project5.png';
import project1 from '../projects/project1.png';
import project6 from '../projects/project6.png';
import project7 from '../projects/project7.png';


export default function Projects() {

    const projects = [
        {
            id: 1,
            title: "Social Media Website",
            description: "This is a modern social media application built with React.js for the frontend and Firebase for backend services including Firestore Database, Authentication, and Storage. Users can create posts, like/dislike content, and interact in real time with a seamless user experience.",
            image: project2,
            tags: ["React","Firebase"],
            githubUrl: "https://github.com/Tharindu-Theekshana/Firebase-Social-Media-Project"
        },
        {
            id: 2,
            title: "User Management System",
            description: "Full-stack web application that allows administrators to perform Create, Read, Update, and Delete (CRUD) operations on user data.The frontend is built with React.js, while the backend is powered by Spring Boot, exposing RESTful APIs.",
            image: project3,
            tags: ["React","Spring Boot","MySQL"],
            githubUrl: "https://github.com/Tharindu-Theekshana/User-Management-System"
        },
        {
            id: 3,
            title: "User Login System",
            description: "Full-stack web application features a secure user authentication and management system that implements JWT (JSON Web Token) for secure, stateless user sessions and The system supports role-based access, providing separate dashboards for Admin and User roles.",
            image: project4,
            tags: ["React","Spring Boot","MySQL"],
            githubUrl: "https://github.com/Tharindu-Theekshana/User-Login-System"
        },
        {
            id: 4,
            title: "Gym Portal",
            description: "The FitZone Gym Portal is a fully responsive web application designed to manage gym operations and enhance user interaction. Built using PHP for backend logic, HTML/CSS/JavaScript for a dynamic frontend, and MySQL for database management.",
            image: project1,
            tags: ["HTML/CSS","JavaScript","PHP","MySQL"],
            githubUrl: "https://github.com/Tharindu-Theekshana/FitZone-Gym-Portal"
        },
        {
            id: 5,
            title: "Android Booking App",
            description: "This is a native Android application developed in Java, designed for LuxeVista Resort to allow guests to easily browse and book rooms, reserve services, and manage their bookings and Explore resort and Offers.",
            image: project5,
            tags: ["Java","SQLlite"],
            githubUrl: "https://github.com/Tharindu-Theekshana/LuxeVista-Android-BookingApp"
        },
        {
            id: 6,
            title: "E-commerce Website",
            description: "GadgetHub is a responsive e-commerce platform developed using ASP.NET Core, React, and MySQL. It enables users to browse gadgets, request quotations from multiple distributors, and manage orders seamlessly. The system highlights secure authentication, efficient order management, and a scalable architecture for real-world applications.",
            image: project6,
            tags: ["ASP.NET","Reat","MySql"],
            githubUrl: "https://github.com/Tharindu-Theekshana/GadgetHub-ASP.NET-Backend"
        },
        {
            id: 7,
            title: "Event Booking and Management System",
            description: "Evenza is a responsive event management system built with TypeScript + React, Spring Boot, and MySQL. It supports three user roles: customers, organizers, and admins . The platform enhances event handling with features like ticket refunds and a seamless, user-friendly interface across all devices.",
            image: project7,
            tags: ["React","TypeScript","Spring Boot","MySQL"],
            githubUrl: "https://github.com/Tharindu-Theekshana/Evenza-Event-Management-System"
        },
        {
            id: 8,
            title: "Android Booking App",
            description: "This is a native Android application developed in Java, designed for LuxeVista Resort to allow guests to easily browse and book rooms, reserve services, and manage their bookings and Explore resort and Offers.",
            image: project5,
            tags: ["Java","SQLlite"],
            githubUrl: "https://github.com/Tharindu-Theekshana/LuxeVista-Android-BookingApp"
        },
];

  return (
    <section id='projects' className='py-24 px-4 relative'>
        <div className='container mx-auto max-w-5xl'>
            <h2 className='text-3xl md:text-4xl font-bold text-center mb-4'>Featured <span className='text-primary'>Projets</span></h2>
            <p className='text-center text-muted-foreground mb-12 max-w-2xl mx-auto'>
            I have developed a variety of full-stack and mobile applications that showcase my ability to build scalable, responsive, and user-centric solutions. My work spans frontend development with modern JavaScript frameworks, backend API design, secure user authentication, and efficient database integration. I focus on clean architecture, intuitive user interfaces, and practical problem-solving. 
            </p>

            <div className='grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {projects.map((project, key)=> (
                    <div key={key} className='group bg-card rounded-lg overflow-hidden shadow-xs card-hover'>
                        <div className='h-48 overflow-hidden'>
                            <img src={project.image} alt={project.title} className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110'/>
                        </div>

                        <div className='p-6'>
                                <div className='flex flex-wrap gap-2 mb-4 justify-center'>
                                    {project.tags.map((tag)=>(
                                        <span className='px-2 py-1 text-center border text-xs font-medium rounded-full bg-secondary text-secondary-foreground'>{tag}</span>
                                    ))}
                                </div>
                        

                        <h3 className='text-xl font-semibold mb-1'>{project.title}</h3>
                        <p className='text-muted-foreground text-sm mb-4'>{project.description}</p>
                        <div className='flex justify-between items-center'>
                            <div className='flex space-x-3'>
                                <a href={project.githubUrl} target='_blank' className='text-foreground/80 hover:text-primary transition-colors duration-300'><Github/></a>
                            </div>
                        </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className='text-center mt-12 flex flex-col items-center'>
                <a className="cosmic-button w-fit flex items-center max-auto gap-2" href="https://github.com/Tharindu-Theekshana" target='_blank'>Check My Github <ArrowRight size={16}/></a>
            </div>
        </div>

    </section>
  )
}
