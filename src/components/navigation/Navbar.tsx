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
        <header className="sticky top-0 z-50 border-b border-border/80 bg-[#e8edef]/85 backdrop-blur-xl">
            <Container>
            <nav className="flex h-20 items-center justify-between">
                    {/* Logo */}
                    <div className="flex items-center gap-4">
                        <NavLink
                            to="/"
                            className="font-display text-xl tracking-tight"
                            onClick={() => setIsOpen(false)}
                        >
                            Munukutla
                        </NavLink>
                        <span className="hidden border-l border-border pl-4 text-xs text-muted-foreground sm:inline">Software &amp; ML</span>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden items-center gap-8 text-sm font-medium md:flex">
                        {links.map((link) => (
                            <NavLink
                                key={link.path}
                                to={link.path}
                                className={({ isActive }) =>
                                    `relative py-2 transition-colors hover:text-foreground ${
                                        isActive ? "text-foreground after:absolute after:bottom-0 after:left-0 after:right-0 after:h-px after:bg-accent" : "text-muted-foreground"
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
                        className="rounded-full border border-border p-2 transition hover:border-foreground hover:bg-muted md:hidden"
                        aria-label="Toggle navigation"
                    >
                        {isOpen ? <X size={22} /> : <Menu size={22} />}
                    </button>
                </nav>

                {/* Mobile Navigation */}
                {isOpen && (
                    <div className="border-t border-border py-4 md:hidden">
                        <div className="flex flex-col gap-4">
                            {links.map((link) => (
                                <NavLink
                                    key={link.path}
                                    to={link.path}
                                    onClick={() => setIsOpen(false)}
                                    className={({ isActive }) =>
                                        `text-sm font-medium transition-colors hover:text-foreground ${
                                            isActive ? "text-foreground" : "text-muted-foreground"
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