import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import { Outlet, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

const MainLayout = () => {
    const location = useLocation();

    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    );
};

export default MainLayout;
