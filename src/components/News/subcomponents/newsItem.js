import React from "react";

const NewsItem = ({ article }) => {
  return (
    <>
      <div className="article-container">
        <div className="article-header">
          <a href={article.url}>{article.title}</a>
        </div>
        <div className="article-body">{article.description}</div>
        <div className="article-footer">
          <div className="source">{article.author}</div>
          <div className="datepublished">{article.publishedAt}</div>
        </div>
      </div>
    </>
  );
};

export default NewsItem;
