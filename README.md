# React Task Board

A beautiful, interactive Trello-like kanban board built with React and TypeScript. This application allows you to manage tasks through a drag-and-drop interface with multiple columns.

![React Task Board Screenshot](https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80)

## Features

- **Drag and Drop Interface**: Easily move tasks between columns
- **Multiple Columns**: Organize tasks in different stages (To Do, In Progress, Done)
- **Task Creation**: Add new tasks with title, description, and priority
- **Column Management**: Create new columns as needed
- **Priority Levels**: Assign low, medium, or high priority to tasks
- **Responsive Design**: Works on desktop and mobile devices

## Tech Stack

- **React**: UI library for building the interface
- **TypeScript**: Type safety for better development experience
- **Tailwind CSS**: Utility-first CSS framework for styling
- **Vite**: Fast build tool and development server
- **Lucide React**: Beautiful, consistent icons

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/react-task-board.git
   cd react-task-board
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn
   ```

3. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

## Usage

### Managing Tasks

- **Create a Task**: Click the "Add Task" button in any column
- **Move a Task**: Drag and drop a task card from one column to another
- **View Task Details**: Each card displays the task title, description, and priority

### Managing Columns

- **Add a Column**: Click the "Add Column" button at the top of the board

## Project Structure

```
src/
├── components/         # React components
│   ├── Board.tsx       # Main board component
│   ├── Column.tsx      # Column component
│   ├── TaskCard.tsx    # Task card component
│   └── TaskForm.tsx    # Form for creating tasks
├── data/
│   └── initialData.ts  # Initial board data
├── types/
│   └── index.ts        # TypeScript interfaces
├── App.tsx             # Root component
└── main.tsx            # Entry point
```

## Customization

### Changing the Initial Data

You can modify the initial board data in `src/data/initialData.ts` to customize the columns and tasks that appear when the application first loads.

### Styling

The application uses Tailwind CSS for styling. You can customize the appearance by:

1. Modifying the Tailwind configuration in `tailwind.config.js`
2. Adding custom CSS in `src/index.css`
3. Changing the Tailwind classes in the component files

## Building for Production

To build the application for production:

```bash
npm run build
# or
yarn build
```

The build artifacts will be stored in the `dist/` directory.

## Future Enhancements

- Task editing functionality
- Column reordering
- Data persistence with local storage or a backend API
- User authentication and multi-user support
- Filtering and searching tasks
- Labels and tags for tasks

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Inspired by Trello and other kanban board applications
- Built with React and modern web technologies
