import { PlusCircle } from '@phosphor-icons/react';
import { useState } from 'react';

type InputProps = {
  createTask: (text: string) => void;
};

export default function Input({ createTask }: InputProps) {
  const [text, setText] = useState('');

  function handleCreateTask() {
    createTask(text);
    setText('');
  }

  return (
    <div className="flex flex-row -translate-y-6	gap-4">
      <input
        className="w-[600px] h-14 bg-[#262626] rounded-lg p-4 text-[#808080] "
        placeholder="Adicione uma nova tarefa"
        value={text}
        onChange={(event) => setText(event.target.value)}
      />
      <button
        onClick={handleCreateTask}
        className="bg-[#1E6F9F] w-24 h-14 rounded-lg text-white flex flex-row items-center justify-center gap-1 hover:bg-sky-900"
      >
        Criar
        <PlusCircle size={28} />
      </button>
    </div>
  );
}
