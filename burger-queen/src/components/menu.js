import React, { Component } from "react";
import firebase from "../Firebase/initializeFirebase";
import Menu from "../data/menu.json";
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
    const MenuRef = firebase.database().ref("Menu");
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
        menu: newStateMenu
      });
    });
  }

  render() {
    return (
      <div className="row">
        <div className="col-sm-4">
          {this.state.menu.map((
            menuDetail //en map va el nombre del import de json
          ) => (
            <div className="card">
              <div className="card-body">
                <img src={menuDetail.image} className="card-img-top" alt="" />
                <div className="card-body">
                  <h5 className="card-title">{menuDetail.item}</h5>
                  <p className="card-text" />
                  <ul>
                    {menuDetail.amount.map((quantity, price) => (
                      <div>
                        <div className="form-check" />
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="defaultCheck1"
                        />
                        <label className="form-check-label" for="defaultCheck1">
                          {" "}
                          <li>
                            {" "}
                            {quantity + " " + "$" + menuDetail.price[price]}
                          </li>
                        </label>
                      </div>
                    ))}
                  </ul>

                  { /*<Counter /> */ }
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
