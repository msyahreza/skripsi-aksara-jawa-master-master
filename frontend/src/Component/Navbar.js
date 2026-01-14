/* eslint-disable jsx-a11y/anchor-is-valid */
/** @format */
// eslint-disable-next-line
import React, { Component }  from 'react';
import logo from "../SR-Logo.png";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Latihan1 from "../Pages/PageLatihan/Latihan1";
import Latihan2 from "../Pages/PageLatihan/Latihan2";
import Latihan3 from "../Pages/PageLatihan/Latihan3";
import Latihan4 from "../Pages/PageLatihan/Latihan4";
import Latihan5 from "../Pages/PageLatihan/Latihan5";
import Latihan6 from "../Pages/PageLatihan/Latihan6";
import Latihan7 from "../Pages/PageLatihan/Latihan7";
import Latihan8 from "../Pages/PageLatihan/Latihan8";
import Latihan9 from "../Pages/PageLatihan/Latihan9";
import Latihan10 from "../Pages/PageLatihan/Latihan10";
import Latihan11 from "../Pages/PageLatihan/Latihan11";
import Latihan12 from "../Pages/PageLatihan/Latihan12";
import Latihan13 from "../Pages/PageLatihan/Latihan13";
import Latihan14 from "../Pages/PageLatihan/Latihan14";
import Latihan15 from "../Pages/PageLatihan/Latihan15";
import Latihan16 from "../Pages/PageLatihan/Latihan16";
import Latihan17 from "../Pages/PageLatihan/Latihan17";
import Latihan18 from "../Pages/PageLatihan/Latihan18";
import Latihan19 from "../Pages/PageLatihan/Latihan19";
import Latihan20 from "../Pages/PageLatihan/Latihan20";
import Latihan21 from "../Pages/PageLatihan/LatihanSelesai";
import { Navbar, Container, Nav } from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";

function navbarHead() {
	return (
		<Router>
			<div className="App justify-content-end">
				<Navbar bg="myNavbar" variant="dark">
					<Navbar.Brand href="/home">
						{/* eslint-disable-next-line */}
						<img class="nav-img" src={logo} />
						{""}
						Aplikasi Aksara Jawa
					</Navbar.Brand>
					<Container />
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Nav className="justify-content-end" activeKey="/home">
						<Navbar.Collapse id="basic-navbar-nav">
							<Nav className="nav-menu me-auto">
								<Nav.Link as={Link} to={"/home"}>
									<a className="Link-menu">Home</a>
								</Nav.Link>
								<Nav.Link as={Link} to={"/about"}>
									<a className="Link-menu">Pengenalan</a>
								</Nav.Link>
								<Nav.Link as={Link} to={"/Latihan1"}>
									<a className="Link-menu">Latihan</a>
								</Nav.Link>
							</Nav>
						</Navbar.Collapse>
					</Nav>
				</Navbar>
			</div>
			<Routes>
				<Route path="/home" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/Latihan1" element={<Latihan1 />} />
				<Route path="/Latihan2" element={<Latihan2 />} />
				<Route path="/Latihan3" element={<Latihan3 />} />
				<Route path="/Latihan4" element={<Latihan4 />} />
				<Route path="/Latihan5" element={<Latihan5 />} />
				<Route path="/Latihan6" element={<Latihan6 />} />
				<Route path="/Latihan7" element={<Latihan7 />} />
				<Route path="/Latihan8" element={<Latihan8 />} />
				<Route path="/Latihan9" element={<Latihan9 />} />
				<Route path="/Latihan10" element={<Latihan10 />} />
				<Route path="/Latihan11" element={<Latihan11 />} />
				<Route path="/Latihan12" element={<Latihan12 />} />
				<Route path="/Latihan13" element={<Latihan13 />} />
				<Route path="/Latihan14" element={<Latihan14 />} />
				<Route path="/Latihan15" element={<Latihan15 />} />
				<Route path="/Latihan16" element={<Latihan16 />} />
				<Route path="/Latihan17" element={<Latihan17 />} />
				<Route path="/Latihan18" element={<Latihan18 />} />
				<Route path="/Latihan19" element={<Latihan19 />} />
				<Route path="/Latihan20" element={<Latihan20 />} />
				<Route path="/Latihan21" element={<Latihan21 />} />
			</Routes>
		</Router>
	);
}

export default navbarHead;
