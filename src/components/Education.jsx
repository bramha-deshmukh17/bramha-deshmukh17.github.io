import SpotlightCard from './Animate/SpotlightCard';

const Education = () => {
    const educationDetails = [
        {
            level: "Postgraduate (PG)",
            institution: "MES's IMCC, Pune",
            year: "2023 - 2025",
            course: "Master of Computer Application",
            score: "7.98 CGPA",
        },
        {
            level: "Undergraduate (UG)",
            institution: "MGM's College of CS & IT, Nanded",
            year: "2020 - 2023",
            course: "Bachelor of Science (Computer Science)",
            score: "9.22 CGPA",
        },
        {
            level: "12th",
            institution: "Yashwant Junior College, Nanded",
            year: "2020",
            course: "Science (Maths)",
            score: "69.85%",
        },
        {
            level: "10th",
            institution: "Savitribai Phule High Schools, Nanded",
            year: "2018",
            score: "89.20%",
        },
    ];

    return (
        <section id="education" className="py-12 m-5">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {educationDetails.map((education, index) => (


                        <div
                            key={index}
                            className="rounded-lg shadow-md flex flex-col"
                            style={{
                                backgroundColor: "var(--bg-color)",
                                boxShadow: "5px 5px 15px var(--shadow-color)",
                                color: "var(--text-color)",
                                height: "220px",
                            }}
                        >
                            <SpotlightCard className="card shadow-card" spotlightColor="rgba(0, 229, 255, 0.2)">
                                <div className="flex items-center justify-center mb-4">
                                    <h3
                                        className="text-lg font-semibold"
                                        style={{ color: "var(--main-heading)" }}
                                    >
                                        {education.level}
                                    </h3>
                                    {education.status === "Pursuing" && (
                                        <span className="ml-2 px-2 py-1 text-xs font-semibold text-white bg-red-400 rounded-full">
                                            Pursuing
                                        </span>
                                    )}
                                </div>
                                <div className="flex flex-col gap-2 text-left">
                                    <p className="text-sm">
                                        <b>Institution:</b> {education.institution}
                                    </p>
                                    <p className="text-sm">
                                        <b>Year:</b> {education.year}
                                    </p>
                                    {education.course && (
                                        <p className="text-sm">
                                            <b>Course:</b> {education.course}
                                        </p>
                                    )}
                                    <p className="text-sm">
                                        <b>Score:</b> {education.score}
                                    </p>
                                </div>
                            </SpotlightCard>
                        </div>

                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
