import { NavLink } from "react-router-dom";

export function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
            <div className="container-fluid">
                <NavLink className="navbar-brand" to="/">React Blog Pages</NavLink>

                <div className="collapse navbar-collapse d-flex flex-row-reverse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <NavLink
                            className="nav-link"
                            aria-current="page"
                            to="/">
                            Home
                        </NavLink>

                        <NavLink
                            className="nav-link"
                            to="/about-us">
                            About us
                        </NavLink>

                        <NavLink
                            className="nav-link"
                            to="/posts-list">
                            Posts
                        </NavLink>
                    </div>
                </div>
            </div>
        </nav>
    )
};