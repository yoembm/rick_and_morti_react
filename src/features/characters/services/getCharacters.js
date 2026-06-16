export const getCharacters = async() => {
 
    const response = await fetch('https://rickandmortyapi.com/api/character');
    
    if(!response.ok){
        throw new Error('Error fetching characters');
    }
   
    return response.json();
}