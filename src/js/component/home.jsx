import React from "react";
import PropTypes from "prop-types";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	let date = new Date();

	return (
		<div className="container">
			<div>
				<PaginaActual />
			</div>

			<div className="d-flex justify-content-center">
				<Cajas
					cardTitle="Age"
					cardtext="Age is really only a number, that’s all. It has no limitations! The only limitations are the ones you set for yourself. It’s like Henry Ford said, “Whether you think you can, or you think you can’t–you’re right.” Those who are fearless, never grow old."
					img="https://www.cronica.com.ar/__export/1525194441651/sites/cronica/img/2018/05/01/abuelos_mimosos.jpg_792575817.jpg"
				/>
				<Cajas
					cardTitle="Is"
					cardtext="Those who dare to become their truest version will find a deeper purpose in life. And, when life has a purpose, time has no boundaries. When time has no boundaries, age really is just a number!"
					img="https://imagenesgenialesparapasar.com/wp-content/uploads/2017/11/hombre-viejo-haciendo-caras.jpg"
				/>
				<Cajas
					cardTitle="just"
					cardtext="Redefine aging is something we live and breathe at Chateau La Jolla. We believe retirement is an invitation to become the very best version of you."
					img="https://i.pinimg.com/originals/7f/e0/20/7fe02001954617340a3d6833e9b200e9.jpg"
				/>
				<Cajas
					cardTitle="A number"
					cardtext="In a world that often defines and limits people by age, when you believe anything is possible at any time, there is nothing that can stop you… not even your age."
					img="https://blog.tacoguru.com/wp-content/uploads/2018/08/Template-Blog-No-Carrusel-10.png"
				/>
			</div>
			<div>
				<footer className="bg-dark text-center text-white py-2">
					Copyright <i className="fas fa-copyright"></i> Your website
					{date.getFullYear()}
				</footer>
			</div>
		</div>
	);
};

function PaginaActual(props) {
	return (
		<div>
			<div>
				<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
					<a className="navbar-brand ms-3" href="#">
						My Page
					</a>
					<button
						className="navbar-toggler"
						type="button"
						data-toggle="collapse"
						data-target="#navbarNavDropdown"
						aria-controls="navbarNavDropdown"
						aria-expanded="false"
						aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div
						className="collapse navbar-collapse d-flex justify-content-end me-3"
						id="navbarNavDropdown">
						<ul className="navbar-nav">
							<li className="nav-item active">
								<a className="nav-link" href="#">
									Home{" "}
									<span className="sr-only">(current)</span>
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">
									About
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">
									Services
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">
									Contact
								</a>
							</li>
						</ul>
					</div>
				</nav>
			</div>
			<div className="jumbotron bg-light p-4">
				<h1 className="display-4">
					<strong>A warm welcome!</strong>
				</h1>
				<p className="lead">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
					do eiusmod tempor incididunt ut labore et dolore magna
					aliqua. Ut enim ad minim veniam, quis nostrud exercitation
					ullamco laboris nisi ut aliquip ex ea commodo consequat.
					Duis aute irure dolor in reprehenderit in voluptate velit
					esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
					occaecat cupidatat non proident, sunt in culpa qui officia
					deserunt mollit anim id est laborum.
				</p>
				<p className="lead">
					<a
						className="btn btn-primary btn-lg"
						href="#"
						role="button">
						Learn more
					</a>
				</p>
			</div>
		</div>
	);
}

function Cajas(props) {
	return (
		<div>
			<div className="card text-center col " style={{ width: "18rem" }}>
				<img
					className="card-img-top"
					src={props.img}
					alt="Card image cap"
					style={{ height: "20rem" }}></img>

				<div className="card-body">
					<h5 className="card-title">{props.cardTitle}</h5>
					<p className="card-text">{props.cardtext}</p>
					<a href="#" className="btn btn-primary">
						Go somewhere
					</a>
				</div>
			</div>
		</div>
	);
}
Cajas.propTypes = {
	cardTitle: PropTypes.string,
	cardtext: PropTypes.string,
	img: PropTypes.string,
};
export default Home;
