import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import Home from "../pages/Home/index.tsx";
import Projects from "../pages/Projects";
import Blog from "../pages/Blog/index.tsx";
import Resume from "../pages/Resume";
import Contact from "../pages/Contact/index.tsx";
import ProjectDetail from "../pages/Projects/ProjectDetail.tsx";
import BlogPost from "../pages/Blog/BlogPost.tsx";
import ScrollToTop from "../components/ScrollToTop.tsx";

export default function AppRouter() {
    return (
        <BrowserRouter>
            <ScrollToTop />
            <Routes>
                <Route element={<MainLayout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/resume" element={<Resume />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/projects/:slug" element={<ProjectDetail />} />
                    <Route path="/blog/:slug" element={<BlogPost />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}