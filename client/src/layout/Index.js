import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';

import ArticleCard from '../components/ArticleCard';

const API = 'http://localhost:5000/blog/articles?key=123';

const Index = () => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    Axios.get(API)
      .then(({ data }) =>
        setArticles((articles) => [...articles, ...data.payload])
      )
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <h3>Index</h3>
      {articles.map((article) => (
        <>
          <Link
            to={{ pathname: `../${article._id}`, data: article._id }}
            key={article._id}
          >
            <ArticleCard data={article} />
          </Link>
        </>
      ))}
    </>
  );
};

export default Index;
