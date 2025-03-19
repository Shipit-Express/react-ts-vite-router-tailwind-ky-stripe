import React from 'react';

const ComingSoonPage: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-purple-800 to-indigo-900 min-h-screen flex flex-col justify-center items-center text-white">
      <title>Celestial Wonders - Coming Soon</title>
      <div className="text-center">
        <h1 className="text-5xl font-extrabold tracking-tight mb-8 animate-pulse">
          ✨ Celestial Wonders ✨
        </h1>
        <h2 className="text-3xl font-semibold mb-6 opacity-90">
          Unveiling Soon...
        </h2>
        <p className="text-lg mb-8 opacity-70">
          Prepare for an extraordinary collection of cosmic artifacts and mystical treasures.
        </p>
        <a href='/checkout'
          className="bg-purple-600 text-white font-bold py-4 px-8 rounded-full shadow-lg"
        >
          <span className="animate-bounce mr-2">🚀</span> Pre-Order Now!
        </a>
        <div className="mt-12 opacity-60 text-sm">
          Stay tuned for updates!
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-1/4 bg-gradient-to-t from-indigo-900 to-transparent"></div>
      <div className="absolute top-0 left-0 w-full h-1/4 bg-gradient-to-b from-indigo-900 to-transparent"></div>
    </div>
  );
};

export default ComingSoonPage;