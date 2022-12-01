
import './App.css';
import MoviePage from './Components/MoviePage';
import Header from './Components/Header';
import { Routes,Route} from 'react-router-dom';
import MovieRouter from './Components/MovieRouter';
import MovieCard from './Components/MovieCard';

function App(props) {
  return (
    <>
     <Routes>
     <Route path='' element={ <MoviePage />}></Route>
     <Route path='about' element={<MovieRouter/>}></Route>
     </Routes>
      
   
     </>
     
    
  );
}

export default App;
