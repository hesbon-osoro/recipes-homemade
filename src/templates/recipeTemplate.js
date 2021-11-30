import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

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
	img {
		max-width: 400px;
	}
`;
const RecipeTemplate = ({ pageContext }) => {
	return (
		<RecipeItemWrapper>
			<Link to="/" className="link">
				back to all recipes
			</Link>
			<div className="info">
				<h1>{pageContext.name}</h1>
				<h4>{pageContext.cook.name}</h4>
				<img src={pageContext.imageUrl} alt="recipe image" />
				<p>{pageContext.summary}</p>
				<a
					href={pageContext.link}
					target="_blank"
					rel="noopener noreferrer"
					className="link"
				>
					Youtube
				</a>
			</div>
		</RecipeItemWrapper>
	);
};

export default RecipeTemplate;
