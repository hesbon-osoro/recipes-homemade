module.exports = {
	siteMetadata: {
		title: `Recipes Homemade`,
		description: `Recipes Homemade site using React, Node, Firebase, and Gatsby.`,
		author: `@wazimuhb`,
		siteUrl: `https://recipes-homemade-hb.netlify.app/`,
	},
	plugins: [
		`gatsby-plugin-react-helmet`,
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
				// This will impact how browsers show your PWA/website
				// https://css-tricks.com/meta-theme-color-and-trickery/
				// theme_color: `#663399`,
				display: `minimal-ui`,
				icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
			},
		},
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.dev/offline
		// `gatsby-plugin-offline`,
	],
};
