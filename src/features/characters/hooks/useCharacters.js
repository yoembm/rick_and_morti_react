import { useEffect, useState } from "react";
import { getCharacters } from "../services/getCharacters";

export function useCharacters(initialUrl) {
 
    const [url, setUrl] = useState(initialUrl);
    const [characters, setCharacters] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [info, setInfo] = useState(null);

    useEffect(() => {
        getCharacters(url)
        .then((data) => {
            setCharacters(data.results);
            setInfo(data.info);
        })
        .catch((error) => setError(error.message))
        .finally(() => setLoading(false));
    }, [url]);

    
     const nextPage = () => {
        if (info?.next) {
            setUrl(info.next);
        }
    };

    const previousPage = () => {
        if (info?.prev) {
            setUrl(info.prev);
        }
    };

    
    return {
        characters,
        loading,
        error,
        info,
        nextPage,
        previousPage
    }

}
