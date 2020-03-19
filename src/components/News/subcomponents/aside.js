import React, { Component } from "react";
import "./aside.css";
export default class Aside extends Component {
  state = {
    search: ""
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  getNewsSearch = async e => {
    e.preventDefault();
    let URL =
      "http://newsapi.org/v2/everything?" +
      "q=" +
      `${this.state.search}` +
      "&" +
      "from=2020-03-12&" +
      "sortBy=popularity&" +
      "pageSize=20&" +
      "apiKey=" +
      `${process.env.REACT_APP_FINANCE_KEY}`;

    let response = await fetch(URL);
    let searchResponse = await response.json();
    let searchResults = searchResponse.articles;
    // console.log(searchResults);
    this.setState({
      articles: searchResults
    });
    console.log(this.state.articles);
  };
  render() {
    return (
      <>
        <aside>
          <form onSubmit={this.getNewsSearch}>
            <div className="form-group">
              <label htmlFor="stocksymbol">Enter Stock Symbol</label>
              <input
                type="text"
                placeholder="Stock Symbol"
                name="search"
                value={this.state.name}
                onChange={this.onChange}
              />
              <button type="submit">Search</button>
            </div>
          </form>
          <div className="quick-links">
            <h4>Quick Links</h4>
            <nav>
              <ul className="link-item">
                <li>
                  <a href="http://seekingalpha.com/" className="link">
                    Seeking Alpha
                  </a>
                </li>
                <li>
                  <a href="https://www.bloomberg.com/markets" className="link">
                    Bloomberg
                  </a>
                </li>
                <li>
                  <a href="https://www.forbes.com/money/" className="link">
                    Forbes
                  </a>
                </li>
                <li>
                  <a href="http://www.mymoney.gov/" className="link">
                    MyMoney
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </aside>
      </>
    );
  }
}
