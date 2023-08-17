import Task from '../Task';
import Empty from '/assets/Clipboard.png';

interface Task {
  id: string;
  checked: boolean;
  text: string;
}

type TasksProps = {
  tasks: Task[];
  checkedTask: (id: string) => void;
  deleteTask: (id: string) => void;
};

export default function TasksContainer({
  tasks,
  checkedTask,
  deleteTask,
}: TasksProps) {
  const createdTasks = tasks.length;

  const tasksCompleted = tasks.reduce((acc, task) => {
    if (task.checked) {
      return acc + 1;
    }
    return acc;
  }, 0);

  return (
    <>
      <div className="flex flex-row justify-between items-center  w-[724px] mb-3">
        <p className="text-[#4EA8DE] font-bold flex flex-row gap-2 p-2">
          Tarefas criadas{' '}
          <div className="bg-slate-500 text-white rounded-full w-6 h-5 flex items-center justify-center">
            <p>{createdTasks}</p>
          </div>
        </p>
        <p className="text-[#5E60CE] font-bold flex flex-row gap-2 p-2">
          Concluídas
          <div className="bg-slate-500 text-white rounded-full w-6 h-5 flex items-center justify-center">
            <p>{tasksCompleted}</p>
          </div>
          de
          <div className="bg-slate-500 text-white rounded-full w-6 h-5 flex items-center justify-center">
            <p>{createdTasks}</p>
          </div>
        </p>
      </div>
      {createdTasks ? (
        tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            checkedTask={checkedTask}
            deleteTask={deleteTask}
          />
        ))
      ) : (
        <div className="rounder-lg flex flex-col items-center pt-2 border-t border-t-gray-400 text-[#808080] mt-3">
          <img src={Empty} className="mt-4" />
          <strong className="mt-4">
            Você ainda não tem tarefas cadastradas
          </strong>
          <p>Crie tarefas e organize seus itens a fazer</p>
        </div>
      )}
    </>
  );
}
