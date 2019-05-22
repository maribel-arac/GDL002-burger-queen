import React from "react";

export class Order extends React.Component{
    render(){
        const orders = this.props.menuOrder.map((menu, i) => {
            return(
                <div>
                    <ul key={i} className="list-group col-md-12">
                        <li className="list-group-item d-flex justify-content-between align-items-center col-md-12">
                            <p>{menu.item}</p>
                            <p>{menu.amount}</p>
                            <span className="btn btn-success">{"$"+ menu.price}</span>
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