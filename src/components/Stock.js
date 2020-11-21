import React from 'react'

const Stock = ({stock, portfolio}) => (
  <div onClick={()=> portfolio(stock)}>

    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{
            //Company Name
            stock.name
          }</h5>
        <p className="card-text">{
            //ticker: stock price
            stock.ticker
          }</p>
      </div>
    </div>


  </div>
);

export default Stock
