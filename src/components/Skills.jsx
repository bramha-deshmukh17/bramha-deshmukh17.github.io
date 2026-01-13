import SpotlightCard from './Animate/SpotlightCard';
import {
    FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJsSquare,
    FaPython, FaJava, FaPhp, FaGit
} from 'react-icons/fa';
import {
    SiTailwindcss, SiFlutter, SiExpress, SiDjango, SiMongodb,
    SiMysql, SiPostgresql, SiPostman,
    SiSocketdotio, SiFirebase, SiBootstrap, SiDart
} from 'react-icons/si';

const Skills = () => {
    const skills = [
        { name: "React", icon: <FaReact className="text-blue-500 text-3xl" /> },
        { name: "Node.js", icon: <FaNodeJs className="text-green-600 text-3xl" /> },
        { name: "Express.js", icon: <SiExpress className="text-3xl" /> },
        { name: "Java", icon: <FaJava className="text-red-600 text-3xl" /> },
        { name: "PHP", icon: <FaPhp className="text-purple-600 text-3xl" /> },
        { name: "Python", icon: <FaPython className="text-blue-400 text-3xl" /> },
        { name: "Django", icon: <SiDjango className="text-green-700 text-3xl" /> },
        { name: "Flutter", icon: <SiFlutter className="text-cyan-500 text-3xl" /> },
        { name: "Dart", icon: <SiDart className="text-blue-600 text-3xl" /> },
        { name: "HTML5", icon: <FaHtml5 className="text-orange-500 text-3xl" /> },
        { name: "CSS3", icon: <FaCss3Alt className="text-blue-500 text-3xl" /> },
        { name: "JavaScript", icon: <FaJsSquare className="text-yellow-500 text-3xl" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400 text-3xl" /> },
        { name: "Bootstrap", icon: <SiBootstrap className="text-indigo-600 text-3xl" /> },
        { name: "MongoDB", icon: <SiMongodb className="text-green-500 text-3xl" /> },
        { name: "MySQL", icon: <SiMysql className="text-blue-500 text-3xl" /> },
        { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-700 text-3xl" /> },
        { name: "Firebase", icon: <SiFirebase className="text-yellow-400 text-3xl" /> },
        { name: "Socket.io", icon: <SiSocketdotio className="text-3xl" /> },
        { name: "Git", icon: <FaGit className="text-orange-500 text-3xl" /> },
        {
            name: "GitHub", icon: <lord-icon
                src="https://cdn.lordicon.com/lllcnxva.json"
                trigger="hover"
                colors="primary:#121331,secondary:#ebe6ef,tertiary:#000000"
                style={{ width: '45px', height: '45px' }}
            />
        },
        { name: "Postman", icon: <SiPostman className="text-orange-600 text-3xl" /> },
    ];

    return (
        <section id="skills" className="py-12 m-5">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {skills.map((skill, index) => (
                        <div
                            key={index}
                            className="rounded-lg shadow-md flex flex-col"
                            style={{
                                backgroundColor: "var(--bg-color)",
                                boxShadow: "5px 5px 15px var(--shadow-color)",
                                color: "var(--text-color)",
                                height: "140px"
                            }}
                        >
                            <SpotlightCard className="card shadow-card" spotlightColor="rgba(0, 229, 255, 0.2)" padding="none">
                                <div className="flex justify-center items-center mb-4 h-16">
                                    {skill.icon}
                                </div>
                                <h3 className="text-lg text-center font-semibold" style={{ color: "var(--main-heading)" }}>
                                    {skill.name}
                                </h3>
                            </SpotlightCard>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
