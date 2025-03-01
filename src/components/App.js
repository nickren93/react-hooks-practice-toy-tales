import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toys, setToys] = useState([])

  useEffect(() => {
    fetch("http://localhost:3001/toys")
    .then(resp => resp.json())
    .then(data => setToys(data))
  }, [])


  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  function handleLike(id, likes){
    fetch(`http://localhost:3001/toys/${id}`, {
      method: "PATCH",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({likes: likes+1})
    })
    .then(resp => resp.json())
    .then(data => {
      const updatedToys = toys.map((toy) => {
        if(toy.id == data.id){
          return {...toy, likes: toy.likes + 1}
        }else{
          return toy
        }
      })
      setToys(updatedToys)
    })
  }

  function handleDonate(id){
    fetch(`http://localhost:3001/toys/${id}`, {
      method: "DELETE"
    })
    const updatedToys = toys.filter(toy => {
      return toy.id != id
    })
    setToys(updatedToys)
  }

  function handleSubmit(newToy){
    fetch(`http://localhost:3001/toys/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newToy)
    })
    .then(resp => resp.json())
    .then(data => {
      const updatedToys = [...toys, data]
      setToys(updatedToys)
    })
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm onHandleSubmit={handleSubmit} /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toys={toys} onHandleLike={handleLike} onHandleDonate={handleDonate} />
    </>
  );
}

export default App;
