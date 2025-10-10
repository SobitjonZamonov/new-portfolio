import React, { useContext, useEffect, useState } from "react";
import { ThemeContext } from "@/context/ThemeContext";

const skillsData = {
    coding: [
        { name: "HTML", level: 90 },
        { name: "CSS", level: 80 },
        { name: "JavaScript", level: 65 },
        { name: "Python", level: 60 },
    ],
    professional: [
        { name: "Web Design", level: 95 },
        { name: "Web Development", level: 67 },
        { name: "Graphic Design", level: 85 },
        { name: "SEO Marketing", level: 60 },
    ],
};

const ProgressBar = ({ name, level }) => (
    <div className="mb-5">
        <div className="flex justify-between mb-1 text-gray-200">
            <span>{name}</span>
            <span>{level}%</span>
        </div>
        <div className="w-full bg-gray-700 rounded-full h-3">
            <div
                className="bg-blue-400 h-3 rounded-full transition-all duration-500"
                style={{ width: `${level}%` }}
            ></div>
        </div>
    </div>
);

const AboutPage = () => {
    const { theme } = useContext(ThemeContext);
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const bgPosition = `center ${scrollY * 0.5}px`;

    return (
        <div className="relative w-full min-h-[200vh] text-white overflow-hidden">
            {/* Background image */}
            <div
                className="fixed top-0 left-0 w-full h-full bg-cover bg-center transition-all duration-500"
                style={{
                    backgroundImage: "url('/bgimage.jpg')",
                    backgroundPosition: bgPosition,
                    transform: `scale(${1 + scrollY * 0.0002})`,
                }}
            />
            {/* Blur overlay */}
            <div
                className={`absolute inset-0 backdrop-blur-[2px] transition-all duration-300 ${theme === "dark" ? "bg-black/60" : "bg-black/10"
                    }`}
            />

            {/* Hero Section */}
            <section className="relative h-[70vh] flex flex-col justify-center items-center px-4 text-center">
                <h1 className="z-10 text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
                    About Me
                </h1>
                <p className="z-10 text-white/80 max-w-[800px] text-base sm:text-lg leading-relaxed px-4">
                    Passionate Fullstack Developer creating modern, fast, and responsive
                    web applications with clean, maintainable code. Always learning,
                    always improving 🚀
                </p>
            </section>

            {/* About Content Section */}
            <section className="relative z-10 flex flex-col items-center text-center px-4 mt-[50px] transition-all duration-700">
                <div className="bg-white/10 border border-white/20 flex flex-col justify-center items-center rounded-2xl backdrop-blur-[10px] shadow-md shadow-[#898989] p-6 sm:p-10 max-w-[1100px]">
                    <p className="text-gray-200 text-base sm:text-lg leading-relaxed text-left">
                        I’m Sobitjon Zamonov, an 18-year-old Fullstack Developer with a strong passion for building dynamic, user-friendly, and visually engaging web applications. From a young age, I’ve been fascinated by technology and problem-solving, which naturally inspired me to pursue a career in programming and software development. Over time, I’ve gained solid experience in both frontend and backend development, allowing me to create complete, high-performance, and scalable web solutions from the ground up.
                        <br />
                        <br />
                        I specialize in JavaScript (ES6+), TypeScript, and Python, and have hands-on experience working with backend frameworks such as Node.js, Express.js, and NestJS. On the frontend, I develop responsive and modern interfaces using HTML5, CSS, SCSS, TailwindCSS, React, and Next.js. My database expertise includes PostgreSQL, MongoDB, and MySQL, while I also utilize Docker, Git, and GitHub for version control, deployment, and collaboration.
                        <br />
                        <br />
                        I completed my professional training at Najot Ta’lim, one of Uzbekistan’s leading IT education centers, where I graduated from the Fullstack Web Development course with strong real-world project experience.
                        <br />
                        <br />
                        Beyond full-stack development, I have a solid foundation in C and Python, which has helped me strengthen my problem-solving abilities and algorithmic thinking. My ultimate goal is to build meaningful digital products that make an impact and to keep growing as a developer every single day.
                    </p>
                </div>
            </section>

            {/* Skills Section */}
            <section className="relative z-10 flex flex-col items-center text-center px-4 mt-[100px] mb-[80px] transition-all duration-700">
                <h2 className="text-4xl sm:text-5xl font-bold mb-10">My Skills</h2>

                <div className="flex flex-col lg:flex-row gap-10 justify-center">
                    {/* Coding Skills */}
                    <div className="w-full lg:w-[500px] bg-white/10 border border-white/20 rounded-3xl p-6 backdrop-blur-md shadow-lg">
                        <h3 className="text-2xl font-bold mb-6">
                            <span className="text-[#6607e3]">Coding</span> Skills
                        </h3>
                        {skillsData.coding.map((skill) => (
                            <ProgressBar key={skill.name} {...skill} />
                        ))}
                    </div>

                    {/* Professional Skills */}
                    <div className="w-full lg:w-[500px] bg-white/10 border border-white/20 rounded-3xl p-6 backdrop-blur-md shadow-lg">
                        <h3 className="text-2xl font-bold mb-6">
                            <span className="text-[#6607e3]">Professional</span> Skills
                        </h3>
                        {skillsData.professional.map((skill) => (
                            <ProgressBar key={skill.name} {...skill} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Icons Section */}
            {/* <section className="relative z-10 flex justify-center pb-20">
                <div className="flex flex-wrap justify-center gap-6 sm:gap-10 bg-white/10 border border-white/20 rounded-2xl backdrop-blur-md p-6 sm:p-10 shadow-lg">
                    <Code />
                    <Javascript />
                    <Typescript />
                    <Reactjs />
                    <Html />
                    <Css />
                    <Nest />
                </div>
            </section> */}
        </div>
    );
};

export default AboutPage;
