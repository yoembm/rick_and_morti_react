
export const getCharacterById = async (id) => {
    const response = await fetch(
        `https://rickandmortyapi.com/api/character/${id}`
    );

    if (!response.ok) {
        throw new Error("Character not found");
    }

    return response.json();
};