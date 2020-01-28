import React from 'react';
import { render, fireEvent, cleanup } from '../utils/customRender';
import RecipesContainer from '../components/EventPageComponents/RecipesContainer';
import {addRecipe} from '../actions'

jest.mock('../actions')
afterEach(cleanup)

describe('Recipes Container', () => {
    it('properly renders as host', () => {
        const recipes = [
            { recipe_name: 'Pizza', full_name: 'ethan' },
            { recipe_name: 'Salsa', full_name: 'bill' },
            { recipe_name: 'Chips', full_name: 'chris' },
        ];
        const component = render(
            <RecipesContainer
                recipes={recipes}
                user_id={3}
                eventID={80}
                isHost={true}
            />
        );
        const recipeItems = component.getAllByLabelText('recipe item')
        expect(recipeItems[0].textContent).toBe('Pizza - ethan')

        const recipeForm = component.getByLabelText('add recipe')
        expect(recipeForm).toBeVisible()
    });

    it('properly renders as guest', () => {
        const recipes = [
            { recipe_name: 'Pizza', full_name: 'ethan' },
            { recipe_name: 'Salsa', full_name: 'bill' },
            { recipe_name: 'Chips', full_name: 'chris' },
        ];
        const component = render(
            <RecipesContainer
                recipes={recipes}
                user_id={3}
                eventID={80}
                isHost={false}
            />
        );
        const recipeItems = component.getAllByLabelText('recipe item')
        expect(recipeItems[0].textContent).toBe('Pizza - ethan')

        const recipeForm = component.queryByLabelText('add recipe')
        expect(recipeForm).toBeNull()
    });

    it('allows adding of recipes', () => {
        const recipes = [
            { recipe_name: 'Pizza', full_name: 'ethan' },
        ];
        const component = render(
            <RecipesContainer
                recipes={recipes}
                user_id={3}
                eventID={80}
                isHost={true}
            />
        );
        const recipeForm = component.getByLabelText('add recipe')
        expect(recipeForm).toBeVisible()

        const recipeInput = component.getByLabelText('new recipe input')
        fireEvent.change(recipeInput, {target: {value: 'salsa'}})
        expect(recipeInput).toHaveValue('salsa')

        const addRecipeButton = component.getByLabelText('add recipe button')
        fireEvent.click(addRecipeButton)
        expect(addRecipe).toHaveBeenCalledTimes(1)

    });
});
