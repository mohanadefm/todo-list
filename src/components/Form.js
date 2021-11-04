import React, { useState } from "react";

function Form({ addTodo, list }) {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() === "") return; // or (inputValue.length === 0)

    const chechkTodo = list.filter((item) => item.title === inputValue);
    console.log(chechkTodo);
    if (chechkTodo.length > 0) {
      setInputValue("");
      return alert(`${inputValue} is already added!`);
    }

    addTodo({ title: inputValue, completed: false });
    setInputValue("");
  };

  return (
    <form className="ui form" onSubmit={handleFormSubmit}>
      <div className="ui grid center aligned">
        <div className="row">
          <div className="column five wide">
            <input
              className="todo"
              id="myInputID"
              value={inputValue}
              onChange={handleInputChange}
              type="text"
              placeholder="Enter todo..."
            />
          </div>

          {inputValue.length === 0 ? null : (
            <div className="column one wide">
              <button type="submit" className="ui button circular icon green">
                <i className="plus icon white"></i>
              </button>
            </div>
          )}
        </div>
      </div>
    </form>
  );
}

export default Form;
