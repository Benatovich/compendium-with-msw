import { pokeMunger } from '../utils/helpers'

export const favPokemon = [
    'squirtle',
    'cyndaquil',
    'cubone',
    'farfetchd',
    'drowzee',
    'gengar',
    'raticate',
    'miltank',
    'tyranitar',
    'ditto',
]

export const fetchPokemon = async () => {
    const pokeList = await Promise.all(
        favPokemon.map(async (fav) => {
            const fetchedPokemon = await fetch(
                `https://pokedex-alchemy.herokuapp.com/api/pokedex?pokemon=${fav}`
            )

            const pokeData = await fetchedPokemon.json()

            // filter out mega pokemon, whatever those are
            if (pokeData.count > 1) {
                const exactPokemon = pokeData.results.find((result) => result.pokemon === fav)
                return pokeMunger(exactPokemon)
            }

            return pokeMunger(pokeData.results[0])
        })
    )
    return pokeList
}

export const fetchSearchPokemon = (pokeName) => {
    const lowerCaseName = pokeName.toLowerCase()
    return fetch(
        `https://pokedex-alchemy.herokuapp.com/api/pokedex?pokemon=${lowerCaseName}`
    )
        .then((data) => data.json())
        .then((pokeData) => {
            const { results } = pokeData
            const pokemonResults = results.map((pokemon) => pokeMunger(pokemon))
            return pokemonResults
        })
}

export const fetchTypes = async () => {
    const res = await fetch(`https://pokedex-alchemy.herokuapp.com/api/pokedex/types`)
    const pokeTypes = await res.json()

    const randomTypes = pokeTypes
        .map((pokeType) => ({ type: pokeType.type }))
        .sort(() => 0.5 - Math.random())
        .slice(0, 5)
    return randomTypes
}

export const fetchFilteredPokemon = async (type) => {
    const res = await fetch(`https://pokedex-alchemy.herokuapp.com/api/pokedex?type=${type}`)
    const pokeData = await res.json()
    const filteredPokemon = pokeData.results.map((pokemon) => pokeMunger(pokemon))
    return filteredPokemon
}

export const fetchSortedPokemon = async ({ sort, type }) => {
    const res = await fetch(
        `https://pokedex-alchemy.herokuapp.com/api/pokedex?type=${type}&sort=pokemon&direction=${sort}`
      )
    const pokeData = await res.json()
    const sortedPokemon = pokeData.results.map((pokemon) => pokeMunger(pokemon))
    return sortedPokemon
}