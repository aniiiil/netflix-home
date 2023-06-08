import './App.scss';
import { BrowserRouter as Router ,Routes ,Route } from 'react-router-dom';
import Home from './Component/Home/Home';
import Nav from './Component/Nav/Nav';

function App() {
  return (
   <Router>
    <Nav/>
  <Routes>
    <Route path='/' element={<Home/>}/>
  </Routes>
   </Router>
  );
}

export default App;
