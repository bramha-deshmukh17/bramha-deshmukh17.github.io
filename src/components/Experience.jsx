import React from 'react';
import { HiDocument } from 'react-icons/hi';
import '../css/Experience.css';


const Experience = () => {
    return (
        <section id="experience" className="py-12 m-5">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8">
                    My Experience
                </h2>

                {/* Internship 1 */}
                <div className="experience-item flex flex-col md:flex-row rounded-lg shadow-lg p-5 mb-6"
                    style={{
                        backgroundColor: "var(--bg-color)",
                        boxShadow: "10px 10px 20px var(--shadow-color)",
                        color: "var(--text-color)"
                    }}
                >
                    {/* Left Section */}
                    <div className="w-full md:w-1/3 flex flex-col justify-center items-start">
                        <h3 className="text-xl font-semibold mb-1" style={{ color: "var(--main-heading)" }}>
                            Technical Intern 
                            <a
                                href="./certificates/Indicus_Internship_certificate.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center pl-2 pt-2"
                                style={{
                                    backgroundColor: "transparent",
                                    boxShadow: "none",
                                    color: "var(--btn-color)"
                                }}
                                title='View Certificate'
                            >
                                <HiDocument className="text-lg" />
                            </a>
                        </h3>
                        <p className="mb-2">
                            Indicus Software Pvt Ltd.
                        </p>
                        <span className="text-sm font-medium">
                            October 2024 - November 2024
                        </span>
                    </div>

                    {/* Right Section */}
                    <div className="w-full md:w-2/3 mt-4 md:mt-0">
                        <ul className="list-disc ml-5 leading-relaxed">
                            <li>Contributed to software development using the company's product, <b>Contineo</b>, an industry-agnostic platform.</li>
                            <li>Worked on distributed data acquisition, analytics, and application enablement using AI X IoT technologies.</li>
                            <li>Developed and integrated AI agents.</li>
                            <li>Participated in building innovative solutions to enhance platform capabilities.</li>
                        </ul>
                        {/* View Certificate Button */}
                        <div className="mt-4">

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
