import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Link, Navigate } from 'react-router-dom';
import React, {useEffect} from 'react';
import './App.css';
import {useDispatch} from 'react-redux'
// import {apiJSON} from './features/characters/charactersSlice'
import Navbar from './components/navbar/Navbar';
import Characters from './components/characters/Characters'
import { characterApiSlice } from './features/characters/charactersSlice';
import SuperheroesDetails from './components/superheroesdetails/SuperheroesDetails';



function App() {
  const dispatch = useDispatch();
  // const characterApiState = useSelector(state  => state.characterApi);

  // console.log(characterApiState);

  const initialUrl = 'https://my-json-server.typicode.com/Isaacmeedinaa/dc-superheroes/superheroes';
  // console.log(initialUrl);
  const fetchCharacters = () => {
    fetch(initialUrl)
      .then(response => response.json())
      .then(data => SendData(data))
      .catch(error => console.log(error))
  };

  function SendData(x) {
    dispatch(characterApiSlice.actions.setApiJSON({apiToJSON:x}))
  }

  useEffect(() => {
    fetchCharacters()
  })
  
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/contacto" element={<h1>pagina de contacto</h1>}/>
        <Route path="/superheroes/:superheroesID" element={<SuperheroesDetails />} />
        <Route exact path="/" element={<Characters />} />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}

export default App;
