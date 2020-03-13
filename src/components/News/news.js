import React from "react";
import "./news.css";

const News = ({ articles }) => {
  console.log(articles);
  const article = articles.map(article => {
    return (
      <>
        <div className="article-container">
          <div className="article-header">
            <a href={article.url}>{article.title}</a>
          </div>
          <div className="article-body">{article.description}</div>
          <div className="article-footer">
            <div classname="source">{article.author}</div>
            <div classname="datepublished">{article.publishedAt}</div>
          </div>
        </div>
      </>
    );
  });
  return (
    <>
      <div className="articles">{article}</div>
    </>
  );
};

export default News;
