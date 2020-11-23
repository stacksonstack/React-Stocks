import React, { Component } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "../components/SearchBar";

class MainContainer extends Component {
  async componentDidMount() {
    let response = await fetch("http://localhost:3000/stocks");
    let data = await response.json();
    this.setState({
      stocks: data,
    });
  }

  state = {
    stocks: [],
    portfolio: [],
    filteredStocks: [],
  };

  filterByType = (e) => {
    let newArray = this.state.stocks.filter(
      ({ type }) => type === e.target.value
    );

    this.setState({
      filteredStocks: newArray,
    });
    console.log(this.state.filteredStocks);
  };

  sortStocks = (checked, value) => {
    let newArray = [...this.state.stocks];
    if (checked === false) return;
    if (value === "Alphabetically") {
      newArray.sort((a, b) => (a.name > b.name ? 1 : -1));
    } else if (value === "Price") {
      newArray.sort((a, b) => (a.price > b.price ? 1 : -1));
    } else {
      console.log("Something went wrong...");
    }

    this.setState({ stocks: newArray });
  };

  renderPortfolio = (stockObj) => {
    let objIndex = this.state.portfolio.findIndex(
      ({ id }) => id === stockObj.id
    );
    if (objIndex === -1) {
      this.setState({ portfolio: [...this.state.portfolio, stockObj] });
    }
  };

  deleteStock = (stockObj) => {
    let objIndex = this.state.portfolio.findIndex(
      ({ id }) => id === stockObj.id
    );
    let newArray = [...this.state.portfolio];
    newArray.splice(objIndex, 1);
    console.log(objIndex);
    this.setState({ portfolio: newArray });
  };

  render() {
    return (
      <div>
        <SearchBar
          sortStocks={this.sortStocks}
          filterByType={this.filterByType}
        />

        <div className="row">
          <div className="col-8">
            {this.state.filteredStocks.length === 0 ? (
              <StockContainer
                stocks={this.state.stocks}
                portfolio={this.renderPortfolio}
              />
            ) : (
              <StockContainer
                stocks={this.state.filteredStocks}
                portfolio={this.renderPortfolio}
              />
            )}
          </div>
          <div className="col-4">
            <PortfolioContainer
              myStocks={this.state.portfolio}
              deleteStock={this.deleteStock}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default MainContainer;
