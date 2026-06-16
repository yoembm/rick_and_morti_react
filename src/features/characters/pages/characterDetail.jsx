import { useParams } from "react-router";
import { useCharactersById } from "../hooks/userCharacterById";

import style from './characterDetail.module.css'

export function CharacterDetailPage() {


    const { id } = useParams();


    const { character, loading, error } = useCharactersById(id);


    if (loading) {
        return <h2>Loading ...</h2>
    }

    return (
        <div className={style.page}>
            <div>
                <div className={style.container}>

                    <div className={style.imageSection}>


                        <h1>{character.name}</h1>
                        <img
                            className={style.image}

                            src={character.image}
                            alt={character.name}
                        />
                    </div>
                    <div className={style.infoSection}>

                        <p><strong>Status:</strong>  {character.status}</p>
                        <p><strong>Species:</strong> {character.species}</p>
                        <p><strong>Gender:</strong> {character.gender}</p>
                        <p><strong>Origin:</strong> {character.origin.name}</p>
                        <p><strong>Location:</strong> {character.location.name}</p>
                    </div>
                </div>


                <div className={style.episodes}>
                    <h3>Episodios: </h3>
                    {character.episode.map(episode => (
                        <p>{episode}</p>
                    )

                    )}
                </div>


            </div>


        </div>
    )
}