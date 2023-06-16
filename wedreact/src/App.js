import './App.css';
import Player from './component/Players';
import ListOfPlayers from './Shared/ListOfPlayers';
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
        <Route path='/' element={<Player />}>
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
