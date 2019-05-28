import React from 'react';
import {NavLink} from 'react-router-dom';

const Navbar = (props) => (

	<nav>
		<h2 class="logo"><a class="logo-link" href="#">{props.name}</a></h2>
		<ul class="nav-menu">
			<li> <NavLink className="nav-menu__link" exact to="/">Inicio</NavLink></li>
			<li> <NavLink className="nav-menu__link" to="/menu">Menú</NavLink></li>
			<li> <NavLink className="nav-menu__link" to="/combos">Paquetes</NavLink></li>
		</ul>
	</nav>
);


export default Navbar;