import React, { Component } from "react";
import Aside from "./components/News/subcomponents/aside";
import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";
import News from "./components/News/news";
import "./App.css";

class App extends Component {
  state = {
    type: "ready",
    articles: []
  };

  getNews = async () => {
    let URL =
      "http://newsapi.org/v2/everything?" +
      "q=finance&" +
      "from=2020-03-12&" +
      "sortBy=popularity&" +
      "pageSize=20&" +
      "apiKey=" +
      `${process.env.REACT_APP_FINANCE_KEY}`;

    let response = await fetch(URL);
    let news = await response.json();
    let articles = news.articles;

    this.setState({
      articles
    });
  };

  componentDidMount() {
    this.getNews();
  }
  render() {
    return (
      <>
        <Header />
        <div className="shared-container">
          <Aside />
          <News articles={this.state.articles} />
        </div>
        <Footer />
      </>
    );
  }
}

export default App;
