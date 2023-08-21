import { useState } from 'react';
import './AddTask.scss';

export default function AddTask({ addTask }) {
  const [taskName, setTaskName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskName.trim() === "") return;

    const newTask = {
      name: taskName,
      completed: false,
    };

    addTask(newTask);
    setTaskName("");
  };

  return (
    <div>
      <form id='addtaskform' onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder='Task'
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />
        <button type="submit">ADD</button>
      </form>
    </div>
  );
}
