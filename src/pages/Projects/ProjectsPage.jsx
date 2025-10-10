import { useContext, useEffect, useState } from "react";
import { Github, MoveDown } from "lucide-react";
import { ThemeContext } from "@/context/ThemeContext";

const ProjectsPage = () => {
    const [scrollY, setScrollY] = useState(0);
    const { theme } = useContext(ThemeContext);

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const bgPosition = `center ${scrollY * 0.5}px`;

    return (
        <div className="relative w-full min-h-[190vh] text-white overflow-hidden">
            {/* Background image */}
            <div
                className="fixed top-0 left-0 w-full h-full bg-cover bg-center transition-all duration-500"
                style={{
                    backgroundImage: "url('/bgimage.jpg')",
                    backgroundPosition: bgPosition,
                    transform: `scale(${1 + scrollY * 0.0002})`,
                }}
            />
            <div
                className={`absolute inset-0 backdrop-blur-[2px] ${theme === "dark" ? "bg-black/60" : "bg-black/10"
                    }`}
            />

            {/* Header */}
            <section className="relative h-[60vh] flex flex-col justify-center items-center mt-10 px-4 text-center">
                <h1
                    className={`z-10 text-4xl sm:text-5xl md:text-6xl font-bold text-white transition-all duration-700 ${scrollY > 100
                        ? "opacity-0 -translate-y-[60px]"
                        : "opacity-100 translate-y-0"
                        }`}
                >
                    My Projects 🚀
                </h1>
                <p className="z-10 text-white/70 mt-8 text-base sm:text-lg max-w-[600px]">
                    A collection of my favorite works — from backend APIs to creative frontend apps.
                </p>
                {/* Scroll down indicator */}
                <div className="absolute bottom-1 flex flex-col items-center animate-fadeIn z-10">
                    <span className="text-white/60 text-lg tracking-widest mb-2 transition-all duration-300 hover:text-white">
                        Scroll Down
                    </span>
                    <MoveDown className="text-white/60" />
                </div>
            </section>

            {/* Projects Section */}
            <section
                className={`relative z-10 flex flex-col items-center text-center px-4 mt-20 transition-all duration-700 ${scrollY > 140
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-[30px]"
                    }`}
            >
                <div className="bg-white/10 border border-white/20 flex flex-col justify-center items-center rounded-2xl backdrop-blur-[10px] shadow-md shadow-[#898989] p-4 sm:p-10 max-w-[1100px] w-[90%]">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-16">
                        Projects
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
                        {/* Project Card */}
                        {projects.map((proj, index) => (
                            <div
                                key={index}
                                className="w-full flex flex-col justify-center border border-white/20 bg-white/5 px-5 py-6 gap-6 rounded-2xl hover:bg-white/10 hover:scale-[1.02] transition-all duration-300"
                            >
                                <div className="flex justify-between items-center">
                                    <h1 className="text-xl sm:text-2xl text-white font-semibold">
                                        {proj.title}
                                    </h1>
                                    <a
                                        href={proj.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-white hover:text-gray-400 transition-all duration-200"
                                    >
                                        <Github />
                                    </a>
                                </div>
                                <p className="text-white/80 text-sm sm:text-base text-left leading-relaxed">
                                    {proj.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ProjectsPage;

const projects = [
    {
        title: "Nasiya Savdo",
        link: "https://github.com/SobitjonZamonov/Nasiya-savdo-backend",
        description:
            "A backend API built exclusively for product sellers to manage halal installment (nasiya) sales with their most frequent customers. It helps sellers record transactions, track payments, and view monthly stats.",
    },
    {
        title: "Liars Bar Bot",
        link: "https://github.com/SobitjonZamonov/liars-bar-bot",
        description:
            "A Telegram bot version of the classic social bluffing game Liars Bar. Players can join, bluff, and expose the liar directly in Telegram chats.",
    },
    {
        title: "Football Randomiser App",
        link: "https://github.com/SobitjonZamonov/football-randomizer-app",
        description:
            "A fun web app that randomly divides players into two balanced football teams, ensuring fairness and randomness for every match.",
    },
    {
        title: "LMS Frontend Admin",
        link: "https://github.com/SobitjonZamonov/lms-frontent-admin",
        description:
            "A frontend interface for a Learning Center Management System, enabling institutions to manage teachers, students, groups, and attendance with ease.",
    },
];
