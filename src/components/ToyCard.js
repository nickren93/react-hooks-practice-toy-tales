import React from "react";

function ToyCard( { name, img, likes, id, onHandleLike, onHandleDonate}) {
  return (
    <div className="card">
      <h2>{name}</h2>
      <img
        src={img}
        alt={name}
        className="toy-avatar"
      />
      <p>{likes} Likes </p>
      <button className="like-btn" onClick={()=>onHandleLike(id, likes)}>
        Like {"<3"}
      </button>
      <button className="del-btn" onClick={()=>onHandleDonate(id)}>
        Donate to GoodWill
      </button>
    </div>
  );
}

export default ToyCard;
