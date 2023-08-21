import './App.css';
import { useState } from 'react';
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';

function App() {
  let [tasks, setTasks] = useState([]);

  const addTask = (newTask) => {
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  return (
    <div className="app">
      <h1>ToDo List</h1>
      <AddTask addTask={addTask}></AddTask>
      {tasks.length > 0 ? (
        <h3>Completed: {tasks.filter(task => task.completed).length}/{tasks.length}</h3>
      ) : null}

      <TaskList tasks={tasks} setTasks={setTasks}></TaskList>
    </div>
  );
}

export default App;
