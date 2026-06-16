import { useEffect, useState } from "react";
import { getCharacterById } from "../services/getCharacterById";


export function useCharactersById(initialId) {
 
    const [id, setId] = useState(initialId);
    const [character, setCharacter] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    useEffect(() => {
        getCharacterById(id)
        .then((data) => {
            setCharacter(data);            
        })
        .catch((error) => setError(error.message))
        .finally(() => setLoading(false));
    }, [id]);

    
    return {
        character,
        loading,
        error
    }

}
