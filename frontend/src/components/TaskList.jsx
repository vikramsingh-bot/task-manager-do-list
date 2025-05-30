import React, { useEffect, useState } from 'react';
import axiosClient from '../api/axiosClient';

function TaskList() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axiosClient.get('tasks/')
      .then(res => setTasks(res.data))
      .catch(console.error);
  }, []);

  return (
    <ul>
      {tasks.map(task => (
        <li key={task.id}>
          {task.title} - {task.completed ? 'Done' : 'Pending'}
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
