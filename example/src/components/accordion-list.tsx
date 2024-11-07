import { AutoAnimate } from '@jodd/auto-animate';
import { useState } from 'react';

const accordionItems = [
  {
    title: 'Sun dipped below the horizon',
    content:
      'The sun dipped below the horizon, painting the sky in shades of orange and purple. A gentle breeze rustled the leaves, carrying the scent of blooming jasmine. As night fell, the stars began to twinkle, whispering secrets of the universe.'
  },
  {
    title: 'The old clock',
    content:
      'The old clock ticked steadily, marking the passage of time in the quiet room. Outside, a stray cat prowled through the shadows, its eyes gleaming like emeralds. In the distance, laughter echoed, reminding her of carefree summer days long gone.'
  }
];

export default function AccordionList() {
  return (
    <div className="flex flex-col">
      <h3 className="mb-3 font-medium">Accordion List</h3>
      <div>
        {accordionItems.map((accordion) => (
          <Accordion key={accordion.title} {...accordion} />
        ))}
      </div>
    </div>
  );
}

type AccordionProps = { title: string; content: string };
function Accordion({ title, content }: AccordionProps) {
  const [showContent, setShowContent] = useState(false);
  return (
    <AutoAnimate
      className="flex flex-col space-y-2 rounded-lg border-2 bg-purple-200 py-2"
      animationOptions={{ duration: 200, easing: 'ease-out', disrespectUserMotionPreference: true }}
      // optionally pass the animation options
    >
      <button
        onClick={() => setShowContent((show) => !show)}
        className="w-full select-none px-4 text-left"
      >
        {title}
      </button>
      {showContent && <p className="px-4">{content}</p>}
    </AutoAnimate>
  );
}
