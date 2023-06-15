import './App.css';
import Film from './component/Films';
import ListOfFilms from './Shared/ListOfFilms';
import Navigation from './component/Navigation';
import Footer from './component/Footer';
import Detail from './component/Detail';
import {
  Routes,
  Route,
} from "react-router-dom";
function App() {
  return (
    <div className='App'>
      <Navigation/>
      <Routes>
          <Route path='/' element={<Film/>}> 
      </Route>
      <Route path='/detail/:id' element={<Detail/>}></Route>
        {/* <Route path='/contact' element={<Contact/>}></Route> */}
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
