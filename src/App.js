import './App.css';
import Menu from './components/Menu';

function App() {
  return (
    <div className="relative">
      <Menu />
      <img src={require('./water.jpeg')} className="h-screen w-full object-cover absolute" alt="Mar" />
    </div>
  );
}

export default App;
