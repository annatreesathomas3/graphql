import logo from './logo.svg';
import './App.css';
import CharacterList from './pages/CharacterList';
import Character from './pages/Character';
import {Routes, Route} from 'react-router'

function App() {
  return (
    <div className="App">
        <Routes>
        <Route srict exact path="/" element= {<CharacterList/>}></Route>
        <Route  path="/:id" element= {<Character/>}></Route>
        </Routes>
    </div>
  );
}

export default App;
