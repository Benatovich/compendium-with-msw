export const getGen = (generationId) => {
    let generation

    switch (generationId) {
        case 1:
            generation = 'First Generation'
            break
        case 2:
            generation = 'Second Generation'
            break
        case 3:
            generation = 'Third Generation'
            break
        case 4:
            generation = 'Fourth Generation'
            break
        case 5:
            generation = 'Fifth Generation'
            break
        case 6:
            generation = 'Sixth Generation'
            break
        case 7:
            generation = 'Seventh Generation'
            break
        case 8:
            generation = 'Eighth Generation'
            break
        default:
            generation = '-MEGA-'
    }

    return generation
}

const fixUrl = (url) => url.replace(/^http:\/\//i, 'https://')

const capitalizeWord = (word) => word.charAt(0).toUpperCase() + word.slice(1)

export const pokeMunger = (pokemon) => ({
  id: pokemon.id,
  name: capitalizeWord(pokemon.pokemon),
  abilityOne: capitalizeWord(pokemon.ability_1),
  abilityTwo: capitalizeWord(pokemon.ability_2),
  typeOne: capitalizeWord(pokemon.type_1),
  typeTwo: capitalizeWord(pokemon.type_2),
  pic: fixUrl(pokemon.url_image),
  generation: getGen(pokemon.generation_id),
})
