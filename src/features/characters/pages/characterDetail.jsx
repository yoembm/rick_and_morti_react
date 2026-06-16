import { useParams } from "react-router";
import { useCharactersById } from "../hooks/userCharacterById";

export function CharacterDetailPage() {


    const { id } = useParams();


    const { character, loading, error } = useCharactersById(id);


    if(loading){
        return <h2>Loading ...</h2>
    }

    return (
        <div>
            <div>

                <h1>{character.name}</h1>
                <img
                    src={character.image}
                    alt={character.name}
                />
            </div>
            <div>
                <p>Status: {character.status}</p>
                <p>Species: {character.species}</p>
                <p>Gender: {character.gender}</p>
                <p>Origin: {character.origin.name}</p>
                <p>Location: {character.location.name}</p>
            </div>

            <div>
                {character.episode.map(episode => (
                    <p>{episode}</p>
                )

                )}
            </div>

        </div>
    )
}