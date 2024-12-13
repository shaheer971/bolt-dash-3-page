import { useState } from 'react';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { HomePage } from './pages/HomePage';
import { ExplorePage } from './pages/ExplorePage';

export function App() {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar currentPage={currentPage} onNavigate={setCurrentPage} />
      <div className="flex flex-1 flex-col">
        <Header />
        {currentPage === 'home' ? <HomePage /> : <ExplorePage />}
      </div>
    </div>
  );
}