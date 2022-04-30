import { render, screen, waitFor, waitForElementToBeRemoved } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { act } from 'react-dom/test-utils'
import Compendium from './views/Compendium'
import { rest } from 'msw'
import { setupServer } from 'msw/node'

const pokeMock = {
    results: [
        {
            id: 10,
            pokemon: 'squirtle',
            ability_1: 'torrent',
            ability_2: 'NA',
            type_1: 'water',
            type_2: 'NA',
            url_image: 'http://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png',
            generation_id: 1,
        }
    ]
} 

const server = setupServer(
    rest.get('https://pokedex-alchemy.herokuapp.com/api/pokedex', (req, res, ctx) => {
        return res(ctx.json(pokeMock))
    })
)

describe('pokesearch behavioral test', () => {

    beforeAll(() => server.listen())
    afterAll(() => server.close())

    it('renders squirtle when a user searches for squirtle', async () => {
        render(<Compendium />)
        
        const loading = screen.getByAltText('rocking pokeball')
        await waitForElementToBeRemoved(loading)
        
        const search = await screen.findByPlaceholderText('pokeSearch')
        expect(search).toBeInTheDocument()
        act(() => {
            userEvent.type(search, 'squirtle')
        })

        waitFor
        const pokeImg = await screen.findAllByRole('img', {  name: /pokepic/i})
        expect(pokeImg[0]).toBeInTheDocument()
    })
})