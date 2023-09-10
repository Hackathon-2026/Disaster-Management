import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./navbar.css";
import Avatar from '@mui/material/Avatar';
import {NavLink} from "react-router-dom"

function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	return (
		<header>
			<h3>LOGO</h3>
			<nav ref={navRef}>
				<a href="/#">Home</a>
				<a href="/#">Donate</a>
				<a href="/#">News</a>
				<a href="/#">Emergency Contact</a>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
				
			</nav>
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button>
		
			{/* <div className='right'>
          <div className='nav_btn'>
            <NavLink to="/login">sign in</NavLink>
          </div>
          
          <Avatar className='avtar'/>
        </div> */}
		</header>
	);
}

export default Navbar;
