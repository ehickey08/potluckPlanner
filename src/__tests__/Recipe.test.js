import React from 'react';
import { render, fireEvent, cleanup } from '../utils/customRender';
import Recipe from '../components/EventPageComponents/Recipe'
import {claimRecipe, removeRecipe} from '../actions'

jest.mock('../actions')
afterEach(cleanup)

describe('Individual Recipe', () => {
    it('properly renders', () => {
        const recipe = {full_name: '', recipe_name: 'pizza'}
        const component = render(<Recipe recipe={recipe} user_id={3} eventID={80} />)
        expect(component.getByLabelText('recipe item')).toBeVisible()
    })

    it('allows claiming of recipe', () => {
        const recipe = {full_name: '', recipe_name: 'pizza'}
        const component = render(<Recipe recipe={recipe} user_id={3} eventID={80} />)
        const icon = component.getByLabelText('claim')
        expect(icon).toBeVisible()
        fireEvent.click(icon)
        expect(claimRecipe).toHaveBeenCalledTimes(1)
    })

    it('allows unclaiming of recipe', () => {
        const recipe = {full_name: 'ethan', recipe_name: 'pizza'}
        const component = render(<Recipe recipe={recipe} user_id={3} eventID={80} />)
        const icon = component.getByLabelText('unclaim')
        expect(icon).toBeVisible()
        fireEvent.click(icon)
        expect(claimRecipe).toHaveBeenCalledTimes(2)
    })
})
