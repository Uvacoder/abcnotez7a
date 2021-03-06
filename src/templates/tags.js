import { graphql } from 'gatsby';
import NotesPage from '../pages/notes';

export default NotesPage;

export const pageQuery = graphql`
	query ($tag: String!) {
		allMdx(
			sort: { fields: frontmatter___title, order: ASC }
			filter: { frontmatter: { tags: { eq: $tag } } }
		) {
			edges {
				node {
					id
					...AllPages
				}
			}
		}
	}
`;
