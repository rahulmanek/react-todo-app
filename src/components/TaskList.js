import './TaskList.scss';

export default function TaskList({ tasks, setTasks }) {
  const toggleTaskCompletion = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  }

  const deleteTask = (e, index) => {
    e.stopPropagation();
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  }

  const arrangeTask = (e,direction,index) => {
    e.stopPropagation();
    if ( (direction === -1 && index > 0) || (direction === 1 && index < tasks.length - 1) ) {
      // Add the move class to trigger the animation
      const items = document.querySelectorAll('.item');
      items[index].classList.add('move', direction === -1 ? 'up' : 'down');

      // Remove the move class after the animation completes
      items[index].addEventListener('transitionend', () => {
        const updatedTasks = [...tasks];
        const movedTask = updatedTasks[index];

        updatedTasks[index] = updatedTasks[index + direction];
        updatedTasks[index + direction] = movedTask;

        setTasks(updatedTasks);

        // Remove the move class to prepare for the next animation
        items[index].classList.remove('move', direction === -1 ? 'up' : 'down');
      }, { once: true }); // Use { once: true } to ensure the event fires only once
    }
  }

  if (tasks.length === 0) {
    return (
      <div className="list-container">
        <h2>I'm ready! Fill me with tasks...</h2>
      </div>
    );
  }

  return (
    <div className="list-container">
      {tasks.map((task, index) => (
        <div className={`item ${task.completed ? 'completed' : ''}`} key={index}>
          <div className='title' onClick={() => toggleTaskCompletion(index)}>{task.name}</div>
          <div className='buttons'>
            <button onClick={(e) => arrangeTask(e, -1, index)}>⬆️</button>
            <button onClick={(e) => arrangeTask(e, 1, index)}>⬇️</button>
            <button style={{ margin: 0 }} onClick={(e) => deleteTask(e, index)}>❎</button>
          </div>
        </div>
      ))}
    </div>
  );
}