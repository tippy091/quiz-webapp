import React from "react"
import { NavLink } from "react-router-dom"
import { HiAcademicCap } from "react-icons/hi2";

const Header = () => {
	return (
		<nav className="navbar navbar-expand-lg">
			<div className="container-fluid">
				<HiAcademicCap size={30} />
				<NavLink className="navbar-brand mx-10" to={"/"}>
					E-Student
				</NavLink>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarNav"
					aria-controls="navbarNav"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarNav">
					<ul className="navbar-nav ml-auto">
						<li className="nav-item">
							<NavLink className="nav-link" to={"/"}>
								Home
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink className="nav-link" to={"/admin"}>
								Admin
							</NavLink>
						</li>

						<li className="nav-item">
							<NavLink className="nav-link" to={"/quiz-stepper"}>
								Take Quiz
							</NavLink>
						</li>
						
					</ul>
				</div>
			</div>
		</nav>
	)
}

export default Header
