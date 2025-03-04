import React from 'react';
import { Task } from '../types';
import { AlertCircle, Clock, CheckCircle } from 'lucide-react';

interface TaskCardProps {
  task: Task;
  onDragStart: (e: React.DragEvent<HTMLDivElement>, taskId: string, columnId: string) => void;
  columnId: string;
}

const TaskCard: React.FC<TaskCardProps> = ({ task, onDragStart, columnId }) => {
  const priorityColors = {
    low: 'bg-blue-100 text-blue-800',
    medium: 'bg-yellow-100 text-yellow-800',
    high: 'bg-red-100 text-red-800',
  };

  const priorityIcons = {
    low: <Clock size={14} className="mr-1" />,
    medium: <AlertCircle size={14} className="mr-1" />,
    high: <AlertCircle size={14} className="mr-1" />,
  };

  return (
    <div
      className="bg-white p-4 rounded-lg shadow mb-2 cursor-grab hover:shadow-md transition-shadow"
      draggable
      onDragStart={(e) => onDragStart(e, task.id, columnId)}
    >
      <h3 className="font-medium text-gray-800 mb-2">{task.title}</h3>
      <p className="text-sm text-gray-600 mb-3">{task.description}</p>
      <div className="flex justify-between items-center">
        <span
          className={`text-xs px-2 py-1 rounded-full flex items-center ${
            priorityColors[task.priority]
          }`}
        >
          {priorityIcons[task.priority]}
          {task.priority.charAt(0).toUpperCase() + task.priority.slice(1)}
        </span>
      </div>
    </div>
  );
};

export default TaskCard;
