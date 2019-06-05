import React, { Component } from 'react';
import firebase from "../Firebase/initializeFirebase";

class Kitchen extends Component {
constructor(){
	super();

	this.state = {
		ordersSent: [] //ordenes que se van mostrar en la cocina
	}
}

componentWillMount(){
	function snapshotToArray(ss){ //este parametro ss se va iterar con un forEach
		let orders = [] //aqui se van a guardar las ordenes en arrays
		
		ss.forEach(order => { //el parametro regresa el array con los items de las ordenes en arrays distintos y despues sacarlos, los manda a la array madre[orders]
			const items = order.val();
			items.key = order.key;

			orders.push(items);
			console.log(orders)
	});

		return orders
	}

	const orderFirebaseRef = firebase.database().ref();
	const orderFoodRef = orderFirebaseRef.child("KitchenOrders/"); //el child es el nombre de la rama donde va a tomar la info
	orderFoodRef.on("value", snapshot =>{
		const arrayOrders =  snapshotToArray(snapshot);//la funcion esta creada arriba

		this.setState({ // se van guardando los arrays iterados con el forEach
			ordersSent : arrayOrders //se llama al estado que esta arriba(linea8)

		})

})
}


render() {
	return(
		<div className="card">
		{this.state.ordersSent.map((orders, i) => //en el primer parametro se guardael array con UNA orden / en el I se guarda el num de la iteracion
			<div>
				<div className="card-header">
	    		Order #{i+1}
	  			</div>
		  		<div className="card-body">
		  			{orders.map((item, i) => //este segun map itera en los items de la orden
		    		<blockquote className="blockquote mb-0">
			      		<p>{item.amount + " " + item.item}</p>
			 
		    		</blockquote>
		    		)}
		  		</div>
	  		</div>
			)}
		</div>
		)
}

}

export default Kitchen;