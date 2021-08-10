
import './App.css';
import Bar from './Components/Bar';
import Bubble from './Components/Bubble';
import Pie from './Components/Pie';



function App() {
  return (
    <div className="App">
      <h1>Summary June 2021</h1>
      <Pie />
      <Bubble />
 
      <Bar />
    </div>
  );
}

export default App;
