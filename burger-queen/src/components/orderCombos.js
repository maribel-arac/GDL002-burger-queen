import React from "react";

export class OrderCombos extends React.Component {

    deleteItem = (e, i) => {
        this.props.handleDelete(e, i)
    }

    render(){
        console.log(this.props.menuOrder)
        const orders = this.props.menuOrder.map((combo, i) => {
            return(
                <div>
                    <ul key={i} className="list-group col-md-12">
                        <li className="list-group-item d-flex justify-content-between align-items-center col-md-12">
                            <p> {combo.item}</p>
                            <span className="btn btn-success">{"$"+ combo.price}</span>
                            <button id={i} onClick={(event)=> this.deleteItem(event, combo)}><i className=" btn btn-danger fas fa-trash-alt"></i></button>
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

export default OrderCombos;