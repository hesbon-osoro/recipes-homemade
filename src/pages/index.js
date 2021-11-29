import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout';
import Seo from '../components/seo';
import styled from 'styled-components';

const AllRecipes = styled.section`
	padding: 1rem 0;
	width: 85vw;
	margin: 0 auto;
	max-width: 730px;
	.card {
		box-shadow: 2px 2px 6px 0px rgba(142, 142, 142, 1);
		border: none;
		border-radius: 4px;
		outline: none;
		margin-bottom: 2rem;
		background: white;
		padding: 1rem;
		text-align: center;
	}
`;
const IndexPage = props => {
	return (
		<Layout>
			<Seo title="Home" />
			<AllRecipes>{props.data.allRecipe.edges.map(edge => (
				<article key={edge.node.id} className='card'>
					<h2>
						{edge.node.name} - <small>{edge.node.cook.name}</small>
					</h2>
					<div>{edge.node.summary}</div>
					<div>{edge.node.link}</div>
					<Link to={`/recipe/${edge.node.id}`}>Comment</Link>
				</article>
			))}</AllRecipes>
		</Layout>
	);
};
export const query = graphql`
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
`;

export default IndexPage;
