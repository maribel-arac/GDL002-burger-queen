import React from "react";

export class Order extends React.Component {

    deleteItem = (e, i) => {
        this.props.handleDelete(e, i)
    }

    render(){
        const orders = this.props.menuOrder.map((menu, i) => {
            return(
                <div>
                    <ul key={i} className="list-group col-md-12">
                        <li className="list-group-item d-flex justify-content-between align-items-center col-md-12">
                            <p> {menu.item + " "+ menu.amount}</p>
                            <span className="btn btn-success">{"$"+ menu.price}</span>
                            <button id={i} onClick={(event)=> this.deleteItem(event, menu)}><i className=" btn btn-danger fas fa-trash-alt"></i></button>
                        </li>
                    </ul>
                </div>
            )
        })
        return(
            orders
        )
    }
}

export default Order;