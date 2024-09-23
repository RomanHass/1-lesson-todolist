import React from "react";
import "./App.css";
import { TaskType, Todolist } from "./Todolist";

function App() {

  // BLL
  const task1: Array<TaskType> = [
    {id: 1, title: "HTML&CSS", isDone: true},
    {id: 2, title: "JS", isDone: true},
    {id: 3, title: "React", isDone: false},
    {id: 4, title: "Redux", isDone: false},
    {id: 5, title: "Typescript ", isDone: false},
    {id: 6, title: "RTK query", isDone: false},
  ];

  const task2: Array<TaskType> = [];

  // UI
  return (
    <div className="App">
      <Todolist title={"What to learn"} tasks={task1} date={"23.10.2024"}/>
      <Todolist title={"Songs"} tasks={task2} />
    </div>
  );
}

export default App;
