import React from 'react';
import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";
import image3 from "../assets/hotelm.png";
import image4 from "../assets/landingpage.png";
const projects = [
    {
        id: 1,
        title: "E-localhood: Your Business Our Priority",
        description: "E-Localhood is an e-commerce website containing seller, customer, service provider, and the main motive of this is to give small business owners a platform to grow their business.",
        technology: "Technology: ReactJs, JavaScript, HTML, CSS, Figma, Axios",
        image: image1,
        github: "https://github.com/priyaagrawal123/eLocalhood-MyProject"
    },
    {
        id: 2,
        title: "Devfolio",
        description: "Devfolio is a developer portfolio website built with modern web technologies.",
        technology: "Technology: ReactJs, JavaScript, Vite.js, Tailwind CSS, HTML, CSS",
        image: image2,
        github: "https://github.com/priyaagrawal123"
    },
    {
        id: 3,
        title: "Hotel Management System",
        description: "It is A Hotel Management System, in which Users can Book hotel rooms according to their choice, Login & Signup pages, User Profile functionality to view Draft bookings & Confirmed bookings. Admin login and Admin Profile Functionality are also included.",
        technology: "Technology: ReactJs, JavaScript, Tailwind CSS, HTML, NodeJS",
        image: image3,
        github: "https://github.com/priyaagrawal123/priyaPortfolio"
    },
    {
        id: 4,
        title: "Landing Page",
        description: "It is a Landing page for a Bakery, containing basic details about a Homebaker.",
        technology: "Technology: ReactJs, JavaScript, Tailwind CSS, HTML, NodeJS",
        image: image4,
        github: "https://github.com/priyaagrawal123/My-Landing-Page",
        Hoistinglink: "https://my-landing-page-taupe.vercel.app/"
    },
];

function Project() {
    return (
        <div className="min-h-screen bg-slate-900 p-5">
            <div className="flex justify-center w-full">
                <h1 className="text-white text-3xl md:text-5xl font-semibold p-7">Projects</h1>
            </div>
            <div className="mt-2 space-y-10">
                {projects.map((project) => (
                    <div
                        className="flex flex-col items-center md:flex-row md:items-start md:space-x-10 p-5 bg-gray-800 rounded-lg shadow-md"
                        key={project.id}
                    >
                        <img
                            className="w-full md:w-4/6 h-auto rounded-lg"
                            src={project.image}
                            alt={project.title}
                        />
                        <div className="text-white text-lg md:text-xl mt-5 md:mt-0 flex flex-col justify-center space-y-4 md:space-y-6 md:pl-10">
                            <h1 className="font-semibold text-2xl text-center md:text-left">{project.title}</h1>
                            <p className="text-center md:text-left">{project.description}</p>
                            <p className="font-medium text-center md:text-left">{project.technology}</p>
                            <div className="space-x-4 text-center md:text-left">
                                {project.github && (
                                    <a
                                        className="text-blue-400 hover:text-blue-500 underline"
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        GitHub
                                    </a>
                                )}
                                {project.Hoistinglink && (
                                    <a
                                        className="text-blue-400 hover:text-blue-500 underline"
                                        href={project.Hoistinglink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Live Demo
                                    </a>
                                )}
                            </div>
                        </div>

                    </div>
                ))}
            </div>
        </div>
    );
}

export default Project;
