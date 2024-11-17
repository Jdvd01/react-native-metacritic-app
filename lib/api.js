export async function getCharacters() {
  const response = await fetch('https://rickandmortyapi.com/api/character');
  if (response.ok) {
    const data = await response.json()
    return data
  }
}

export async function getCharacterDetail(id) {
  const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
  if (response.ok) {
    const data = await response.json()
    return data
  }
}