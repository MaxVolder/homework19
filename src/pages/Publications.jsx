import React from 'react';

const DEADPOOL_IMAGE = "https://wallpapers.com/images/featured-full/deadpool-tzhfez1w8ud2z8aw.jpg";
const RYAN_IMAGE = "https://media.cnn.com/api/v1/images/stellar/prod/150603102609-green-lantern-ryan-reynolds.jpg?c=16x9&q=h_720,w_1280,c_fill/f_webp";

const Post = ({ author, content, image, date }) => {  
  return (
    <div className="post">
      <div className="post-header">
        <img src={author.photo} alt={author.name} className="author-photo" />
        <div className="author-details">
          <h3>{author.name}</h3>
          <span className="nickname">{author.nickname}</span>
        </div>
      </div>
      <p className="post-content">{content}</p>
      {image && <img src={image} alt="Post" className="post-image" />}
      <span className="post-date">{date}</span>
    </div>
  );
};

const Publications = () => {  
  const author = {
    name: "Wade Wilson",
    photo: DEADPOOL_IMAGE,
    nickname: "@deadpool"
  };

  const content = "I'll come back and kill you Rayan, if you do that again.. Cheers Canada!";
  const image = RYAN_IMAGE;
  const date = new Date().toString();  

  return (
    <div className="app">
      <Post author={author} content={content} image={image} date={date} />
    </div>
  );
};

export default Publications;
