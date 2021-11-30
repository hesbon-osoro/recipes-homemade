import React from 'react';
import styled from 'styled-components';
import { graphql, Link } from 'gatsby';
import Image from 'gatsby-image';
import { Disqus } from 'gatsby-plugin-disqus';

const RecipeItemWrapper = styled.section`
	width: 100vw;
	margin: 4rem auto;
	padding: 2rem;
	.link {
		border: 1px solid black;
		padding: 4px 8px;
		display: inline-block;
		color: black;
		text-decoration: none;
		text-transform: capitalize;
		transition: all 0.3s ease-in-out;
		margin-bottom: 2rem;
		&:hover {
			background: black;
			color: white;
		}
	}
	.info {
		text-align: center;
		margin-bottom: 1rem;
	}
	.info h1 {
		letter-spacing: 5px;
		margin-bottom: 0.5rem;
		text-transform: capitalize;
		font-size: 48px;
	}
	.info h4 {
		letter-spacing: 5px;
		margin-bottom: 0.5rem;
		text-transform: capitalize;
		font-size: 14px;
		text-align: center;
	}
	.info p {
		margin: 0.95em 1.2em;
		padding: 0.2em;
	}
`;
const RecipeTemplate = ({ data }) => {
	const url = 'https://recipes-homemade-hb.netlify.app/recipe/';
	const blogIdentity = data.recipe.id;
	let disqusConfig = {
		url: `${url}${blogIdentity}`,
		identifier: blogIdentity,
		title: data.recipe.name,
	};
	return (
		<RecipeItemWrapper>
			<Link to="/" className="link">
				back to all recipes
			</Link>
			<div className="info">
				<h1>{data.recipe.name}</h1>
				<h4>{data.recipe.cook.name}</h4>
				<Image fluid={data.recipe.localImage.childImageSharp.fluid} />
				<p>{data.recipe.summary}</p>
				{data.recipe.link && (
					<a
						href={data.rexipe.link}
						target="_blank"
						rel="noopener noreferrer"
						className="link"
					>
						Youtube
					</a>
				)}
			</div>
			<Disqus config={disqusConfig} />
		</RecipeItemWrapper>
	);
};

export const query = graphql`
	query RecipeQuery($recipeId: String!) {
		recipe(id: { eq: $recipeId }) {
			id
			name
			summary
			link
			localImage {
				childImageSharp {
					fluid {
						...GatsbyImageSharpFluid_withWebp
					}
				}
			}
			cook {
				name
				id
			}
		}
	}
`;
export default RecipeTemplate;
