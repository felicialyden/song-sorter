import React from "react";

type CardProps = {
  title: string;
};

const Card = ({ title }: CardProps) => {
  return (
    <div className="column is-one-quarter">
      <div className="card mt-3">
        <div className="card-content has-text-centered">
        <h3>{title}</h3>
        </div>
      </div>
    </div>
  );
};

export default Card;
