import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

import Container from "../layout/Container";

const links = [
    { name: "Projects", path: "/projects" },
    { name: "Blog", path: "/blog" },
    { name: "Resume", path: "/resume" },
    { name: "Contact", path: "/contact" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="border-b border-neutral-200">
            <Container>
                <nav className="flex h-24 items-center justify-between">
                    {/* Logo */}
                    <NavLink
                        to="/"
                        className="text-xl font-semibold tracking-tight"
                        onClick={() => setIsOpen(false)}
                    >
                        Munukutla
                    </NavLink>

                    {/* Desktop Navigation */}
                    <div className="hidden items-center gap-10 text-sm font-medium md:flex">
                        {links.map((link) => (
                            <NavLink
                                key={link.path}
                                to={link.path}
                                className={({ isActive }) =>
                                    `transition-colors hover:text-neutral-500 ${
                                        isActive ? "text-black" : "text-neutral-600"
                                    }`
                                }
                            >
                                {link.name}
                            </NavLink>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="rounded p-2 transition hover:bg-neutral-100 md:hidden"
                        aria-label="Toggle navigation"
                    >
                        {isOpen ? <X size={22} /> : <Menu size={22} />}
                    </button>
                </nav>

                {/* Mobile Navigation */}
                {isOpen && (
                    <div className="border-t border-neutral-200 py-4 md:hidden">
                        <div className="flex flex-col gap-4">
                            {links.map((link) => (
                                <NavLink
                                    key={link.path}
                                    to={link.path}
                                    onClick={() => setIsOpen(false)}
                                    className={({ isActive }) =>
                                        `text-sm font-medium transition-colors hover:text-neutral-500 ${
                                            isActive ? "text-black" : "text-neutral-600"
                                        }`
                                    }
                                >
                                    {link.name}
                                </NavLink>
                            ))}
                        </div>
                    </div>
                )}
            </Container>
        </header>
    );
}