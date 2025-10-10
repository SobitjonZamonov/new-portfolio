import { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";
import { Moon, Sun } from "lucide-react";
import { Button } from "../ui/button";

const ThemeSwitch = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <Button
            variant="outline"
            size="icon"
            onClick={toggleTheme}
            className="text-[#ccc]"
        >
            {theme === "light" ? (
                <Moon className="h-[1.2rem] w-[1.2rem] transition-all" />
            ) : (
                <Sun className="h-[1.2rem] w-[1.2rem] transition-all" />
            )}
        </Button>
    );
};

export default ThemeSwitch;
