import React from "react";
import { Github, Mail, Linkedin, Instagram, Send } from "lucide-react";

const Footer = () => {
    return (
        <footer className="relative w-full bg-[#0A061D] text-white py-10 px-6 border-t border-white/20">
            {/* Upper Section */}
            <div className="max-w-[1200px] mx-auto flex flex-col sm:flex-row justify-between items-center gap-6">
                <div className="text-center sm:text-left">
                    <h2 className="text-2xl font-bold mb-2 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                        Let's Connect 🌐
                    </h2>
                    <p className="text-white/70 text-sm sm:text-base">
                        I’m always open to new opportunities, collaborations, and creative ideas.
                    </p>
                </div>

                {/* Social Links */}
                <div className="flex gap-6 justify-center sm:justify-end">
                    <a
                        href="mailto:sobitjonzamonov@gmail.com"
                        className="group p-3 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 transition-all duration-300 hover:scale-110"
                    >
                        <Mail className="text-white group-hover:text-cyan-400 transition-colors duration-300" />
                    </a>
                    <a
                        href="https://t.me/yourtelegram"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group p-3 rounded-full border border-white/20 bg-white/5 hover:bg-[#0088cc]/10 transition-all duration-300 hover:scale-110"
                    >
                        <Send className="text-white group-hover:text-[#0088cc] transition-colors duration-300" />
                    </a>
                    <a
                        href="https://instagram.com/yourusername"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group p-3 rounded-full border border-white/20 bg-white/5 hover:bg-pink-400/10 transition-all duration-300 hover:scale-110"
                    >
                        <Instagram className="text-white group-hover:text-pink-400 transition-colors duration-300" />
                    </a>
                    <a
                        href="https://linkedin.com/in/yourusername"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group p-3 rounded-full border border-white/20 bg-white/5 hover:bg-blue-400/10 transition-all duration-300 hover:scale-110"
                    >
                        <Linkedin className="text-white group-hover:text-blue-400 transition-colors duration-300" />
                    </a>
                    <a
                        href="https://github.com/SobitjonZamonov"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group p-3 rounded-full border border-white/20 bg-white/5 hover:bg-[#00FFFF]/10 transition-all duration-300 hover:scale-110"
                    >
                        <Github className="text-white group-hover:text-[#00FFFF] transition-colors duration-300" />
                    </a>
                </div>
            </div>

            {/* Divider */}
            <div className="w-full h-[1px] bg-white/20 my-8" />

            {/* Bottom Section */}
            <div className="text-center">
                <p className="text-sm sm:text-base text-white/70">
                    © {new Date().getFullYear()}{" "}
                    <span className="text-white font-semibold">Sobitjon Zamonov</span> — All rights reserved.
                </p>
                <p className="text-xs text-white/40 mt-1">
                    Built with ❤️ using React & TailwindCSS
                </p>
            </div>
        </footer>
    );
};

export default Footer;
