import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import Seo from '../components/seo';

const IndexPage = () => (
	<Layout>
		<Seo title="Home" />
	</Layout>
);

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
