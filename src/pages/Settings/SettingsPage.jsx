import { Github, Instagram, Linkedin, MoveDown, Send } from "lucide-react";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "@/context/ThemeContext";

const SettingsPage = () => {
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

            <section className="relative h-[70vh] flex flex-col justify-center items-center px-4 text-center">
                <h1 className="z-10 text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
                    Soon 😕
                </h1>
            </section>


        </div>
    );
};

export default SettingsPage;
