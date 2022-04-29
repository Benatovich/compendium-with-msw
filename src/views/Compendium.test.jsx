import { render, screen } from '@testing-library/react'
import Compendium from './Compendium'
import { rest } from 'msw'
import { setupServer } from 'msw/node'
import favPokemon from '../services/pokemon'

const pokeMock = {
    id: 10,
    name: 'squirtle',
    abilityOne: 'torrent',
    abilityTwo: 'NA',
    typeOne: 'water',
    typeTwo: 'NA',
    pic: 'http://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png',
    generation: 1,
  
}


const server = setupServer(
    rest.get('https://pokedex-alchemy.herokuapp.com/api/pokedex', (req, res, ctx) => {
        return res(ctx.json([pokeMock]))
    })
)

describe('compendium item display test suite', () => {

    beforeAll(() => server.listen())
    afterAll(() => server.close())

    test('Should render the header', async () => {
        render(<Compendium />)
        const logo = screen.getByRole('img', {  name: /pokelogo/i})
        const title = screen.getByRole('heading', {  name: /poképendium/i})
        // const pokeName = await screen.findByText(user.name)
        
        expect(logo).toBeInTheDocument()
        expect(title).toBeInTheDocument()
      })
    // it('renders a list of pokemon with images', async () => {
    //     render(<Compendium />)

    //     const img = await screen.findAllByLabelText('pokepic')

    //     expect(img).toStrictEqual(expect.arrayContaining([]))
    // })
})