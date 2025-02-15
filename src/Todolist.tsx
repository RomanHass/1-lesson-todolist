import { Button } from "./Button";

export type TaskType = {
  id: number
  title: string
  isDone: boolean
};

type TodolistPropsType = {
  title: string
  tasks: Array<TaskType>
  date?: string
};

export const Todolist = ({title, tasks, date}: TodolistPropsType) => {
  return (
    <div>
      <h3>{title}</h3>
      <div>
        <input />
        <Button title="+" />
      </div>
      {tasks.length === 0 
        ? <p>Тасок нет!</p>
        : <ul>
            {tasks.map(task => {
              return (
                <li key={task.id}>
                  <input type="checkbox" checked={task.isDone} />
                  <span>{task.title}</span>
                </li>
              );
            })}
          </ul>
      }
      
      <div>
        <Button title="All" />
        <Button title="Active" />
        <Button title="Completed" />
      </div>
      <div>{date}</div>
    </div>
  );
}


