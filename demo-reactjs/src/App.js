import './App.css';
import BaiTapLayout from './Components/BaiTapLayout/BaiTapLayout';
import DataBinding from './Components/DataBinding/DataBinding';
import DemmFunctionCom from './Components/DemoComponent/DemmFunctionCom';
import DemoClassCom from './Components/DemoComponent/DemoClassCom';

function App() {
  console.log("🚀 ~ file: DataBinding.jsx:17 ~ DataBinding ~ renderText ~ renderText:",)

  return (
    <div className="App">
      {/* <h1>Wellcome to my project!!</h1> */}
      {/* <BaiTapLayout /> */}
      <DataBinding />
    </div>
  );
}

export default App;
