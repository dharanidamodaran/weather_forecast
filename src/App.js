import {BrowserRouter,Routes,Route,Link,Outlet} from "react-router-dom"
import './App.css';
import Counting from './counting'
import TodoList from './todo'
import ImageSearch from './imagesearch';
import WeatherApp from './weatherapp/weatherapp';

function App() {
  return (
    <>
    <div className='navigation-bar'>
    <BrowserRouter>
  <nav className='navbar navbar-expand'>
    <ul className='navbar-nav'>
    <li className='nav-link'><Link to="/counting">Counter</Link></li> 
     <li className='nav-link'><Link to="/todo">Todo</Link></li>
     <li className='nav-link'><Link to="/imagesearch">ImageSearch</Link></li>
    <li className='nav-link'><Link to="/weatherapp">WeatherApp</Link></li> 
    </ul>
  </nav>
  <Routes>
        <Route path="counting" element={<Counting></Counting>}></Route>
        <Route path="todo" element={<TodoList></TodoList>}></Route>
        <Route path="imagesearch" element={<ImageSearch></ImageSearch>}></Route>
        <Route path="weatherapp" element={<WeatherApp></WeatherApp>}></Route>
  </Routes>
   </BrowserRouter>
   </div>
   </>
  );
}

export default App;
