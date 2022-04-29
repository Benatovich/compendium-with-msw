import { render, screen } from '@testing-library/react'
import Compendium from './Compendium'

describe('compendium item display test suite', () => {
    it('renders a list of pokemon with images', async () => {
        render(<Compendium />)

        const img = await screen.findAllByLabelText('pokepic')

        expect(img).toStrictEqual(expect.arrayContaining([]))
    })
})