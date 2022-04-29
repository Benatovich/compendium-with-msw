import propTypes from 'prop-types'
import Pokemon from './Pokemon'
import './PokeList.css'

export default function PokeList({ pokemons }) {
    return (
        <ul aria-label='pokeList' className='pokeList'>
            {pokemons.map((pokemon) => {
                return (
                    <li className='listItem' key={pokemon.id}>
                        <Pokemon pokemon={pokemon} />
                    </li>
                )
            })}
        </ul>
    )
}

PokeList.propTypes = {
    pokemons: propTypes.arrayOf(
        propTypes.shape({
            id: propTypes.number.isRequired,
            name: propTypes.string.isRequired,
            abilityOne: propTypes.string.isRequired,
            abilityTwo: propTypes.string.isRequired,
            typeOne: propTypes.string.isRequired,
            typeTwo: propTypes.string.isRequired,
            pic: propTypes.string.isRequired,
            generation: propTypes.string.isRequired,
        })
    ).isRequired,
}