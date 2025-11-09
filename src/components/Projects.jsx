import '../css/Projects.css';
import ShinyText from './Animate/ShinyText';
import SpotlightCard from './Animate/SpotlightCard';

// Small pulsing red dot shown on live projects
const LiveDot = (top=false) => (
    <span className="absolute top-2 right-2" title="Live">
        <span className="inline-block w-3 h-3 rounded-full bg-red-500 animate-pulse ring-2 ring-red-400/40" />
        <span title='Live'></span>
    </span>
);

const Projects = () => {

    return (
        <section id="projects" className="m-5 mt-5 p-5 rounded">
            <div className="w-full max-w-6xl mx-auto">

                <div className="place-items-center m-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Flash Chat (LIVE) */}
                    <div className="flip-card">
                        <div className="flip-card-inner rounded-lg">
                            <div className="flip-card-front rounded-lg">
                                {/* show live dot on hosted project */}
                                <LiveDot />
                                <img src="./projects/flash_chat.png" alt="Flash Chat" className="w-full h-16/9 object-fit rounded-lg" />
                                <h2 className="project-title absolute bottom-0 left-0 w-full text-xl font-bold py-2 text-center rounded-b-lg">
                                    Flash Chat
                                </h2>
                            </div>
                            <div className="flip-card-back rounded-lg text-justify">
                                <SpotlightCard className="card" spotlightColor="rgba(0, 229, 255, 0.2)">
                                    <p>
                                        <b>
                                            Flash Chat is chatting app built using{' '}
                                            <ShinyText text="MERN" disabled={false} speed={1} className="code" />
                                        </b>
                                        <br />
                                        It provide cloud support of MongoDB Atlas to store the user chats.
                                        <br />
                                        Also uses web socket to have a realtime communication.
                                        <br />
                                        Allows files and media sharing.
                                    </p>
                                    <div className="flex flex-col items-center mt-1">
                                        
                                        <a
                                            href="https://flash-chat-9dt7.onrender.com/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="mt-2"
                                        >
                                            Live Demo
                                        </a>
                                    </div>
                                </SpotlightCard>
                            </div>
                        </div>
                    </div>
                    {/* Smart RTO */}
                    <div className="flip-card">
                        <div className="flip-card-inner rounded-lg">
                            <div className="flip-card-front rounded-lg">
                                <img src="./projects/rto.jpg" alt="Smart RTO" className="w-full h-full object-fit rounded-lg" />
                                <h2 className="project-title absolute bottom-0 left-0 w-full text-xl font-bold py-2 text-center rounded-b-lg">
                                    Smart RTO
                                </h2>
                            </div>
                            <div className="flip-card-back rounded-lg text-justify">
                                <SpotlightCard className="card" spotlightColor="rgba(0, 229, 255, 0.2)">
                                    <p>
                                        <b>
                                            Smart RTO is a RTO mobile app designed using{' '}
                                            <ShinyText text="Flutter" disabled={false} speed={1} className="code" />
                                        </b>
                                        <br />
                                        The Smart RTO is designed to streamline the operations of RTO in India. It aims to provide a user-friendly platform for citizens to access various RTO services online.
                                        <br />
                                        Management of user queries regarding licenses and vehicle fines.
                                        <br />
                                        Integration with payment gateways for fine payments.
                                    </p>
                                    <div className="flex justify-center">
                                        <lord-icon
                                            src="https://cdn.lordicon.com/lllcnxva.json"
                                            trigger="hover"
                                            colors="primary:#121331,secondary:#ebe6ef,tertiary:#000000"
                                            style={{ width: '45px', height: '45px' }}
                                        />
                                        <a href="https://github.com/bramha-deshmukh17/SmartRTO" target="_blank" rel="noopener noreferrer" className="ml-2 mt-2">
                                            View
                                        </a>
                                    </div>
                                </SpotlightCard>
                            </div>
                        </div>
                    </div>
                    {/* TourGuide */}
                    <div className="flip-card">
                        <div className="flip-card-inner rounded-lg">
                            <div className="flip-card-front rounded-lg">
                                <img src="./projects/tourguide.png" alt="TourGuide" className="w-full h-16/9 object-fit rounded-lg" />
                                <h2 className="project-title absolute bottom-0 left-0 w-full text-xl font-bold py-2 text-center rounded-b-lg">
                                    TourGuide
                                </h2>
                            </div>
                            <div className="flip-card-back rounded-lg text-justify">
                                <SpotlightCard className="card" spotlightColor="rgba(0, 229, 255, 0.2)">
                                    <p>
                                        <b>
                                            TourGuide is a guide booking website designed using{' '}
                                            <ShinyText text="Django" disabled={false} speed={1} className="code" />
                                        </b>
                                        <br />
                                        The TourGuide aims to provide a comprehensive platform for tourists to book guides and explore tourist places, restaurants, and hotels.
                                    </p>
                                    <div className="flex justify-center mt-1">
                                        <lord-icon
                                            src="https://cdn.lordicon.com/lllcnxva.json"
                                            trigger="hover"
                                            colors="primary:#121331,secondary:#ebe6ef,tertiary:#000000"
                                            style={{ width: '45px', height: '45px' }}
                                        />
                                        <a href="https://github.com/bramha-deshmukh17/tourguide" target="_blank" rel="noopener noreferrer" className="ml-2 mt-3">
                                            View
                                        </a>
                                    </div>
                                </SpotlightCard>
                            </div>
                        </div>
                    </div>
                    {/* EduMate */}
                    <div className="flip-card">
                        <div className="flip-card-inner rounded-lg">
                            <div className="flip-card-front rounded-lg">
                                <img src="./projects/edumate.png" alt="EduMate" className="w-full h-16/9 object-fit rounded-lg" />
                                <h2 className="project-title absolute bottom-0 left-0 w-full text-xl font-bold py-2 text-center rounded-b-lg">
                                    EduMate
                                </h2>
                            </div>
                            <div className="flip-card-back rounded-lg text-justify">
                                <SpotlightCard className="card" spotlightColor="rgba(0, 229, 255, 0.2)">
                                    <p>
                                        <b>
                                            EduMate is a e-learning website designed using{' '}
                                            <ShinyText text="PHP" disabled={false} speed={1} className="code" />
                                        </b>
                                        <br />
                                        With its 3 distinct modules - Student Module, Admin Module, Discussion Forum - the platform provides a comprehensive and user-friendly environment for effective learning, efficient course management, and engaging discussions.
                                    </p>
                                    <div className="flex justify-center mt-1">
                                        <lord-icon
                                            src="https://cdn.lordicon.com/lllcnxva.json"
                                            trigger="hover"
                                            colors="primary:#121331,secondary:#ebe6ef,tertiary:#000000"
                                            style={{ width: '45px', height: '45px' }}
                                        />
                                        <a href="https://github.com/bramha-deshmukh17/edumate" target="_blank" rel="noopener noreferrer" className="ml-2 mt-3">
                                            View
                                        </a>
                                    </div>
                                </SpotlightCard>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;