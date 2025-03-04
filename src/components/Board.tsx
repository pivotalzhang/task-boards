import React, { useState } from 'react';
import { Board as BoardType, Task, Column as ColumnType } from '../types';
import Column from './Column';
import TaskForm from './TaskForm';
import { Plus } from 'lucide-react';

interface BoardProps {
  initialData: BoardType;
}

const Board: React.FC<BoardProps> = ({ initialData }) => {
  const [board, setBoard] = useState<BoardType>(initialData);
  const [draggedTask, setDraggedTask] = useState<{ taskId: string; columnId: string } | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [activeColumn, setActiveColumn] = useState<string | null>(null);

  const handleDragStart = (e: React.DragEvent<HTMLDivElement>, taskId: string, columnId: string) => {
    setDraggedTask({ taskId, columnId });
    e.dataTransfer.effectAllowed = 'move';
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>, targetColumnId: string) => {
    e.preventDefault();
    
    if (!draggedTask) return;
    
    const { taskId, columnId: sourceColumnId } = draggedTask;
    
    if (sourceColumnId === targetColumnId) return;
    
    setBoard((prevBoard) => {
      // Find the source and target columns
      const sourceColumn = prevBoard.columns.find((col) => col.id === sourceColumnId);
      const targetColumn = prevBoard.columns.find((col) => col.id === targetColumnId);
      
      if (!sourceColumn || !targetColumn) return prevBoard;
      
      // Find the task in the source column
      const taskToMove = sourceColumn.tasks.find((task) => task.id === taskId);
      
      if (!taskToMove) return prevBoard;
      
      // Create new columns with the task moved
      const updatedColumns = prevBoard.columns.map((column) => {
        if (column.id === sourceColumnId) {
          return {
            ...column,
            tasks: column.tasks.filter((task) => task.id !== taskId),
          };
        }
        
        if (column.id === targetColumnId) {
          return {
            ...column,
            tasks: [...column.tasks, taskToMove],
          };
        }
        
        return column;
      });
      
      return {
        ...prevBoard,
        columns: updatedColumns,
      };
    });
    
    setDraggedTask(null);
  };

  const handleAddTask = (columnId: string) => {
    setActiveColumn(columnId);
    setShowForm(true);
  };

  const handleAddColumn = () => {
    setBoard((prevBoard) => {
      const newColumnId = `column-${prevBoard.columns.length + 1}`;
      
      return {
        ...prevBoard,
        columns: [
          ...prevBoard.columns,
          {
            id: newColumnId,
            title: `New Column`,
            tasks: [],
          },
        ],
      };
    });
  };

  const handleTaskSubmit = (taskData: Omit<Task, 'id'>) => {
    if (!activeColumn) return;
    
    setBoard((prevBoard) => {
      const newTaskId = `task-${Date.now()}`;
      
      const updatedColumns = prevBoard.columns.map((column) => {
        if (column.id === activeColumn) {
          return {
            ...column,
            tasks: [
              ...column.tasks,
              {
                id: newTaskId,
                ...taskData,
              },
            ],
          };
        }
        
        return column;
      });
      
      return {
        ...prevBoard,
        columns: updatedColumns,
      };
    });
    
    setShowForm(false);
    setActiveColumn(null);
  };

  return (
    <div className="h-full flex flex-col">
      <div className="flex justify-between items-center p-4 border-b">
        <h1 className="text-2xl font-bold text-gray-800">Task Board</h1>
        <button
          onClick={handleAddColumn}
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 flex items-center"
        >
          <Plus size={16} className="mr-1" />
          Add Column
        </button>
      </div>
      
      <div className="flex-grow p-6 overflow-x-auto">
        <div className="flex space-x-4 h-full">
          {board.columns.map((column) => (
            <Column
              key={column.id}
              column={column}
              onDragStart={handleDragStart}
              onDragOver={handleDragOver}
              onDrop={handleDrop}
              onAddTask={handleAddTask}
            />
          ))}
        </div>
      </div>
      
      {showForm && (
        <TaskForm
          onSubmit={handleTaskSubmit}
          onCancel={() => {
            setShowForm(false);
            setActiveColumn(null);
          }}
        />
      )}
    </div>
  );
};

export default Board;
