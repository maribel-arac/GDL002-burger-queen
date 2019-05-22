import React, { Component } from "react";
import firebase from "../Firebase/initializeFirebase";
// import Paquetes from '../data/paquetes.json';
// import Counter from "../components/counter";

class ShowMenuWithFb extends Component {
	constructor() {
		super();
		this.state = {
			menu: [],
			paquetes: [],
			ordenes: []
		};
	}

	componentDidMount() {
		const MenuRef = firebase.database().ref("Paquetes");
		MenuRef.on("value", snapshot => {
			let menus1 = snapshot.val();
			let newStateMenu = [];
			for (let menu2 in menus1) {
				newStateMenu.push({
					id: menu2,
					image: menus1[menu2].image,
					item: menus1[menu2].item,
					price: menus1[menu2].price
				});
			}
			this.setState({
				paquetes: newStateMenu
			});
		});
	}

	render() {
		return (
			<div className="row">
				<div className="col-sm-4">
					{this.state.paquetes.map((combosDetail,index ) => ( //en map va el nombre del json
			
						<div className="card" key={index}>
							<div className="card-body">
								<img
									src={combosDetail.image}
									className="card-img-top"
									alt=""
								/>
								<div className="card-body">
									<h5 className="card-title">
										{combosDetail.item}
									</h5>
									<p className="card-text">
										$ {combosDetail.price}
									</p>
									{/*<Counter />*/}
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		);
	}
}

export default ShowMenuWithFb;
