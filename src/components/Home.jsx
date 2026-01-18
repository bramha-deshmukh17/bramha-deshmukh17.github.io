import GradientText from './Animate/GradientText'
import ShinyText from './Animate/ShinyText';
import SpotlightCard from './Animate/SpotlightCard';

const Home = () => {
    return (
        <section
            id="home"
            className="m-5 p-5 grid grid-cols-1 md:grid-cols-2 gap-6 place-items-center"
        >
            {/* Left */}
            <div className="left w-full flex justify-center items-center p-5">
                <div className="text-container flex flex-col items-center text-center">
                    <img src='me.png' alt="Profile" className='w-32 sm:w-40 md:w-48 align-middle' />
                    <GradientText
                        colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
                        animationSpeed={3}
                        showBorder={false}
                        className=""
                    >
                        BRAMHA DESHMUKH
                    </GradientText>
                    <ShinyText text="Developer" speed={1} className="home" />
                </div>
            </div>

            {/* Right */}
            <SpotlightCard
                className="shadow-card p-5 m-5 right w-7/9 max-w-2xl"
                spotlightColor="rgba(0, 229, 255, 0.2)"
                padding="none"
            >
                <h2 className="text-3xl font-bold mb-8 text-center">Welcome to My Portfolio</h2>
                <p className="text-base md:text-lg mb-3 leading-relaxed">
                    Hi, I'm Bramha Deshmukh. I'm a web and mobile application developer and passionate
                    about creating impactful solutions.
                </p>
                <p className="text-base md:text-lg leading-relaxed">
                    Enthusiastic student with a passion for coding and problem-solving, eager
                    to dive into the world of software development. Excited to learn new
                    technologies and collaborate with teams to create innovative solutions.
                    Dedicated to growing my skills and making a positive impact in the tech
                    community.
                </p>
            </SpotlightCard>
        </section>
    );
};

export default Home;