import React from "react";

type CardProps = {
  title: string;
  index: number;
  choiceHandler: (index: number) => void;
};

const Card = ({ title, index, choiceHandler }: CardProps) => {
  return (
    <div className="column is-one-quarter is-clickable">
      <div className="card mt-3" onClick={() => choiceHandler(index)}>
        <div className="card-content has-text-centered">
        <h3>{title}</h3>
        </div>
      </div>
    </div>
  );
};

export default Card;
