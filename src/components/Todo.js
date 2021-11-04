import React, { useState } from "react";
import "../index.css";

function Todo({ title, completed, removeTodo, editTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [value, setValue] = useState(title);
  const [tempValue, setTempValue] = useState(title);
  const [isCompleted, setCompleted] = useState(completed);

  const handleDivDoubleClick = () => {
    setIsEditing(true);
  };

  const handleInputKeyDown = (e) => {
    const key = e.keyCode;

    if (key === 13) {
      editTodo({ title: tempValue });
      setValue(tempValue);
      setIsEditing(false);
    } else if (key === 27) {
      setTempValue(value);
      setIsEditing(false);
    }
  };

  const handleInputOnChange = (e) => {
    setTempValue(e.target.value);
  };

  const handleButtonClick = () => {
    // setCompleted(!isCompleted); // not guarantee get staus of vlaue
    setCompleted((oldCompleted) => {
      const newState = !oldCompleted;
      editTodo({ completed: newState });
      return newState;
    });
    // if (!isCompleted) {
    //   setCompleted(true);
    // } else {
    //   setCompleted(false);
    // }
  };

  return (
    <div className="row">
      {isEditing ? (
        <div className="column seven wide">
          <div className="ui input fluid">
            <input
              onChange={handleInputOnChange}
              onKeyDown={handleInputKeyDown}
              autoFocus={true}
              value={tempValue}
            />
          </div>
        </div>
      ) : (
        <>
          <div
            className="column five wide"
            onDoubleClick={handleDivDoubleClick}
          >
            <h2 className={"ui header " + (isCompleted ? "blue" : "")}>
              {value}
            </h2>
          </div>
          <div className="column one wide">
            <button
              className={
                "ui button circular icon " + (isCompleted ? "gray" : "blue")
              }
              onClick={handleButtonClick}
            >
              <i className="white check icon"></i>
            </button>
          </div>
          <div className="column one wide">
            <button
              className="ui button circular icon red"
              onClick={removeTodo}
            >
              <i className="white remove icon"></i>
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Todo;
