import { metalGearMunger } from '../utils/helpers';

const mgs3Characters = [
    'the boss'
    'the sorrow'
    'the fury'
    'the end'
    'the fear'
    'the pain'
    'revolver ocelot'
    'eva'
    'colonel volgin'
    'big boss'
]

export const fetchCharacter = async () => {
    const metalGearList = await Promise.all(
        mgs3Characters.map(async (character) => {
            const fetchedCharacter = await fetch(
                `${process.env.API_URL}`
            )
        })
    )
}