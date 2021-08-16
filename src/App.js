
import './App.css';
import Bar from './Components/Bar';
import Bubble from './Components/Bubble';
import Footer from './Components/Footer';
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
      <Footer />
    </div>
  );
}

export default App;
