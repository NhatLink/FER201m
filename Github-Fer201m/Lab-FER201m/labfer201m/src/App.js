import './App.css';
import Film from './component/Films';
import ListOfFilms from './Shared/ListOfFilms';
import Navigation from './component/Navigation';
import Footer from './component/Footer';
import Detail from './component/Detail';
import Contact from './component/Contact';
import About from './component/About';
import News from './component/News';
import {
  Routes,
  Route,
} from "react-router-dom";
function App() {
  return (
    <div className='App'>
      <Navigation />
      <Routes>
        <Route path='/' element={<Film />}>
        </Route>
        <Route path='/detail/:id' element={<Detail />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/news' element={<News />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
