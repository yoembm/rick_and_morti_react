import { useCharacters } from "../hooks/useCharacters";

import style from './characters.module.css';

export function CharactersPage() {


    const { characters, loading, error } = useCharacters();

    console.log(characters);

    return (
        <div>
            
            <h1>Rick and Morty Characters</h1>
            <div className={style.pagination}>
                <button>Previous</button>
                <button>Next</button>
            </div>
            <div className={style.container}> 

                {characters.map(character => (
                    <div className={style.characterCard} key={character.id}>
                        <h3>{character.name}</h3>
                        <p>Status: {character.status}</p>
                        <p>Species: {character.species}</p>
                        <img src={character.image} alt={character.name} width="100" />
                    </div>
                ))}

            </div>

        </div>
    )

}