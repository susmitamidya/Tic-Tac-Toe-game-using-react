import React, { useRef, useState } from "react";
import "./CSS/Board.css";
import cross_icon from './Assets/cross.png'
import circle_icon from './Assets/circle.png'

 let data = ["", "", "", "", "", "", "", "", ""];

const Board = () => {

  let [count, setCount] = useState(0);
  let [lock,setLock] = useState(false);
  let title = useRef(null);
  let box1 = useRef(null);
  let box2 = useRef(null);
  let box3 = useRef(null);
  let box4 = useRef(null);
  let box5 = useRef(null);
  let box6 = useRef(null);
  let box7 = useRef(null);
  let box8= useRef(null);
  let box9 = useRef(null);

  let boxes = [box1, box2, box3, box4, box5, box6, box7, box8, box9];

  const toggle = (e,num) => {
    if (lock) {
      return 0;
    }
    if (count % 2 === 0) {
      e.target.innerHTML = `<img src='${cross_icon}' alt="."/>`;
      data[num]="x";
      setCount(++count);
    } else {
      e.target.innerHTML = `<img src='${circle_icon}' alt="."/>`;
      data[num]="o";
      setCount(++count);
    }
    checkwin();
    console.log(data);
  };

  const checkwin = () =>{
    if (data[0]===data[1] && data[1]===data[2] && data[2] !== "") {
      won(data[0]);
    }
    else if (data[3]===data[4] && data[4]===data[5] && data[5] !== "") {
      won(data[3]);
    }
    else if (data[6]===data[7] && data[7]===data[8] && data[8] !== "") {
      won(data[6]);
    }
    else if (data[0]===data[3] && data[3]===data[6] && data[6] !== "") {
      won(data[0]);
    }
    else if (data[1]===data[4] && data[4]===data[7] && data[7] !== "") {
      won(data[1]);
    }
    else if (data[2]===data[5] && data[5]===data[8] && data[8] !== "") {
      won(data[2]);
    }
    else if (data[0]===data[4] && data[4]===data[8] && data[8] !== "") {
      won(data[0]);
    }
    else if (data[0]===data[1] && data[1]===data[2] && data[2] !== "") {
      won(data[0]);
    }
    else if (data[2]===data[4] && data[4]===data[6] && data[6] !== "") {
      won(data[0]);
    }
  };

  const won =(winner) => {
    setLock(true);
    console.log("winner");
    if(winner==="x")
    title.current.innerHTML='Congratulations: <img src="cross.png"> Wins';
    else
    title.current.innerHTML='Congratulations: <img src="circle.png"> Wins';
  }

  const reset = () => {
    setLock(false);
    for(var i=0; i < boxes.length; i++) {
     boxes[i].current.innerHTML="";
  }
    data = ["", "", "", "", "", "", "", "", ""];
    title.current.innerHTML='Tic Tac Toe Game In <span>React</span>';
    console.log(box1);
  };

  return (
    <div className="container">
      <h1 className="title" ref={title}>Tic Tac Toe Game In <span>React</span></h1>
      <div className="board">
        <div className="row1">
          <div className="boxes" onClick={(e)=>{toggle(e,0)}} ref={box1}></div>
          <div className="boxes" onClick={(e)=>{toggle(e,1)}} ref={box2}></div>
          <div className="boxes" onClick={(e)=>{toggle(e,2)}} ref={box3}></div>
        </div>
        <div className="row2">
          <div className="boxes" onClick={(e)=>{toggle(e,3)}} ref={box4}></div>
          <div className="boxes" onClick={(e)=>{toggle(e,4)}} ref={box5}></div>
          <div className="boxes" onClick={(e)=>{toggle(e,5)}} ref={box6}></div>
        </div>
        <div className="row3">
          <div className="boxes" onClick={(e)=>{toggle(e,6)}} ref={box7}></div>
          <div className="boxes" onClick={(e)=>{toggle(e,7)}} ref={box8}></div>
          <div className="boxes" onClick={(e)=>{toggle(e,8)}} ref={box9}></div>
        </div>
      </div>
      <button className="reset" onClick={()=>{reset()}}>Reset</button>
    </div>
  );
};

export default Board;
