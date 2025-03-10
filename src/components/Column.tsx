import { Plus } from 'lucide-react';
import { Task } from '../types';
import { TaskCard } from './TaskCard';

interface ColumnProps {
  title: string;
  tasks: Task[];
  onDragOver: (e: React.DragEvent) => void;
  onDrop: (e: React.DragEvent) => void;
  onAddTask: () => void;
  onDragStart: (taskId: string, columnId: string) => void;
  columnId: string;
}

export function Column({
  title,
  tasks,
  onDragOver,
  onDrop,
  onAddTask,
  onDragStart,
  columnId,
}: ColumnProps) {
  return (
    <div 
      className="bg-gray-100 p-4 rounded-lg w-72"
      onDragOver={onDragOver}
      onDrop={onDrop}
    >
      <div className="flex items-center justify-between mb-4">
        <h2 className="font-semibold text-gray-700">{title}</h2>
        <button
          onClick={onAddTask}
          className="p-1 hover:bg-gray-200 rounded-md"
        >
          <Plus className="w-5 h-5 text-gray-600" />
        </button>
      </div>
      
      <div className="flex flex-col gap-2">
        {tasks.map((task) => (
          <TaskCard
            key={task.id}
            title={task.title}
            description={task.description}
            draggable
            onDragStart={(e) => {
              e.dataTransfer.setData('taskId', task.id);
              e.dataTransfer.setData('sourceColumnId', columnId);
              onDragStart(task.id, columnId);
            }}
          />
        ))}
      </div>
    </div>
  );
}
