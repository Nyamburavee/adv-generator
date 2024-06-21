import logo from './logo.svg';
import './App.css';
import { useState } from 'react';



function App() {
  const [advice, setAdvice] = useState( "");
  const [number, setNumber] = useState("");

const fetchAdvice = () =>{
  fetch('https://api.adviceslip.com/advice')
  .then(response => response.json())
  .then(data => {
    setAdvice(data.slip.advice);
    setNumber(data.slip.id);
  })
  .catch(error => {
    console.error('error fetching advice:', error);
  });
};
  return (
    <div className="App h-screen p-6 flex justify-center relative items-center">
      <div className='content bg-darkGrayishBlue p-6 w-80 lg:w-96  h-58'>
        <p className='number text-neonGreen mb-4'>Advice # {number}</p>
        <p className='text-lightCyan text-xl font-semibold'>"{advice}"</p>
        <img src='pattern-divider-mobile.svg' alt='pattern-divider-mobile' className=' mt-5 mb-7 block lg:hidden ' />
        <img src='pattern-divider-desktop.svg' alt='pattern-divider-desktop' className=' mt-5 mb-7 hidden lg:block' />
        <div className='icon-dice flex justify-center items-center absolute transform -translate-x-1/2  left-1/2 p-0 bg-neonGreen rounded-full w-14 h-14 cursor-pointer active:shadow-neonGreen' onClick={fetchAdvice}>
          <img src='icon-dice.svg' alt='icon-dice' />
        </div>

      </div>
      
    </div>
  );
}

export default App;
