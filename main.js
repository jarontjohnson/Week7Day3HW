console.log("Test");

const pokemonData = async (pokename) => {
    try{
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokename}`)
      const data = await response.json()
      console.log(data)
      addPoke(data)
    } catch(error) {
      console.error(`there was an error: ${error}`)
    }
  }

  const card = document.querySelector('#card')
  console.log(card)
  
  const addPoke = (data) => {
    console.log(data.sprites.front_default)
    card.innerHTML = `
        <img src="${data.sprites.front_default}">
    `
  }