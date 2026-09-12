import GradientText from "./Animate/GradientText";
import ShinyText from "./Animate/ShinyText";
import SpotlightCard from "./Animate/SpotlightCard";

const Home = () => {
    return (
        <section
            id="home"
            className="min-h-screen px-6 py-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
        >
            {/* LEFT : Video */}
            <div className="w-full flex justify-center">
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full max-w-xl rounded-3xl shadow-2xl object-cover"
                >
                    <source src="/intro.mp4" type="video/mp4" />
                </video>
            </div>

            {/* RIGHT : Photo + Name + About */}
            <SpotlightCard
                className="w-full p-8 rounded-3xl"
                spotlightColor="rgba(0,229,255,0.18)"
            >
                <div className="flex flex-col items-center text-center">
                    <img
                        src="/me.png"
                        alt="Bramha Deshmukh"
                        className="w-36 h-36 rounded-full object-cover mb-4 border-2 border-cyan-400"
                    />

                    <GradientText
                        colors={["#40ffaa", "#4079ff", "#40ffaa"]}
                        animationSpeed={3}
                    >
                        BRAMHA DESHMUKH
                    </GradientText>

                    <ShinyText text="Web & Mobile Developer" speed={2} />

                    <h2 className="text-2xl font-bold mt-8  text-cyan-400">
                        About Me
                    </h2>

                    <p className="text-gray-300 text-justify leading-7 mb-4">
                        Hi, I'm Bramha Deshmukh, a web and mobile application developer
                        passionate about building impactful digital products.
                    </p>

                    <p className="text-gray-300 text-justify leading-7">
                        I enjoy creating modern applications, exploring new technologies,
                        and solving real-world problems through clean and scalable software.
                    </p>
                </div>
            </SpotlightCard>
        </section>
    );
};

export default Home;