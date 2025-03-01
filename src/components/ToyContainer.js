import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer( { toys, onHandleLike, onHandleDonate }) {

  const toysElement = toys.map((toy) => {
    return <ToyCard key={toy.id} name={toy.name} img={toy.image} likes={toy.likes} 
    id={toy.id} onHandleLike={onHandleLike} onHandleDonate={onHandleDonate} />
  })

  return (
    <div id="toy-collection">
      {/* Render the collection of ToyCards */}
      {toysElement}
    </div>
  );
}

export default ToyContainer;
