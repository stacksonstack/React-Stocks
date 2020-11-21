import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {

  async componentDidMount(){
    let response = await fetch("http://localhost:3000/stocks")
    let data = await response.json()
    this.setState({
      stocks: data
    })
  }

  state = {
    stocks: [],
    portfolio: []
  }

  renderPortfolio = (stockObj) => {
    let objIndex = this.state.portfolio.findIndex(({id}) => id === stockObj.id)
    
    if(objIndex === -1){
      this.setState({portfolio: [...this.state.portfolio, stockObj]})
    }

  }

  deleteStock = (stockObj) => {
    let objIndex = this.state.portfolio.findIndex(({id}) => id === stockObj.id)
    let newArray = [...this.state.portfolio]
    newArray.splice(objIndex, 1)
    console.log(objIndex)
      this.setState({portfolio: newArray})
  
      
  }

  render() {
    return (
      <div>
        <SearchBar/>

          <div className="row">
            <div className="col-8">

              <StockContainer stocks={this.state.stocks} portfolio={this.renderPortfolio}/>

            </div>
            <div className="col-4">

              <PortfolioContainer myStocks={this.state.portfolio} deleteStock={this.deleteStock}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
