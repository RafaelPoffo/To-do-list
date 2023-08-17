import { Trash } from '@phosphor-icons/react';

interface Task {
  id: string;
  checked: boolean;
  text: string;
}

type TaskProps = {
  task: Task;
  checkedTask: (id: string) => void;
  deleteTask: (id: string) => void;
};

export default function Task({ task, checkedTask, deleteTask }: TaskProps) {
  console.log(task);
  function handleCheckTask() {
    checkedTask(task.id);
  }

  function handleDeleteTask() {
    deleteTask(task.id);
  }

  return (
    <div className="bg-[#262626] border border-[#333333] w-[736px] h-14 rounded-lg text-[#F2F2F2] flex flex-row items-center justify-between p-3 mt-4 first:mt-0">
      <button
        className="w-[1.5rem] h-[1.5rem] bg-none flex items-center justify-center cursor-pointer  "
        onClick={handleCheckTask}
      >
        <div
          className={` ${
            task.checked
              ? 'bg-[#5E60CE] w-[1.125rem] h-[1.125rem] border-2 border-[#4EA8DE] rounded-[50%] flex items-center justify-center'
              : 'w-[1.125rem] h-[1.125rem] border-2 border-[#4EA8DE] rounded-[50%] flex items-center justify-center hover:bg-blue-300 hover:rounded-[50%]'
          }`}
        >
          {task.checked && (
            <svg
              viewBox="0 0 10 7"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.43107 0.342093L4.09914 4.67403L1.61667 2.19156L0.780762 3.02747L4.09914 6.34584L9.26698 1.178L8.43107 0.342093Z"
                fill="#F2F2F2"
              />
            </svg>
          )}
        </div>
      </button>
      <p
        className={`"text-gray-100 text-sm p-2" ${
          task.checked ? 'line-through	' : 'no-underline	'
        }`}
      >
        {task.text}
      </p>
      <button onClick={handleDeleteTask}>
        <Trash size={28} className="hover:text-red-900 " />
      </button>
    </div>
  );
}
