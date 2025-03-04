import { Board } from '../types';

export const initialData: Board = {
  columns: [
    {
      id: 'column-1',
      title: 'To Do',
      tasks: [
        {
          id: 'task-1',
          title: 'Create project structure',
          description: 'Set up the initial project structure and dependencies',
          priority: 'high',
        },
        {
          id: 'task-2',
          title: 'Design UI components',
          description: 'Create reusable UI components for the application',
          priority: 'medium',
        },
        {
          id: 'task-3',
          title: 'Implement authentication',
          description: 'Add user authentication and authorization',
          priority: 'low',
        },
      ],
    },
    {
      id: 'column-2',
      title: 'In Progress',
      tasks: [
        {
          id: 'task-4',
          title: 'Develop API integration',
          description: 'Connect frontend with backend API endpoints',
          priority: 'high',
        },
        {
          id: 'task-5',
          title: 'Add drag and drop functionality',
          description: 'Implement drag and drop for task management',
          priority: 'medium',
        },
      ],
    },
    {
      id: 'column-3',
      title: 'Done',
      tasks: [
        {
          id: 'task-6',
          title: 'Setup project repository',
          description: 'Initialize git repository and configure CI/CD',
          priority: 'medium',
        },
        {
          id: 'task-7',
          title: 'Create wireframes',
          description: 'Design initial wireframes for the application',
          priority: 'low',
        },
      ],
    },
  ],
};
