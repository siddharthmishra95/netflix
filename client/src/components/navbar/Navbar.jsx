import "./navbar.scss"
import { useState } from 'react'
import { Search, Notifications, ArrowDropDown } from "@material-ui/icons"
import { Link } from "react-router-dom"

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false)

    window.onscroll = () => {
        setIsScrolled(window.pageYOffset === 0 ? false : true);
        return () => (window.onscroll = null);
    };

    return (
        <div className={isScrolled ? "navbar scrolled" : "navbar"} >
            <div className="container">
                <div className="left">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/6/67/NewNetflixLogo.png" alt="" />
                    <Link to="/" className="link">
                        <span>Homepage</span>
                    </Link>
                    <Link to="/series" className="link">
                        <span>Series</span>
                    </Link>
                    <Link to="/movies" className="link">
                        <span>Movies</span>
                    </Link>
                    <span>New and Popular</span>
                    <span>My List</span>
                </div>
                <div className="right">
                    <Search className="icon"></Search>
                    <span>KID</span>
                    <Notifications className="icon"></Notifications>
                    <img src="https://image.freepik.com/free-vector/comic-superhero-standing-silhouette_23-2147501843.jpg?1" alt="" />
                    <div className="profile">
                        <ArrowDropDown className="icon"></ArrowDropDown>
                        <div className="options">
                            <span>Settings</span>
                            <span>Logout</span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Navbar
