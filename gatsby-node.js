const path = require('path');
exports.createPages = ({ graphql, actions }) => {
	const { createPage } = actions;
	const recipeTemplate = path.resolve('src/templates/recipeTemplate.js');
	return graphql(`
		{
			allRecipe {
				edges {
					node {
						id
						link
						name
						summary
						cook {
							name
						}
					}
				}
			}
		}
	`).then(result => {
		if (result.errors) {
			throw result.errors;
		}
		result.data.allRecipe.edges.forEach(recipe => {
			createPage({
				path: `/recipe/${recipe.node.id}`,
				component: recipeTemplate,
				context: recipe.node,
			});
		});
	});
};
