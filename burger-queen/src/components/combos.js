import React, { Component } from "react";
import firebase from "../Firebase/initializeFirebase";
import OrderCombos from "../components/orderCombos";
import BtnOrderKitchen from "../components/btnkitchen";

class ShowMenuWithFb extends Component {
	constructor() {
		super();
		this.state = {
			menu: [],
			paquetes: [],
			ordenes: [],
			total: 0
		};

		this.submit = this.submit.bind(this);
    	this.deleteLine = this.deleteLine.bind(this);
    	this.sumTotalOrder = this.sumTotalOrder.bind(this)
	}

	submit(item,cost){
		const orderMenu = {
			item:item,
			price: cost
		}
		this.setState({
			ordenes:[...this.state.ordenes, orderMenu]
		})
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
				paquetes: newStateMenu //aqui es donde se guarda en el estado lo que FB manda
			});
		});
	}


	//suma los items en la comanda
  sumTotalOrder () {
        const priceArray = this.state.ordenes.map((el) => el.price)
        const items = priceArray.reduce((sum,result)=>{
            return sum + result;
        });
        this.setState({
            total: items
        });
    };


// //borra item en la comanda
  deleteLine(e, menu) {
            e.preventDefault(e)
            this.setState(prevState => ({
                ordenes: prevState.ordenes.filter(element => element != menu )
            }));
          }

	render() {
		return (
			<div className="row">
				<div className="col-sm-6">
					{this.state.paquetes.map((combosDetail,index ) => ( //en map va el nombre del json
			
						<div className="card" key={index}>
							<div className="card-body">
								<img
									src={combosDetail.image}
									className="card-img-top"
									alt=""
								/>

								
								<button className="btn btn-primary btn-lg col-md-12" onClick={() => {
									this.submit(combosDetail.item, combosDetail.price);
									}
								} type="submit">

									<h5 className="card-title">
										{combosDetail.item}
									</h5>
									<p className="card-text">
										 {"$" +combosDetail.price}
									</p>
									
								</button>
							</div>
						</div>
					))}
				</div>

					<div className="col">
                		<OrderCombos menuOrder={this.state.ordenes} handleDelete={this.deleteLine} />
                		<button className="btn btn-primary" onClick={this.sumTotalOrder}> Total: $ {this.state.total} </button>
                		<BtnOrderKitchen orders = {this.state.ordenes}  /> 
              		</div>
			</div>
		);
	}
}

export default ShowMenuWithFb;
