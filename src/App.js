import './App.css';
import { Link } from 'react-router-dom';
import CustomRoutes from './Roots/CustomRoutes';
function App() {
  return (
    
    <div className="App">
      <Link to='/' className='home'>Home page</Link>
      <CustomRoutes/>
    </div>
    
  );
}

export default App;
