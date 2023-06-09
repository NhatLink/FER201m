import './App.css';
import Film from './component/Films';
import ListOfFilms from './Shared/ListOfFilms';
import Navigation from './component/Navigation';
import Footer from './component/Footer';
function App() {
  return (
    <div className='App'>
      <Navigation/>
      <Film/>
      <Footer/>
    </div>
  );
}

export default App;
