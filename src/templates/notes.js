import { graphql } from 'gatsby';
import NotesPage from '../pages/notes';

export default NotesPage;

export const pageQuery = graphql`
	fragment AllPages on Mdx {
		id
		frontmatter {
			title
			tags
			emoji
		}
		fields {
			slug
		}
	}

	query {
		allMdx {
			edges {
				node {
					...AllPages
				}
			}
		}
	}
`;
