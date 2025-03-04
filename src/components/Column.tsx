import React from 'react';
import { Column as ColumnType } from '../types';
import TaskCard from './TaskCard';
import { Plus } from 'lucide-react';

interface ColumnProps {
  column: ColumnType;
  onDragStart: (e: React.DragEvent<HTMLDivElement>, taskId: string, columnId: string) => void;
  onDragOver: (e: React.DragEvent<HTMLDivElement>) => void;
  onDrop: (e: React.DragEvent<HTMLDivElement>, columnId: string) => void;
  onAddTask: (columnId: string) => void;
}

const Column: React.FC<ColumnProps> = ({
  column,
  onDragStart,
  onDragOver,
  onDrop,
  onAddTask,
}) => {
  return (
    <div
      className="bg-gray-100 p-4 rounded-lg shadow-sm min-w-[300px] max-w-[300px] h-full flex flex-col"
      onDragOver={onDragOver}
      onDrop={(e) => onDrop(e, column.id)}
    >
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-bold text-gray-700">{column.title}</h2>
        <span className="bg-gray-200 text-gray-700 text-xs font-medium px-2 py-1 rounded-full">
          {column.tasks.length}
        </span>
      </div>
      
      <div className="flex-grow overflow-y-auto">
        {column.tasks.map((task) => (
          <TaskCard
            key={task.id}
            task={task}
            onDragStart={onDragStart}
            columnId={column.id}
          />
        ))}
      </div>
      
      <button
        className="mt-3 flex items-center justify-center w-full py-2 bg-white border border-gray-300 rounded-md text-gray-600 hover:bg-gray-50 transition-colors"
        onClick={() => onAddTask(column.id)}
      >
        <Plus size={16} className="mr-1" />
        Add Task
      </button>
    </div>
  );
};

export default Column;
