import AccordionList from './components/accordion-list';
import Frameworks from './components/frameworks';

export default function App() {
  return (
    <main className="bg-white p-4">
      <div>
        <AccordionList />
      </div>
      <div className="mt-10">
        <Frameworks />
      </div>
    </main>
  );
}
