import React, { useState } from "react";
import "./task2.css";
const Task2 = () => {
  const [count, setCount] = useState(0); // Declaring the state variable which is getting changed
  const digIncrementFunc = () => {
    setCount(count + 1);
  };
  const digDecrementFunc = () => {
    if (count > 0) {
      //Necessary to check whether count>0 or not
      setCount(count - 1);
    } else {
      alert("Sorry, zero limit reached"); //Alert box will appear when count goes <0
    }
  };
  const deleteDigitFunc = () => {
    setCount(0); //setCount set to 0 after clicking on delete icon
  };
  return (
    <>
      <div className="t2MainContainer">
        <div className="t2container">
          <div className="t2ContainerPart1">
            <h1>{count}</h1>
          </div>
          <div className="t2ContainerPart2">
            <div className="t2ContainerPart2Inside1">
              <button onClick={digIncrementFunc} className="t2Increment">
                Increment
              </button>
              <button onClick={digDecrementFunc} className="t2Decrement">
                Decrement
              </button>
            </div>
            <div className="t2ContainerPart2Inside2">
              <i
                onClick={deleteDigitFunc}
                className="fa-solid fa-trash"
                style={{ color: "#FDFDFD" }}
              ></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Task2;
