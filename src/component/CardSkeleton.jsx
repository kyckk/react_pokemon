import React from 'react';
import '../static/Main.css';

const CardSkeleton = () => {
  return (
    <div className="card-skeleton">
      <div className="skeleton skeleton-image" />
      <div className="skeleton skeleton-title" />
      <div className="skeleton skeleton-text" />
      <div className="skeleton skeleton-text short" />
    </div>
  );
};

export default CardSkeleton;