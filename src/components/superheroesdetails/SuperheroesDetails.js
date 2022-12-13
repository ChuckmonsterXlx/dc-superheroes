import React from 'react'
import { useParams, Navigate } from 'react-router'
import { useSelector } from 'react-redux'
import styles from './Superheroesdetails.module.css'
import { Link } from 'react-router-dom'

const SuperheroesDetails = () => {

  let { superheroesID } = useParams();
  superheroesID = parseInt(superheroesID);
  const characterApiState = useSelector(state  => state.characterApi);
  let characterJSON = characterApiState.apiJSON;
  let superHeroeSeleccionado = [];

  while (characterJSON.length > 0) {
    return SeleccionarSuperheroe();
  }

  function SeleccionarSuperheroe () {
    superHeroeSeleccionado = characterJSON.find( x => x.id === superheroesID);
    if (typeof superHeroeSeleccionado === 'undefined'){
      return <Navigate to="/" />
    } else {
      return (
        <div className={styles.divMainContainer}>
          <div className={'container ' + styles.divContainer}>
            <div className={styles.divImg} style={{backgroundImage: `url("`+superHeroeSeleccionado.imgUrl+`")`}}></div>
            <div className={styles.divContent}>
              <h3>{superHeroeSeleccionado.name} / {superHeroeSeleccionado.alterEgo}</h3>
              <p>{superHeroeSeleccionado.description}</p>
              <p>Editorial de comics: {superHeroeSeleccionado.comic}</p>
            </div>
          </div>
          <Link to="/" className={styles.btnSD}>Regresar</Link>
        </div>
      )
    }
  }

  
}

export default SuperheroesDetails