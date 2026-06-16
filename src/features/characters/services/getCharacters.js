export const getCharacters = async(url) => {
 
    const response = await fetch(url);
    
    if(!response.ok){
        throw new Error('Error fetching characters');
    }
   
    return response.json();
}