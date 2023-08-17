import { useState } from 'react';

import Header from './components/Header';
import Input from './components/Input';
import TasksContainer from './components/TasksContainer';

import uuid from 'react-uuid';

export interface Task {
  id: string;
  checked: boolean;
  text: string;
}

export default function App() {
  const [tasks, setTasks] = useState<Task[]>([]);

  function createTask(text: string) {
    const newTask = {
      id: uuid(),
      checked: false,
      text,
    };

    setTasks((state) => [...state, newTask]);
  }

  function checkedTask(id: string) {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return {
          id: task.id,
          checked: !task.checked,
          text: task.text,
        };
      } else {
        return task;
      }
    });
    setTasks(updatedTasks);
  }

  function deleteTask(id: string) {
    const updatedTasks = tasks.filter((task) => {
      return task.id !== id;
    });

    setTasks(updatedTasks);
  }
  return (
    <div className="h-screen	 w-full bg-[#1A1A1A]  flex justify-items-center	 items-center	 flex-col	">
      <Header />
      <Input createTask={createTask} />
      <TasksContainer
        tasks={tasks}
        checkedTask={checkedTask}
        deleteTask={deleteTask}
      />
    </div>
  );
}
