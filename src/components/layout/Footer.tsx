import Container from "./Container";

export default function Footer() {
    return (
        <footer className="border-t border-border">
            <Container>
                <div className="flex min-h-20 items-center justify-center py-5 text-center text-sm text-muted-foreground">
                    © 2026 Munukutla Sri Shanmukha Aditya. All rights reserved.
                </div>
            </Container>
        </footer>
    );
}