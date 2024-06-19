import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App h-screen p-6 flex justify-center relative items-center">
      <div className='content bg-darkGrayishBlue p-6 w-80 lg:w-96  h-58'>
        <p className='number text-neonGreen mb-4'>Advice # 117</p>
        <p className='text-lightCyan text-xl font-semibold'>"It is easy to sit up and take notice, What's difficult is getting up and taking action."</p>
        <img src='pattern-divider-mobile.svg' alt='pattern-divider-mobile' className=' mt-5 mb-7 block lg:hidden ' />
        <img src='pattern-divider-desktop.svg' alt='pattern-divider-desktop' className=' mt-5 mb-7 hidden lg:block' />
        <div className='icon-dice flex justify-center items-center absolute transform -translate-x-1/2  left-1/2 p-0 bg-neonGreen rounded-full w-14 h-14'>
          <img src='icon-dice.svg' alt='icon-dice' />
        </div>

      </div>
      
    </div>
  );
}

export default App;
