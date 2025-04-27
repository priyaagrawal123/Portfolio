import React from 'react';

const About = () => {
    return (
        <div className="w-full py-3 px-2 sm:py-4 sm:px-4 md:px-7">
            <div className="max-w-4xl mx-auto bg-gray-800 bg-opacity-90 rounded-xl shadow-xl overflow-hidden">
                <div className="bg-gradient-to-r from-green-600 to-green-800  text-center">
                    <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">About Me</h1>
                    <p className="text-green-200 text-xs sm:text-sm mt-1">Skills, Education & Interests</p>
                </div>

                <div className="p-3 sm:p-4 md:p-6 space-y-4 sm:space-y-6">
                    <section className="bg-gray-700 bg-opacity-50 rounded-lg p-3 sm:p-4 shadow-md">
                        <div className="flex items-center mb-3 sm:mb-4">
                            <div className="h-6 sm:h-8 w-1 bg-green-500 rounded-full mr-2 sm:mr-3"></div>
                            <h2 className="text-lg sm:text-xl font-bold text-green-400">Skills</h2>
                        </div>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 sm:gap-3">
                            {['ReactJS', 'JavaScript', 'HTML & CSS', 'TailwindCSS', 'Vite.js', 'NodeJS', 'ExpressJs', 'Data Structures', 'Java', "AWS-S3", "GCS"].map((skill) => (
                                <div key={skill} className="flex items-center bg-gray-600 bg-opacity-50 rounded px-2 sm:px-3 py-1 sm:py-2">
                                    <span className="h-1.5 w-1.5 sm:h-2 sm:w-2 bg-green-500 rounded-full mr-1 sm:mr-2"></span>
                                    <span className="text-white text-xs sm:text-sm">{skill}</span>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section className="bg-gray-700 bg-opacity-50 rounded-lg p-3 sm:p-4 shadow-md">
                        <div className="flex items-center mb-3 sm:mb-4">
                            <div className="h-6 sm:h-8 w-1 bg-green-500 rounded-full mr-2 sm:mr-3"></div>
                            <h2 className="text-lg sm:text-xl font-bold text-green-400">Education</h2>
                        </div>
                        <div className="space-y-2 sm:space-y-3">
                            {[
                                "BSc (Computer Science): Barwale College, Jalna",
                                "MSc (Scientific Computing): SPPU, Pune"
                            ].map((edu, index) => (
                                <div key={index} className="flex items-start">
                                    <div className="flex-shrink-0 h-3 w-3 sm:h-4 sm:w-4 bg-green-500 rounded-full mt-0.5 sm:mt-1 mr-1 sm:mr-2"></div>
                                    <p className="text-gray-200 text-xs sm:text-sm">{edu}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section className="bg-gray-700 bg-opacity-50 rounded-lg p-3 sm:p-4 shadow-md">
                        <div className="flex items-center mb-3 sm:mb-4">
                            <div className="h-6 sm:h-8 w-1 bg-green-500 rounded-full mr-2 sm:mr-3"></div>
                            <h2 className="text-lg sm:text-xl font-bold text-green-400">Hobbies</h2>
                        </div>
                        <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-5 gap-1.5 sm:gap-2">
                            {['Designing', 'Sketching', 'Dance', 'Baking', 'Management'].map((hobby) => (
                                <div key={hobby} className="bg-green-600 bg-opacity-20 hover:bg-opacity-30 transition-all duration-300 rounded px-1.5 sm:px-2 py-0.5 sm:py-1 text-center">
                                    <p className="text-white text-xs sm:text-sm font-medium">{hobby}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default About;