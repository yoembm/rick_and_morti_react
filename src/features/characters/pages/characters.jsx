import { Link, Navigate, useNavigate } from "react-router";
import { useCharacters } from "../hooks/useCharacters";

import style from './characters.module.css';

export function CharactersPage() {

    const initialUrl = 'https://rickandmortyapi.com/api/character';

    const { characters, info, loading, error, nextPage, previousPage } = useCharacters(initialUrl);


    if (loading) {
        return <h2>Loading ...</h2>
    }



    return (
        <div>

            <h1>Rick and Morty Characters</h1>
            <div className={style.pagination}>
                <button
                    onClick={previousPage}

                >Previous</button>
                <button onClick={nextPage} >Next</button>
            </div>

            <div className={style.container}>
                {characters.map(character => (

                    <Link key={character.id}
                        to={`/character/${character.id}`}
                    >
                        <div className={style.characterCard} >
                            <h3>{character.name}</h3>
                            <p>Status: {character.status}</p>
                            <p>Species: {character.species}</p>
                            <img src={character.image} alt={character.name} width="100" />
                        </div>

                    </Link>


                ))}

            </div>

        </div>
    )

}