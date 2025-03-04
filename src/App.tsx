import React from 'react';
import Board from './components/Board';
import { initialData } from './data/initialData';
import { Trello } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <header className="bg-blue-600 text-white p-4 shadow-md">
        <div className="container mx-auto flex items-center">
          <Trello size={28} className="mr-2" />
          <h1 className="text-xl font-bold">React Task Board</h1>
        </div>
      </header>
      
      <main className="flex-grow container mx-auto py-6 px-4">
        <div className="bg-white rounded-lg shadow-sm h-[calc(100vh-8rem)]">
          <Board initialData={initialData} />
        </div>
      </main>
      
      <footer className="bg-gray-100 py-4 border-t">
        <div className="container mx-auto text-center text-gray-600 text-sm">
          React Drag &amp; Drop Task Board
        </div>
      </footer>
    </div>
  );
}

export default App;
