import { Outlet } from 'react-router-dom';
import Navbar from '../pages/Navbar';
import Footer from '../pages/Footer';
import {  useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';

const Main = () => {
  const {setDarkMode,darkMode} = useContext(AuthContext)

  return (
    <div className="w-full mx-auto">
      {/* Dark Mode Toggle Button */}
      <div className="fixed bottom-8 right-4 z-[100]">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="px-3 font-semibold py-2 bg-gray-800 dark:bg-white dark:text-gray-800 text-white rounded"
        >
          {darkMode ? '☀ Light' : '🌙 Dark'}
        </button>
      </div>

      {/* Navbar */}
      <div className="sticky top-0 z-50">
        <Navbar />
      </div>

      {/* Main content */}
      <div className="min-h-screen bg-white text-black dark:bg-gray-900 dark:text-white overflow-y-hidden">
        <Outlet />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Main;
