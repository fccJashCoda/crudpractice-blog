import React from 'react';

const ArticleCard = (props) => {
  console.log(props.location);
  const data = props.data || props.location.data;
  if (data) {
    return (
      <>
        <div className="card">
          <h3>{data.title}</h3>
          <p>{data.author}</p>
          <p>{data.body}</p>
        </div>
      </>
    );
  }

  return <h3>data.title</h3>;
};

export default ArticleCard;
