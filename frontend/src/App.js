/** @format */


// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import Home from "./Pages/Home";
// import About from "./Pages/About";
// import Profile from "./Pages/Profile";
// import ErrorPage from "./Pages/ErrorPage";
import Navbar from "./Component/Navbar";

function App() {
	return (
		<div className="App">
			<Navbar />
		</div>

		// <Navbar bg="myGray" variant="dark">
		// 		<Container>
					
		// 			<Container />
		// 			<Navbar.Toggle aria-controls="basic-navbar-nav" />
		// 			<Navbar.Collapse id="basic-navbar-nav">
		// 				<Nav className="nav-menu">
		// 					<Nav.Link href="#home">Home</Nav.Link>
		// 					<Nav.Link href="#link">Link</Nav.Link>
		// 				</Nav>
		// 			</Navbar.Collapse>
		// 		</Container>
		// 	</Navbar>
		// <div className="App">
		// 	<Navbar bg="myGray" variant="dark" sticky="top">
		// 		<Navbar.Brand href="#home">
		//   {/* eslint-disable-next-line */}
		//   <img class="nav-img" src={logo} />
		// 			Aplikasi Aksara Jawa
		// 		</Navbar.Brand>
		// 	</Navbar>
		// 	<div className="content">
		// 		Namaste
		// 		<br />
		// 	</div>
		// 	<button type="button" class="btn btn-outline-primary">
		// 		Primary
		// 	</button>
		// </div>
		// <Router>
		//   <nav>
		//     <Link to="/"> Home </Link>
		//     <Link to="/about"> About </Link>
		//     <Link to="/profile"> Profile </Link>
		//   </nav>
		//   <Routes>
		    // <Route path="/" element={<Home />} />
		    // <Route path="/about" element={<About />} />
		    // <Route path="/profile" element={<Profile />} />
		    // <Route path="*" element={<ErrorPage />} />
		//   </Routes>
		//   <div> Foooter </div>
		// </Router>
	);
}

export default App;
