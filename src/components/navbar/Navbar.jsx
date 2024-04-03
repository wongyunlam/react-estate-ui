import "./navbar.scss";
import { useState, useEffect } from "react";

export default function Navbar() {
	return (
		<nav>
			<div className="left">
				<a>
					<img
						src="/logo.png"
						alt="logo"
					/>
					<span>Jay Estate</span>
				</a>
				<a href="">Home</a>
				<a href="">About</a>
				<a href="">Contact</a>
				<a href="">Agents</a>
			</div>
			<div className="right">
				<a href="">Sign In</a>
				<a href="">Sign Up</a>
			</div>
		</nav>
	);
}
