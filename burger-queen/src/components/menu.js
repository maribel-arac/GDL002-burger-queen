import React, { Component } from "react";
import firebase from "../Firebase/initializeFirebase";
import OrderMenu from "../components/ordersMenu";
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
        <div className="container">
          <div className="row">

        <div className="col-md-6">
          {this.state.menu.map((menuDetail, i) => ( //en map va el nombre del import de json
            <div className="card">
              <div className="card-body">
                <img src={menuDetail.image} className="card-img-top" alt="" />
                <div className="card-body">
                  <h5 className="card-title">{menuDetail.item}</h5>
                  <p className="card-text" />
                  <ul>
                    {menuDetail.amount.map((quantity, index) => (
                      <div>
        
                          <button className="btn btn-primary btn-lg col-md-12" onClick={()=> {
                this.submit(menuDetail.item, menuDetail.amount[index], menuDetail.price[index])}} 
                type="submit">
                            {" "}
                            {quantity + " " + "$" + menuDetail.price[index]}

                          </button>
                       
                      </div>
                    ))}
                  </ul>

                </div>
              </div>
            </div>
          ))}
        </div>
              <div className="col">
                <OrderMenu menuOrder={this.state.ordenes} handleDelete={this.deleteLine} />
                <button className="btn btn-primary " onClick={this.sumTotalOrder}> Total: $ {this.state.total} </button>
                <BtnOrderKitchen orders = {this.state.ordenes}  />  
              </div>
          </div>
            
        </div>
                
       
    );
  }
}

export default ShowMenuWithFb;
