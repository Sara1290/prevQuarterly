
import './App.css';
import Bar from './Components/Bar';
import Bubble from './Components/Bubble';
import Header from './Components/Header';
import Pie from './Components/Pie';



function App() {
  return (
    <div className="App">
      <Header />
        <div className="pie-bubble">
            <Pie />
            <Bubble />
        </div>
      <Bar />
    </div>
  );
}

export default App;
