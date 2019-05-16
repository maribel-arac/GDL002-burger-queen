import React from 'react';
import Menu from '../data/menu.json';

const ShowMenu = props => {
    return(
      <div className="row">
        <div className="col-sm-4">
            {Menu.map((menuDetail, index)=> //en map va el nombre del json
            <div className="card" key={index}> 
              <div className="card-body">
              <img src={menuDetail.image} className="card-img-top" alt="" />
              <div className="card-body">
                <h5 className="card-title">{menuDetail.item}</h5>
                <p className="card-text"><ul>{menuDetail.price.map((price) => <li>{"$" +price}</li>)}</ul></p>
                <button href="#" className="btn btn-primary"> Add +</button>
              </div>
            </div>
            </div>
            )};
        </div>
        </div>
  )
}

export default ShowMenu;