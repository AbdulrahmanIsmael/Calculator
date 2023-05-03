import { useState } from 'react';
import Numbers from './components/numbers/Numbers';
import Operators from './components/operators/Operators';
import Show from './components/show/Show';
import './app.css';

function App() {
  const [result, setResult] = useState(0);

  return (
    <div className='calculator'>
      <div className='calculator__screen'>
        <Show result={result} setResult={setResult} />
      </div>
      <div className='calculator__control'>
        <Numbers />
        <Operators setResult={setResult} />
      </div>
    </div>
  );
}

export default App;
