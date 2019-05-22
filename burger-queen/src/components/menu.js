import React, { Component } from "react";
import firebase from "../Firebase/initializeFirebase";
import Menu from "../data/menu.json";
// import Counter from "../components/counter";
import Order from "../components/orders";

class ShowMenuWithFb extends Component {
  constructor() {
    super();
    this.state = {
      menu: [],
      paquetes: [],
      ordenes: []
    };
  }

  submit(item, amount, cost){ //muestra la comanda
    const orderMenu ={
      item: item,
      amount: amount, 
      price: cost
    }
    this.setState({
      ordenes:[...this.state.ordenes,orderMenu]
    })
  }

  componentDidMount() {
    const MenuRef = firebase.database().ref("Menu"); //este llama los datos de FB
    MenuRef.on("value", snapshot => {
      let menus1 = snapshot.val();
      let newStateMenu = [];
      for (let menu2 in menus1) {
        newStateMenu.push({
          id: menu2,
          image: menus1[menu2].image,
          item: menus1[menu2].item,
          speciality: menus1[menu2].speciality,
          amount: menus1[menu2].amount,
          price: menus1[menu2].price
        });
      }
      this.setState({
        menu: newStateMenu //aqui es donde se guarda en el estado lo que FB manda
      });
    });
  }

  render() {
    return (
        <div class="container">
          <div class="row">

        <div className="col-md-6">
          {this.state.menu.map((menuDetail, i) => ( //en map va el nombre del import de json
            <div className="card">
              <div className="card-body">
                <img src={menuDetail.image} className="card-img-top" alt="" />
                <div className="card-body">
                  <h5 className="card-title">{menuDetail.item}</h5>
                  <p className="card-text" />
                  <ul>
                    {menuDetail.amount.map((quantity, price) => (
                      <div>
        
                          <button className="btn btn-primary btn-lg col-md-12" onClick={()=> {
                this.submit(menuDetail.item, menuDetail.amount[quantity], menuDetail.price[price])}} 
                type="submit">
                            {" "}
                            {quantity + " " + "$" + menuDetail.price[price]}

                          </button>
                       
                      </div>
                    ))}
                  </ul>

                </div>
              </div>
            </div>
          ))}
        </div>
              <div class="col">
              <Order menuOrder={this.state.ordenes} /> 
            </div>
            </div>
            
          </div>
                
       
    );
  }
}

export default ShowMenuWithFb;
