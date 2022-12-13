import React from 'react';
import {useSelector} from 'react-redux';
import { Link } from 'react-router-dom';
import styles from './Character.module.css';

const Characters = () => {
    const characterApiState = useSelector(state  => state.characterApi);
    let characterJSON = characterApiState.apiJSON;

    while (characterJSON.length > 0) {
        return(
            <div className='container'>
                <div className="row">
                    {
                        characterJSON.map(character => (
                            <div key={character.id} className={`col-lg-3 col-md-6 col-sm-12 `+styles.colCards}>
                                <div className={`card `+styles.divCard}>
                                    <div className={styles.colImg} style={{backgroundImage: `url("`+character.imgUrl+`")`}}></div>
                                    <div className="card-body">
                                        <h5 className="card-title">{character.name}</h5>
                                        <Link to={`/superheroes/${character.id}`} className={styles.btnSD}>Ver más</Link>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        );
    }
}

export default Characters;