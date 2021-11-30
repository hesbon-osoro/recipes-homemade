module.exports = {
	siteMetadata: {
		title: `Recipes Homemade`,
		description: `Recipes Homemade site using React, Node, Firebase, and Gatsby.`,
		author: `@wazimuhb`,
		siteUrl: `https://recipes-homemade-hb.netlify.app/`,
	},
	plugins: [
		`gatsby-plugin-react-helmet`,
		{
			resolve: `gatsby-plugin-remote-images`,
			options: {
				nodeType: 'Recipe',
				imagePath: 'imageUrl',
			},
		},
		`gatsby-plugin-image`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`,
			},
		},
		`gatsby-plugin-styled-components`,
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		{
			resolve: 'gatsby-firesource',
			options: {
				credential: require('./firebase.json'),
				types: [
					{
						type: 'Recipe',
						collection: 'recipes',
						map: doc => ({
							name: doc.name,
							summary: doc.summary,
							link: doc.link,
							imageUrl: doc.imageUrl,
							cook___NODE: doc.cook.id,
						}),
					},
					{
						type: 'Cook',
						collection: 'cooks',
						map: doc => ({
							name: doc.name,
						}),
					},
				],
			},
		},
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `gatsby-starter-default`,
				short_name: `starter`,
				start_url: `/`,
				background_color: `#663399`,
				display: `minimal-ui`,
				icon: `src/images/gatsby-icon.png`,
			},
		},
	],
};
