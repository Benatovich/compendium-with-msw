import propTypes from 'prop-types'
import './Pokemon.css'

export default function Pokemon({ pokemon }) {
    const { name, abilityOne, abilityTwo, typeOne, typeTwo, pic, generation } = pokemon

    const hasSecondType = typeTwo !== 'NA'
    const hasSecondAbility = abilityTwo !== 'NA'

    return (
        <figure aria-label='pokemon'>
            <img aria-label='pokepic' src={pic} alt={`${name}-${generation}`} />
            <div className='details'>
                <h2 aria-label='pokename'>{name}</h2>
                <p>{generation}</p>
                <p>
                    {abilityOne}
                    {hasSecondAbility && `/${abilityTwo}`}
                </p>
                <p>
                    {typeOne}
                    {hasSecondType && `/${typeTwo}`}
                </p>
            </div>
        </figure>
    )
}

Pokemon.propTypes = {
    pokemon: propTypes.shape({
        id: propTypes.number.isRequired,
        name: propTypes.string.isRequired,
        abilityOne: propTypes.string.isRequired,
        abilityTwo: propTypes.string.isRequired,
        typeOne: propTypes.string.isRequired,
        typeTwo: propTypes.string.isRequired,
        pic: propTypes.string.isRequired,
        generation: propTypes.string.isRequired,
    }).isRequired,
}