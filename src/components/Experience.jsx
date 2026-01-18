
const Experience = () => {
    return (
        <section id="experience" className="py-12 m-5">
            <div className="container mx-auto px-4">

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
                        <div className="flex items-center gap-2 mb-1">
                            <h3 className="text-xl font-semibold" style={{ color: "var(--main-heading)" }}>
                                Technical Intern
                            </h3>
                            <a
                                href="./certificates/Indicus_Internship_certificate.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center"
                                style={{
                                    backgroundColor: "#1a1a1a",
                                    boxShadow: "none",
                                    color: "var(--btn-color)",
                                    borderRadius: "8px",
                                    padding: "5px 3px 5px 5px",
                                }}
                                title='View Certificate'
                            >
                                <lord-icon
                                    src="https://cdn.lordicon.com/fjvfsqea.json"
                                    trigger="hover"
                                    colors="primary:#e4e4e4,secondary:#3b82f6"
                                    style={{ width: '25px', height: '25px', backgroundColor: 'transparent' }}
                                />
                            </a>
                        </div>
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
