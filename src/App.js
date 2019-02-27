import './App.css';

import {
	Collapse,
	// DropdownItem,
	// DropdownMenu,
	// DropdownToggle,
	Nav,
	NavItem,
	NavLink,
	Navbar,
	// NavbarBrand,
	NavbarToggler
	// UncontrolledDropdown
} from 'reactstrap';
import React, { Component } from 'react';

// import logo from './logo.svg';
var countDownDate = new Date('Jan 5, 2021 15:37:25').getTime();

class App extends Component {
	constructor(props) {
		super(props);

		this.toggle = this.toggle.bind(this);
		this.state = {
			isOpen: false
		};
	}
	toggle() {
		this.setState({
			isOpen: !this.state.isOpen
		});
	}
	data_reactid = () => {
		var text = '.';
		var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

		for (var i = 0; i < 10; i++) text += possible.charAt(Math.floor(Math.random() * possible.length));

		return text;
	};
	countDown = () => {
		var x = setInterval(function() {
			// Get todays date and time
			var now = new Date().getTime();

			// Find the distance between now and the count down date
			var distance = countDownDate - now;

			// Time calculations for days, hours, minutes and seconds
			var days = Math.floor(distance / (1000 * 60 * 60 * 24));
			var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
			var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
			var seconds = Math.floor((distance % (1000 * 60)) / 1000);

			// Display the result in the element with id="demo"
			// document.getElementById("demo").innerHTML = days + "d " + hours + "h "
			// + minutes + "m " + seconds + "s ";
			console.log(days, hours, minutes, seconds);

			// If the count down is finished, write some text
			if (distance < 0) {
				clearInterval(x);
				// return JSON.stringify(days, hours, minutes, seconds);
				// console.log(days, hours, minutes, seconds);
				// document.getElementById("demo").innerHTML = "EXPIRED";
			}
		}, 1000);
	};
	render() {
		// this.countDown();
		return (
			<div>
				<main role="main" data-reactid={this.data_reactid()} className="vh-100">
					<div id="myCarousel" className="carousel slide" data-ride="carousel">
						<ol className="carousel-indicators">
							<li data-target="#myCarousel" data-slide-to="0" className="active" />
							<li data-target="#myCarousel" data-slide-to="1" />
							{/* <li data-target="#myCarousel" data-slide-to="2"></li> */}
						</ol>
						<div className="carousel-inner">
							<div className="carousel-item active">
								<svg
									className="bd-placeholder-img"
									width="100%"
									height="100%"
									xmlns="http://www.w3.org/2000/svg"
									preserveAspectRatio="xMidYMid slice"
									focusable="false"
									role="img"
								>
									<rect width="100%" height="100%" fill="#777" />
								</svg>
								<div className="container">
									<div className="carousel-caption text-left">
										<h1>Example headline.</h1>
										<p>
											Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit
											non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies
											vehicula ut id elit.
										</p>
										<p>
											<a className="btn btn-lg btn-primary" href="/" role="button">
												Sign up today
											</a>
										</p>
									</div>
								</div>
							</div>
							<div className="carousel-item">
								<svg
									className="bd-placeholder-img"
									width="100%"
									height="100%"
									xmlns="http://www.w3.org/2000/svg"
									preserveAspectRatio="xMidYMid slice"
									focusable="false"
									role="img"
								>
									<rect width="100%" height="100%" fill="#777" />
								</svg>
								<div className="container">
									<div className="carousel-caption">
										<h1>Another example headline.</h1>
										<p>
											Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit
											non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies
											vehicula ut id elit.
										</p>
										<p>
											<a className="btn btn-lg btn-primary" href="/" role="button">
												Learn more
											</a>
										</p>
									</div>
								</div>
							</div>
						</div>
						<a className="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
							<span className="carousel-control-prev-icon" aria-hidden="true" />
							<span className="sr-only">Previous</span>
						</a>
						<a className="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
							<span className="carousel-control-next-icon" aria-hidden="true" />
							<span className="sr-only">Next</span>
						</a>
					</div>

					<Navbar color="light" expand="md" className="mb-5">
						<div className="container">
							{/* <NavbarBrand href="/">Exmo</NavbarBrand> */}
							<NavbarToggler onClick={this.toggle} />
							<Collapse isOpen={this.state.isOpen} navbar>
								<Nav className="ml-auto" navbar>
									<NavItem>
										<NavLink href="/">Home</NavLink>
									</NavItem>
									<NavItem>
										<NavLink href="/components/">Profile</NavLink>
									</NavItem>
									<NavItem>
										<NavLink href="/components/">Catalogue</NavLink>
									</NavItem>
									<NavItem>
										<NavLink href="/components/">Submit</NavLink>
									</NavItem>
								</Nav>
							</Collapse>
						</div>
					</Navbar>

					<div className="container text-center">
						<h1 className="big-title">EXMO</h1>
					</div>
				</main>

				<footer className="blog-footer footer mt-auto py-3">
					<p>Template build for Exmo 2019 &copy;.</p>
					<p>Back to top</p>
				</footer>
			</div>
		);
	}
}

export default App;
