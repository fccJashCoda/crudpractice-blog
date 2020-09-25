import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Axios from 'axios';

const API = 'http://localhost:5000/blog/article/';
const API_KEY = '?key=123';

const Article = (props) => {
  const [article, setArticle] = useState();
  const [loaded, setLoaded] = useState(false);
  const query = useParams();

  const fetch = `${API}${query.page}${API_KEY}`;
  useEffect(() => {
    if (!article) {
      console.log('no article found');
      const foo = async () => {
        const data = await Axios.get(fetch);
        console.log('data', data);
        console.log('typeof data', typeof data);
        setArticle(data);
        setLoaded(true);
      };
      foo();
    }
  }, []);

  console.log(article);
  return (
    <>
      <div className="card">
        {!loaded ? (
          <h1>Paladin</h1>
        ) : (
          <>
            <h3>{article.data.payload.title}</h3>
            <p>{article.data.payload.author}</p>
            <p>{article.data.payload.body}</p>
          </>
        )}
      </div>
    </>
  );
};

export default Article;
