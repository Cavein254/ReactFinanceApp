import React, { Component } from "react";
import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";
import News from "./components/News/news";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <News />
        <Footer />
      </div>
    );
  }
}

export default App;
