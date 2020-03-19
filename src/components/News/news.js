import React from "react";
import uuid from "react-uuid";
import NewsItem from "./subcomponents/newsItem";
import "./news.css";

const News = ({ articles }) => {
  const article = articles.map(article => {
    return <NewsItem article={article} key={uuid()} />;
  });
  return (
    <>
      <div className="articles">{article}</div>
    </>
  );
};

export default News;
