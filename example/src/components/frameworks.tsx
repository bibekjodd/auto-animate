import { useState } from 'react';
import { AutoAnimate } from '@jodd/auto-animate';

const frameworksList = ['React', 'Svelte', 'Solid', 'Vue', 'Qwik'];

export default function Frameworks() {
  const [frameworks, setFrameworks] = useState(frameworksList);

  const sortFrameworks = (order: 'asc' | 'desc' | 'random') => {
    const sortedFrameworks = [...frameworks].sort((a, b) => {
      if (order === 'asc') return a.localeCompare(b);
      if (order === 'desc') return b.localeCompare(a);
      return Math.random() - 0.5;
    });
    setFrameworks(sortedFrameworks);
  };

  return (
    <div className="flex flex-col space-y-3">
      <h3 className="font-medium">Frameworks</h3>
      <AutoAnimate animationOptions={{ duration: 400 }}>
        {frameworks.map((framework) => (
          <div key={framework}>⚡{framework}</div>
        ))}
      </AutoAnimate>

      <div className="flex space-x-3">
        <button
          onClick={() => sortFrameworks('asc')}
          className="h-9 rounded-lg bg-gradient-to-b from-purple-600/70 to-purple-700 px-6 text-sm font-medium text-white"
        >
          Sort Ascending
        </button>
        <button
          onClick={() => sortFrameworks('random')}
          className="h-9 rounded-lg bg-gradient-to-b from-purple-600/70 to-purple-700 px-6 text-sm font-medium text-white"
        >
          Sort Random
        </button>
        <button
          onClick={() => sortFrameworks('desc')}
          className="h-9 rounded-lg bg-gradient-to-b from-purple-600/70 to-purple-700 px-6 text-sm font-medium text-white"
        >
          Sort Descending
        </button>
      </div>
    </div>
  );
}
