import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {

  
  renderMyStocks=()=>{
    return this.props.myStocks.map((stock) => <Stock key={stock.id} stock={stock} portfolio={this.props.deleteStock}/>)
  }
  render() {
    return (
      <div>
        <h2>My Portfolio</h2>
          {
            //render your portfolio stocks here
            this.renderMyStocks()
          }
      </div>
    );
  }

}

export default PortfolioContainer;
