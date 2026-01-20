import { useState } from "react";
import { Link } from "react-router-dom";
import { ButtonGroup } from "../ui/button-group";
import { Button } from "../ui/button";
import ThemeSwitch from "../ThemeSwitch/ThemeSwitch";
import { BadgeCheck, LayoutGrid, X } from "lucide-react";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="fixed top-4 left-1/2 -translate-x-1/2 flex justify-between items-center w-[90%] h-[60px] md:w-[1200px] md:h-[70px] px-6 md:px-12 border border-[#ccc]/30 rounded-4xl
            bg-white/10 backdrop-blur-[8px] shadow-lg z-50 transition-all">

            <label className="flex items-center gap-2 font-bold text-2xl text-white/80">SZ_911 <BadgeCheck className="text-white/40" /></label>

            <div className="hidden md:flex">
                <ButtonGroup className="text-[#ccc]">
                    <Button asChild variant="outline"><Link to="/">Home</Link></Button>
                    <Button asChild variant="outline"><Link to="/about">About</Link></Button>
                    <Button asChild variant="outline"><Link to="/projects">Projects</Link></Button>
                    <Button asChild variant="outline"><Link to="/education">Education</Link></Button>
                </ButtonGroup>
            </div>

            <div className="flex items-center gap-4">
                <button
                    className="md:hidden text-white"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? <X size={28} /> : <LayoutGrid size={28} />}
                </button>

                <ThemeSwitch />
            </div>

            <div
                className={`absolute top-[80px] left-0 w-full flex flex-col items-center gap-2 md:hidden transition-all duration-300 ease-out overflow-hidden
                ${menuOpen ? "max-h-[400px] opacity-100 translate-y-0" : "max-h-0 opacity-0 -translate-y-4"}`}
            >
                {[
                    { to: "/", label: "Home" },
                    { to: "/about", label: "About" },
                    { to: "/projects", label: "Projects" },
                    { to: "/education", label: "Education" },
                ].map((item) => (
                    <Link onClick={() => setMenuOpen(false)} to={item.to} className="w-[90%]">
                        <div className="flex justify-center items-center w-full h-[45px] border border-[#ccc]/30 rounded-4xl
                      bg-white/14 backdrop-blur-[10px] shadow-lg z-50 transition text-white text-lg">
                            {item.label}
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Navbar;
