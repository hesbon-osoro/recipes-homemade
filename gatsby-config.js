require('dotenv').config({ path: '.env' });
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
			resolve: `gatsby-plugin-disqus`,
			options: {
				shortname: `https-recipes-homemade-hb-netlify-app.disqus.com`
			}
		},
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
				credential: {
					"type": process.env.FIREBASE_TYPE,
					"project_id": process.env.FIREBASE_PROJECT_ID,
					"private_key_id": process.env.FIREBASE_PRIVATE_KEY_ID,
					"private_key": process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
					"client_email": process.env.FIREBASE_CLIENT_EMAIL,
					"client_id": process.env.FIREBASE_CLIENT_ID,
					"auth_uri": process.env.FIREBASE_AUTH_URI,
					"token_uri": process.env.FIREBASE_TOKEN_URI,
					"auth_provider_x509_cert_url": process.env.FIREBASE_AUTH_PROVIDER_X509_CERT_URL,
					"client_x509_cert_url": process.env.FIREBASE_CLIENT_X509_CERT_URL
				},
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
