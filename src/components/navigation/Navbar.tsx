import { NavLink } from "react-router-dom";
import Container from "../layout/Container";

const links = [
    { name: "Projects", path: "/projects" },
    { name: "Blog", path: "/blog" },
    { name: "Resume", path: "/resume" },
    { name: "Contact", path: "/contact" },
];

export default function Navbar() {
    return (
        <header className="border-b border-neutral-200">
            <Container>
                <nav className="flex h-24 items-center justify-between">
                    <NavLink
                        to="/"
                        className="text-xl font-semibold tracking-tight"
                    >
                        Munukutla
                    </NavLink>

                    <div className="flex items-center gap-10 text-sm font-medium">
                        {links.map((link) => (
                            <NavLink
                                key={link.path}
                                to={link.path}
                                className="transition-colors hover:text-neutral-500"
                            >
                                {link.name}
                            </NavLink>
                        ))}
                    </div>
                </nav>
            </Container>
        </header>
    );
}