import React, { useState } from 'react';

function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : '');

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSubmit({
      id: Math.random(),
      text: input
    });
    setInput('');
  };

  return (
    <form onSubmit={handleSubmit} >
      {props.edit ? (
        <>
          <input placeholder='Update your item' value={input} onChange={handleChange} name='text'/>
          <button > Update </button>
        </>
      ) : (
        <>
          <input placeholder='Add an item' value={input} onChange={handleChange} name='text'/>
          <button > Add todo </button>
        </>
      )}
    </form>
  );
}

export default TodoForm;