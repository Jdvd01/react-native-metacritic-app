export async function getCharacters() {
	const response = await fetch('https://rickandmortyapi.com/api/character');
  if(response.ok){
    const data = await response.json()
    return data
  }
}
