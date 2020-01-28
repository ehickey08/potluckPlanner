import React, { useState } from 'react';
import headerImg from '../../images/brooke-lark-nTZOILVZuOg-unsplash.jpg';

import { addRecipe } from '../../actions';
import { useStateValue } from '../../hooks';

import Recipe from './Recipe';
import { StyledRecipesContainer } from '../../styled_components/EventPage/EventContainers';

const RecipesContainer = ({ recipes, user_id, eventID, isHost }) => {
    const [recipe, setRecipe] = useState({ recipe_name: '' });
    const [, dispatch] = useStateValue();

    const addNewRecipe = e => {
        e.preventDefault();
        addRecipe(dispatch, eventID, recipe);
        setRecipe({ recipe_name: '' });
    };

    return (
        <StyledRecipesContainer>
            <img src={headerImg} alt='Yummy food!' />
            <h3>Choose a dish</h3>
            {typeof recipes === 'object' &&
                recipes.map(recipe => (
                    <Recipe
                        recipe={recipe}
                        user_id={user_id}
                        eventID={eventID}
                        key={recipe.recipe_name}
                    />
                ))}
            {isHost && (
                <form onSubmit={e => addNewRecipe(e)}>
                    <input
                        type='text'
                        value={recipe.recipe_name}
                        placeholder='Add Dish'
                        onChange={e =>
                            setRecipe({ recipe_name: e.target.value })
                        }
                    />
                    <button onSubmit={e => addNewRecipe(e)}>Add Dish</button>
                </form>
            )}
        </StyledRecipesContainer>
    );
};

export default RecipesContainer;
