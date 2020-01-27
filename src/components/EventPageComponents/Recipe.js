import React from 'react';
import { Icon } from 'semantic-ui-react';

import { claimRecipe, removeRecipe } from '../../actions';
import { useStateValue } from '../../hooks';

const Recipe = ({ recipe, user_id, eventID }) => {
    const [, dispatch] = useStateValue();
    let userSubmitted = recipe.full_name ? null : user_id;
    return (
        <>
            <Icon
                size='small'
                name={recipe.full_name ? 'times' : 'check'}
                onClick={() =>
                    claimRecipe(dispatch, eventID, {
                        recipe_name: recipe.recipe_name,
                        user_id: userSubmitted,
                    })
                }
            />
            <Icon
                name='trash alternate'
                size='small'
                onClick={() => {
                    removeRecipe(dispatch, parseInt(eventID), {
                        data: {
                            recipe_name: recipe.recipe_name,
                        },
                    });
                }}
            />
            {recipe.recipe_name} - {recipe.full_name || ''}
        </>
    );
};

export default Recipe;
