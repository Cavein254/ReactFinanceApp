import React from "react";
import "./news.css";

const News = ({ articles }) => {
  console.log(articles);
  const article = articles.map(article => {
    return (
      <>
        <div className="article-container">
          <div className="article-header">{article.title}</div>
          <div className="article-body">{article.description}</div>
          <div className="article-footer"></div>
        </div>
      </>
    );
  });
  return (
    <>
      <div>{article}</div>
    </>
  );
};

export default News;
