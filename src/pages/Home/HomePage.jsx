import { Github, Instagram, Linkedin, MoveDown, Send } from "lucide-react";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "@/context/ThemeContext";

const HomePage = () => {
    const [scrollY, setScrollY] = useState(0);
    const { theme } = useContext(ThemeContext)

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
            <div className={`absolute inset-0 backdrop-blur-[2px] ${theme === "dark" ? "bg-black/60" : "bg-black/10"
                }`}
            />

            <section className="relative h-[100vh] flex flex-col justify-center items-center px-4 text-center">
                <h1
                    className={`z-10 text-4xl sm:text-5xl md:text-6xl font-bold text-white transition-all duration-700 ${scrollY > 100
                        ? "opacity-0 -translate-y-[60px]"
                        : "opacity-100 translate-y-0"
                        }`}
                >
                    Hello, I'm Sobitjon 👋
                </h1>

                {/* Scroll down indicator */}
                <div className="absolute bottom-12 flex flex-col items-center animate-fadeIn z-10">
                    <span className="text-white/60 text-lg tracking-widest mb-2 transition-all duration-300 hover:text-white">
                        Scroll Down
                    </span>
                    <MoveDown className="text-white/60" />
                </div>
            </section>


            {/* About section */}
            <section
                className={`relative z-10 flex flex-col items-center text-center px-4 mt-[80px] sm:mt-[100px] transition-all duration-700 ${scrollY > 140
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-[30px]"
                    }`}
            >
                <div className="bg-white/10 border border-white/20 flex flex-col justify-center items-center rounded-2xl backdrop-blur-[10px] shadow-md shadow-[#898989] p-6 sm:p-10 max-w-[1000px]">
                    <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-6 sm:mb-10">
                        Fullstack Developer
                    </h2>

                    <div className="bg-white/5 border border-white/20 rounded-2xl shadow-xl p-5 sm:p-8 w-full">
                        <p className="text-gray-200 text-base sm:text-lg text-start leading-relaxed" style={{fontFamily: "Livvic"}}>
                            I’m <span className="font-medium">Sobitjon Zamonov</span>, 18 years old. Since childhood, I’ve been deeply interested in programming and have continuously worked to improve my skills in this field.
                            From 2023 to 2024, I studied at Najot Ta’lim learning center, where I gained a solid understanding of both the theoretical and practical aspects of programming.

                            Currently, I’m a Fullstack Developer. On the frontend side, I work with technologies such as <span className="font-medium">React.js, Next.js,</span> and <span className="font-medium">Vue.js</span>. On the backend, I have hands-on experience building projects using <span className="font-medium">Node.js</span> and <span className="font-medium">Nest.js</span>.

                            During my studies, I participated in several individual and team projects. My goal is to keep improving my skills and become a professional developer in modern web technologies.
                        </p>
                    </div>

                    <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center">
                        <Link to="/about">
                            <button className="w-full sm:w-auto px-8 py-3 rounded-xl font-semibold text-white border border-white/30 bg-white/10 backdrop-blur-md hover:bg-white/20 hover:scale-105 transition-all duration-300">
                                More About Me
                            </button>
                        </Link>

                        <a
                            href="https://github.com/yourusername"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <button className="w-full sm:w-auto px-8 py-3 rounded-xl font-semibold border border-[#00FFFF]/40 text-[#00FFFF] hover:bg-[#00FFFF]/10 hover:scale-105 transition-all duration-300" onClick={() => window.open("./zs new.pdf", "_blank")}>
                                CV
                            </button>
                        </a>
                    </div>
                </div>
            </section>

            <section
                className={`relative z-10 flex flex-col items-center text-center px-4 mt-[100px] mb-[100px] transition-all duration-700 ${scrollY > 140
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-[30px]"
                    }`}
            >
                <div className="bg-white/10 border border-white/20 flex flex-col justify-center items-center rounded-2xl backdrop-blur-[14px] shadow-md shadow-[#898989] p-6 sm:p-10 w-[90%] max-w-[500px]">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8">
                        Connect with me
                    </h2>

                    <div className="flex gap-6 sm:gap-10 flex-wrap justify-center">
                        {/* Telegram */}
                        <a
                            href="https://t.me/Sobitjon_911"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative flex flex-col items-center"
                        >
                            <div className="p-3 sm:p-4 rounded-full border border-[#fff]/50 text-[#fff] bg-white/10 hover:bg-[#0088cc]/10 backdrop-blur-md hover:scale-105 transition-all duration-300">
                                <Send size={24} />
                            </div>
                            <span className="absolute bottom-[-25px] text-xs sm:text-sm opacity-0 group-hover:opacity-100 text-[#0088cc] transition-all duration-300">
                                Telegram
                            </span>
                        </a>

                        {/* Instagram */}
                        <a
                            href="https://www.instagram.com/zamonovvv_911?igsh=cHJibDlhNHh2aDh0"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative flex flex-col items-center"
                        >
                            <div className="p-3 sm:p-4 rounded-full border border-[#fff] text-[#fff] bg-white/10 hover:bg-pink-400/10 backdrop-blur-md hover:scale-105 transition-all duration-300">
                                <Instagram size={24} />
                            </div>
                            <span className="absolute bottom-[-25px] text-xs sm:text-sm opacity-0 group-hover:opacity-100 text-pink-400 transition-all duration-300">
                                Instagram
                            </span>
                        </a>

                        {/* LinkedIn */}
                        <a
                            href="https://www.linkedin.com/in/sobitjon-zamonov-26a48b342?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative flex flex-col items-center"
                        >
                            <div className="p-3 sm:p-4 rounded-full border border-[#fff] text-[#fff] bg-white/10 hover:bg-blue-400/10 backdrop-blur-md hover:scale-105 transition-all duration-300">
                                <Linkedin size={24} />
                            </div>
                            <span className="absolute bottom-[-25px] text-xs sm:text-sm opacity-0 group-hover:opacity-100 text-blue-400 transition-all duration-300">
                                LinkedIn
                            </span>
                        </a>

                        {/* GitHub */}
                        <a
                            href="https://github.com/SobitjonZamonov"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative flex flex-col items-center"
                        >
                            <div className="p-3 sm:p-4 rounded-full border border-[#fff] text-[#fff] bg-white/10 hover:bg-[#00FFFF]/10 backdrop-blur-md hover:scale-105 transition-all duration-300">
                                <Github size={24} />
                            </div>
                            <span className="absolute bottom-[-25px] text-xs sm:text-sm opacity-0 group-hover:opacity-100 text-[#00FFFF] transition-all duration-300">
                                GitHub
                            </span>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HomePage;
