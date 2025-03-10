import { useState } from 'react';
import { Column } from './components/Column';
import type { Column as ColumnType, Task } from './types';

function App() {
  const [columns, setColumns] = useState<ColumnType[]>([
    {
      id: 'todo',
      title: 'To Do',
      tasks: [
        { id: '1', title: 'Research competitors', description: 'Analyze main competitors' },
        { id: '2', title: 'Design mockups', description: 'Create initial designs' },
      ],
    },
    {
      id: 'in-progress',
      title: 'In Progress',
      tasks: [
        { id: '3', title: 'Implement auth', description: 'Set up authentication flow' },
      ],
    },
    {
      id: 'done',
      title: 'Done',
      tasks: [
        { id: '4', title: 'Project setup', description: 'Initial project configuration' },
      ],
    },
  ]);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (columnId: string) => (e: React.DragEvent) => {
    e.preventDefault();
    
    const taskId = e.dataTransfer.getData('taskId');
    const sourceColumnId = e.dataTransfer.getData('sourceColumnId');
    
    if (sourceColumnId === columnId) return;

    setColumns(prev => {
      const sourceColumn = prev.find(col => col.id === sourceColumnId);
      const targetColumn = prev.find(col => col.id === columnId);
      
      if (!sourceColumn || !targetColumn) return prev;
      
      const task = sourceColumn.tasks.find(t => t.id === taskId);
      if (!task) return prev;

      return prev.map(col => {
        if (col.id === sourceColumnId) {
          return {
            ...col,
            tasks: col.tasks.filter(t => t.id !== taskId),
          };
        }
        if (col.id === columnId) {
          return {
            ...col,
            tasks: [...col.tasks, task],
          };
        }
        return col;
      });
    });
  };

  const handleAddTask = (columnId: string) => {
    const newTask: Task = {
      id: Math.random().toString(36).substr(2, 9),
      title: 'New Task',
      description: 'Click to edit',
    };

    setColumns(prev =>
      prev.map(col =>
        col.id === columnId
          ? { ...col, tasks: [...col.tasks, newTask] }
          : col
      )
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold text-gray-800 mb-8">Task Board</h1>
        
        <div className="flex gap-6 overflow-x-auto pb-4">
          {columns.map(column => (
            <Column
              key={column.id}
              columnId={column.id}
              title={column.title}
              tasks={column.tasks}
              onDragOver={handleDragOver}
              onDrop={handleDrop(column.id)}
              onAddTask={() => handleAddTask(column.id)}
              onDragStart={() => {}}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
