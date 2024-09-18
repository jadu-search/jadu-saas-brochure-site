import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Layout = ({ children }) => {
    return (
        <div className="flex flex-col min-h-screen">
            <header className="bg-quaternary text-white p-4">
                <nav className="container mx-auto">
                    <Link to="/">
                        <StaticImage
                            src="../images/Color-logo-no-background.svg"
                            alt="Jadu Digital Logo"
                            placeholder="blurred"
                            layout="fixed"
                            width={200}
                            height={60}
                        />
                    </Link>
                </nav>
            </header>
            <main className="flex-grow">{children}</main>
            <footer className="bg-quaternary text-white p-4 mt-8">
                <div className="container mx-auto text-center">
                    <p>&copy; 2024 Jadu Digital - All rights reserved</p>
                </div>
            </footer>
        </div>
    )
}

export default Layout