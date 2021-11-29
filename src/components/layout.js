/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

import Header from './header';
import './layout.css';

const Layout = ({ children }) => {
	const data = useStaticQuery(graphql`
		query SiteTitleQuery {
			site {
				siteMetadata {
					title
				}
			}
		}
	`);

	return (
		<>
			<Header siteTitle={data.site.siteMetadata?.title || `Title`} />
			<main>{children}</main>
			<footer
				style={{
					textAlign: 'center',
				}}
			>
				© {new Date().getFullYear()}, Built with
				{` `}
				<a
					href="https://hb-wazimu.netlify.app/"
					target="_blank"
					rel="noopener noreferrer"
				>
					Wazimu
				</a>
			</footer>
		</>
	);
};

Layout.propTypes = {
	children: PropTypes.node.isRequired,
};

export default Layout;
