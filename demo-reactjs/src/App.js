import './App.css';
import DemmFunctionCom from './Components/DemoComponent/DemmFunctionCom';
import DemoClassCom from './Components/DemoComponent/DemoClassCom';

function App() {
  return (
    <div className="App">
      <h1>Wellcome to my project!!</h1>
      <DemmFunctionCom />
      <DemmFunctionCom />
      <div class="w-25">
        <DemoClassCom />
      </div>
      <div class="w-25">
        <DemoClassCom />
      </div>
    </div>
  );
}

export default App;
