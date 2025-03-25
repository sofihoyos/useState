import React from 'react';

export const CounterLikeDislike = ({ likes, dislikes, handleLike, handleDislike }) => {
  return (
    <div className={`section`}>
      <h2>Like/Dislike Counters</h2>
      <button onClick={handleLike}>Like ({likes})</button>
      <button onClick={handleDislike}>Dislike ({dislikes})</button>
    </div>
  );
};
