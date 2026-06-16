import { useCharacters } from "../hooks/useCharacters";

import style from './characters.module.css';

export function CharactersPage() {

    const initialUrl = 'https://rickandmortyapi.com/api/character';

    const { characters, info, loading, error, nextPage, previousPage } = useCharacters(initialUrl);
    
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