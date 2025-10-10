import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/Home/HomePage";
import AboutPage from "../pages/About/AboutPage";
import ProjectsPage from "../pages/Projects/ProjectsPage";
import ContactPage from "../pages/Contact/ContactPage";
import EducationPage from "../pages/Education/EducationPage";
import SettingsPage from "../pages/Settings/SettingsPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "about", element: <AboutPage /> },
      { path: "education", element: <EducationPage /> },
      { path: "projects", element: <ProjectsPage /> },
      { path: "contact", element: <ContactPage /> },
      { path: "settings", element: <SettingsPage /> },
    ],
  },
]);
