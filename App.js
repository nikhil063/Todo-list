// import React,{useState} from 'react';
// import Todo from './Todo';
// import TodoForm from './TodoForm'

// function App (){

//     const [todos, setTodos] = useState([]);
  
//     const addTodo = (todo) => {
//       setTodos([...todos,todo])
//     };
  
//     const removeTodo = (id) => {
//       setTodos([...todos].filter((todo) => todo.id !== id));
//     };
  
//     const updateTodo = (todoId, newValue) => {
//       setTodos((prev) => prev.map((item) => (item.id === todoId ? newValue : item)));
//     };
 
//   return (
//     <>
//       <h1>To do list</h1>
//       <TodoForm onSubmit={addTodo} />
//       <Todo todos={todos} removeTodo={removeTodo} updateTodo={updateTodo} />
//     </>
//   );
// }

// export default App;

import { useState } from "react";
import Listing from "./Listing";

export default function App() {
  const [data, setData] = useState([]);
  const [name, setName] = useState();

  const handleSubmit = () => {
    let temp = name;
    setData([...data, temp]);
    setName("");
  };

  console.log("data", data);
  return (
    <div className="App">
      <label>
        Add Task:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <button onClick={handleSubmit}>Submit</button>
      <Listing data={data} setData={setData} />
    </div>
  );
}



