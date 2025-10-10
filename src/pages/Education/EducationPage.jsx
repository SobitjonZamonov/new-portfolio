import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "@/context/ThemeContext";
import { MoveDown } from "lucide-react";

const EducationPage = () => {
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
            <div
                className="fixed top-0 left-0 w-full h-full bg-cover bg-center transition-all duration-500"
                style={{
                    backgroundImage: "url('/bgimage.jpg')",
                    backgroundPosition: bgPosition,
                    transform: `scale(${1 + scrollY * 0.0002})`,
                }}
            />
            <div
                className={`absolute inset-0 backdrop-blur-[2px] ${
                    theme === "dark" ? "bg-black/60" : "bg-black/10"
                }`}
            />

            {/* Header Section */}
            <section className="relative h-[60vh] flex flex-col justify-center items-center px-4 text-center">
                <h1
                    className={`z-10 text-4xl sm:text-5xl md:text-6xl font-bold text-white transition-all duration-700 ${
                        scrollY > 100
                            ? "opacity-0 -translate-y-[60px]"
                            : "opacity-100 translate-y-0"
                    }`}
                >
                    My Education 🎓
                </h1>
                <p className="z-10 text-white/70 mt-4 text-base sm:text-lg max-w-[600px]">
                    A quick look at my learning journey and certifications.
                </p>
                {/* Scroll down indicator */}
                <div className="absolute bottom-1 flex flex-col items-center animate-fadeIn z-10">
                    <span className="text-white/60 text-lg tracking-widest mb-2 transition-all duration-300 hover:text-white">
                        Scroll Down
                    </span>
                    <MoveDown className="text-white/60" />
                </div>
            </section>

            {/* Education Section */}
            <section
                className={`relative z-10 flex flex-col items-center text-center px-4 mt-[40px] transition-all duration-700 ${
                    scrollY > 140
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-[30px]"
                }`}
            >
                <div className="bg-white/10 border border-white/20 flex flex-col justify-center items-center rounded-2xl backdrop-blur-[10px] shadow-md shadow-[#898989] p-6 sm:p-10 max-w-[1100px] w-[90%]">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8">
                        Education
                    </h2>

                    <div className="flex flex-col gap-8 w-full">
                        {educationData.map((edu, index) => (
                            <div
                                key={index}
                                className="w-full flex flex-col md:flex-row justify-between items-center border border-white/20 bg-white/5 px-6 py-6 gap-6 rounded-2xl hover:bg-white/10 hover:scale-[1.02] transition-all duration-300"
                            >
                                <div className="text-left">
                                    <h2 className="font-semibold text-xl sm:text-2xl md:text-3xl text-white">
                                        {edu.title}
                                    </h2>
                                    <p className="font-normal text-base sm:text-lg text-white/80">
                                        {edu.description}
                                    </p>
                                </div>

                                <div className="flex flex-col items-end gap-3">
                                    <button
                                        className="px-5 py-2 border border-white/30 bg-white/10 text-white rounded-xl hover:bg-white/20 hover:scale-105 transition-all duration-300"
                                        onClick={() => window.open(edu.certificate, "_blank")}
                                    >
                                        View Certificate
                                    </button>
                                    <div className="md:text-right">
                                        <label className="font-normal text-sm sm:text-base text-white/70">
                                            Date:
                                        </label>
                                        <p className="font-normal text-sm sm:text-base text-white">
                                            {edu.date}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default EducationPage;

// Data
const educationData = [
    {
        title: "Bootcamp Foundation",
        description: "Python & C language basics",
        certificate: "./sertifikat.png",
        date: "26.03.2024 - 24.08.2025",
    },
    {
        title: "Bootcamp Full-Stack",
        description: "Node.js & React.js Full-Stack Development",
        certificate: "./sertifikat.png",
        date: "10.09.2024 - 01.05.2025",
    },
];
