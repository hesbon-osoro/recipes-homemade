import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout';
import Seo from '../components/seo';
import styled from 'styled-components';
import Image from 'gatsby-image';

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
	.info {
		padding: 1rem 0;
	}
	.info h2 {
		font-size: 30px;
		text-transform: capitalize;
		margin-bottom: 10px;
	}
	.info h5 {
		color: var(--darkGrey);
		text-transform: capitalize;
	}
	.info p {
		padding: 20px 0 30px 0;
		text-align: left;
	}
	.link {
		border: 1px solid black;
		padding: 4px 8px;
		display: inline-block;
		color: black;
		text-decoration: none;
		text-transform: capitalize;
		transition: all 0.3s ease-in-out;
		&:hover {
			background: black;
			color: white;
		}
	}
	.image {
		max-width: 360px;
		img {
			max-width: 360px;
		}
	}
	@media (min-width: 776px) {
		.card {
			display: grid;
			grid-template-columns: 250px 1fr;
			box-shadow: 2px 2px 6px 0px rgba(142, 142, 142, 1);
			border: none;
			border-radius: 4px;
			outline: none;
			margin-bottom: 2rem;
			background: #fff;
			padding: 1rem;
			text-align: center;
		}
		.info {
			display: flex;
			flex-direction: column;
			align-items: center;
			padding: 0 1.5rem;
		}

		.image > div {
			height: 250px;
		}
	}
`;
const IndexPage = props => {
	const summarySlice = str => str.slice(0, 100) + '...';
	return (
		<Layout>
			<Seo title="Home" />
			<AllRecipes>
				{props.data.allRecipe.edges.map(edge => (
					<article key={edge.node.id} className="card">
						<div className="image">
							<Image fluid={edge.node.localImage.childImageSharp.fluid} />
						</div>
						<div className="info">
							<h2>{edge.node.name}</h2>
							<h5>{edge.node.cook.name}</h5>
							<p>{edge.node.summary && summarySlice(edge.node.summary)}</p>
							<Link to={`/recipe/${edge.node.id}`} className="link">
								read more
							</Link>
						</div>
					</article>
				))}
			</AllRecipes>
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
					localImage {
						childImageSharp {
							fluid {
								...GatsbyImageSharpFluid_withWebp
							}
						}
					}
					cook {
						name
					}
				}
			}
		}
	}
`;

export default IndexPage;
