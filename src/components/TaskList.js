import { useState } from "react";
const TaskList = () => {
  const [TaskList, setTaskList] = useState([
    { name: "Learn React", id: 123 },
    { name: "Practice React", id: 456 },
    { name: "Push React Project to Git Hub", id: 789 },
  ]);
  const removeTask = (id) => {
    const updatedTasks = TaskList.filter((Task) => Task.id !== id);
    setTaskList(updatedTasks);
  };
  return (
    <div>
      {TaskList.map((Task, id) => {
        return (
          <ul key={id}>
            <li key={id} className="TaskCard">
              {Task.name}
            </li>
            <button className="danger" onClick={() => removeTask(Task.id)}>
              Delete
            </button>
          </ul>
        );
      })}
    </div>
  );
};

export default TaskList;
