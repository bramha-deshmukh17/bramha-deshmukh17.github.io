import '../css/Projects.css';
import ShinyText from './Animate/ShinyText';
import SpotlightCard from './Animate/SpotlightCard';

// Small pulsing red dot shown on live projects
const LiveDot = () => (
    <span className="absolute top-2 right-2 z-20 group ">
        {/* Dot */}
        <span className="inline-block w-3 h-3 rounded-full bg-red-500 animate-pulse ring-2 ring-red-400/40" />

        {/* Tooltip (shows on hover) */}
        <span
            className="
                pointer-events-none absolute top-full mt-2 right-0
                whitespace-nowrap rounded-md bg-black px-2 py-1
                text-xs text-white opacity-0 transition-opacity
                group-hover:opacity-100
            "
            role="tooltip"
        >
            Live
        </span>
    </span>
);

const withBase = (p) => `${import.meta.env.BASE_URL}${p.replace(/^\/+/, '')}`;

const fullstackProjects = [
    {
        title: 'Flash Chat',
        description: 'a chatting app',
        img: withBase('projects/flash_chat.png'),
        alt: 'Flash Chat',
        tech: 'MERN',
        imgClass: 'h-16/9',
        features: [
            'It provide cloud support of MongoDB Atlas to store the user chats.',
            'Also uses web socket to have a realtime communication.',
            'Allows files and media sharing.',
        ],
        liveUrl: 'https://flashchat.bramhadeshmukh.me/',
    },
    {
        title: 'Rupee Diary',
        description: 'an expense tracker app',
        img: withBase('projects/rupee_diary.png'),
        alt: 'Rupee Diary',
        tech: 'Flutter',
        imgClass: 'h-16/9',
        features: [
            'Quick daily expense & income entries',
            'Category-wise spending overview',
            'Offline-data stored on your device',
            'Simple reports for better tracking',
            'Privacy- focused with no data sharing',
            'Get your transactions in CSV format',
            'Set reminder for your bill payments',
        ],
        liveUrl: 'https://play.google.com/store/apps/details?id=com.bramhaslab.rupeediary',
    },
    {
        title: 'Smart RTO',
        description: 'a RTO mobile app',
        img: withBase('projects/rto.jpg'),
        alt: 'Smart RTO',
        tech: 'Flutter',
        imgClass: 'h-full',
        features: [
            'The Smart RTO is designed to streamline the operations of RTO in India. It aims to provide a user-friendly platform for citizens to access various RTO services online.',
            'Management of user queries regarding licenses and vehicle fines.',
            'Integration with payment gateways for fine payments.',
        ],
        repoUrl: 'https://github.com/bramha-deshmukh17/SmartRTO',
    },
    {
        title: 'TourGuide',
        description: 'a guide booking website',
        img: withBase('projects/tourguide.png'),
        alt: 'TourGuide',
        tech: 'Django',
        imgClass: 'h-16/9',
        features: ['The TourGuide aims to provide a comprehensive platform for tourists to book guides and explore tourist places, restaurants, and hotels.'],
        repoUrl: 'https://github.com/bramha-deshmukh17/tourguide',
    },
    {
        title: 'EduMate',
        description: 'an e-learning website',
        img: withBase('projects/edumate.png'),
        alt: 'EduMate',
        tech: 'PHP',
        imgClass: 'h-16/9',
        features: ['With its 3 distinct modules - Student Module, Admin Module, Discussion Forum - the platform provides a comprehensive and user-friendly environment for effective learning, efficient course management, and engaging discussions.'],
        repoUrl: 'https://github.com/bramha-deshmukh17/edumate',
    },
];

const otherProjects = [
    {
        title: 'Calculator',
        description: 'a web app',
        img: withBase('projects/calculator.png'),
        alt: 'Calculator',
        tech: 'HTML CSS JavaScript',
        imgClass: 'h-16/9',
        features: ['A simple calculator web app that performs basic arithmetic operations like addition, subtraction, division and multiplication.'],
        liveUrl: 'https://calculator.bramhadeshmukh.me/',
    },
];

const ProjectCard = ({ p }) => {
    const isLive = Boolean(p.liveUrl);

    return (
        <div className="flip-card" key={p.title}>
            <div className="flip-card-inner rounded-lg">
                <div className="flip-card-front rounded-lg">
                    {isLive && <LiveDot />}
                    <img
                        src={p.img}
                        alt={p.alt}
                        className={`w-full ${p.imgClass ?? 'h-16/9'} object-fit rounded-lg`}
                    />
                    <h2 className="project-title absolute bottom-0 left-0 w-full text-xl font-bold py-2 text-center rounded-b-lg">
                        {p.title}
                    </h2>
                </div>

                <div className="flip-card-back rounded-lg text-left">
                    <SpotlightCard className="card" spotlightColor="rgba(0, 229, 255, 0.2)">
                        <p>
                            {isLive && (
                                <span>
                                    <LiveDot />
                                    <br />
                                </span>
                            )}

                            <b>
                                <ShinyText text={p.tech} speed={1} className="code" /><br />
                                {p.title} is {p.description ?? 'a project'} built using {p.tech}

                            </b>
                            <br />

                            {p.features?.map((line, i) => (
                                <span key={`${p.title}-feature-${i}`}>
                                    {line}
                                    <br />
                                </span>
                            ))}
                        </p>

                        {p.liveUrl ? (
                            <div className="flex flex-col items-center mt-1">
                                <a
                                    href={p.liveUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-2"
                                >
                                    Live Demo
                                </a>
                            </div>
                        ) : (
                            <div className="flex justify-center mt-1">
                                <lord-icon
                                    src="https://cdn.lordicon.com/lllcnxva.json"
                                    trigger="hover"
                                    colors="primary:#121331,secondary:#ebe6ef,tertiary:#000000"
                                    style={{ width: '45px', height: '45px' }}
                                />
                                {p.repoUrl && (
                                    <a
                                        href={p.repoUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="ml-2 mt-3"
                                    >
                                        View
                                    </a>
                                )}
                            </div>
                        )}
                    </SpotlightCard>
                </div>
            </div>
        </div>
    );
};

const ProjectSection = ({ title, projects }) => (
    <section className="w-full max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">{title}</h2>

        <div className="place-items-center m-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((p) => (
                <ProjectCard key={p.title} p={p} />
            ))}
        </div>
    </section>
);

const Projects = () => {
    return (
        <section id="projects" className="m-5 mt-5 p-5 rounded">
            <div className="flex flex-col gap-10">
                <ProjectSection title="Full-Stack Projects" projects={fullstackProjects} />
                <ProjectSection title="Other Projects" projects={otherProjects} />
            </div>
        </section>
    );
};

export default Projects;