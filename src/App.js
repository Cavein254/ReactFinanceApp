import React, { Component } from "react";
import Aside from "./components/News/subcomponents/aside";
import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";
import News from "./components/News/news";
import "./App.css";
import { Item } from "semantic-ui-react";

class App extends Component {
  state = {
    type: "ready",
    articles: []
  };

  getNews = async () => {
    let TOPIC = "Finance";
    let API_KEY = "fa22f16f499743189d15691ded47f60b";

    let URL =
      "http://newsapi.org/v2/everything?" +
      "q=finance&" +
      "from=2020-03-12&" +
      "sortBy=popularity&" +
      "pageSize=20&" +
      "apiKey=fa22f16f499743189d15691ded47f60b";
    let response = await fetch(URL);
    let news = await response.json();
    let articles = news.articles;

    this.setState({
      articles
    });
  };

  componentDidMount() {
    this.getNews();
    console.log("monted App");
  }
  render() {
    const { articles } = this.state;
    return (
      <>
        <Header />
        <Aside />
        <News articles={this.state.articles} />
        <Footer />
      </>
    );
  }
}

export default App;
