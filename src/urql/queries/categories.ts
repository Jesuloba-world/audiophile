import { gql } from "@urql/core";

export const getAllCategorySlugs = gql`
	query {
		allCategories {
			slug
		}
	}
`;

export const getCategories = gql`
	query {
		allCategories {
			id
			name
			slug
			image {
				altText
				image
			}
		}
	}
`;

export const getSpecificCategory = gql`
	query ($slug: String!) {
		categoryBySlug(slug: $slug) {
			name
			slug
			products {
				id
				name
				slug
				new
				image {
					desktop
					mobile
					tablet
					altText
				}
				description
			}
		}
	}
`;
