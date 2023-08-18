
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import defaultProps from './defaultProps';
import Navbar from './Navbar';
import Routes from './Routes';

function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar props={App.defaultProps.dogs}/>
        <Routes props={App.defaultProps.dogs}/>
      </BrowserRouter>
    </div>
  );
}

App.defaultProps = defaultProps;

export default App;
