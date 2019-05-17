import React from 'react';
import Paquetes from '../data/paquetes.json';

const ShowCombos = props => {
    return(
      <div className="row">
        <div className="col-sm-4">
            {Paquetes.map((combosDetail, index)=> //en map va el nombre del json
            <div className="card" key={index}> 
              <div className="card-body">
              <img src={combosDetail.image} className="card-img-top" alt="" />
              <div className="card-body">
                <h5 className="card-title">{combosDetail.item}</h5>
                <p className="card-text">$ {combosDetail.price}</p>
                <button href="#" className="btn btn-primary"> Add +</button>
              </div>
            </div>
            </div>
            )};
        </div>
        </div>
  )
}

export default ShowCombos;