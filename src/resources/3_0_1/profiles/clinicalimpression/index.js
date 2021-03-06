const {
	ClinicalImpressionQuery,
	ClinicalImpressionListQuery,
	ClinicalImpressionInstanceQuery
} = require('./query');

const {
	ClinicalImpressionCreateMutation,
	ClinicalImpressionUpdateMutation,
	ClinicalImpressionDeleteMutation
} = require('./mutation');

/**
 * @name exports
 * @static
 * @summary GraphQL Configurations. This is needed to register this profile
 * with the GraphQL server.
 */
module.exports = {
	/**
	* Define Query Schema's here
	* Each profile will need to define the two queries it supports
	* and these keys must be unique across the entire application, like routes
	*/
	query: {
		ClinicalImpression: ClinicalImpressionQuery,
		ClinicalImpressionList: ClinicalImpressionListQuery
	},
	/**
	* Define Mutation Schema's here
	* Each profile will need to define the supported mutations
	* and these keys must be unique across the entire application, like routes
	*/
	mutation: {
		ClinicalImpressionCreate: ClinicalImpressionCreateMutation,
		ClinicalImpressionUpdate: ClinicalImpressionUpdateMutation,
		ClinicalImpressionDelete: ClinicalImpressionDeleteMutation
	},
	/**
	* These properties are so the core router can setup the approriate endpoint
	* for a direct query against a resource
	*/
	instance_query: {
		name: 'ClinicalImpression',
		path: '/3_0_1/ClinicalImpression/:id',
		query: ClinicalImpressionInstanceQuery
	}
};
