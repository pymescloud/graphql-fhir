const {
	EligibilityResponseQuery,
	EligibilityResponseListQuery,
	EligibilityResponseInstanceQuery
} = require('./query');

const {
	EligibilityResponseCreateMutation,
	EligibilityResponseUpdateMutation,
	EligibilityResponseDeleteMutation
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
		EligibilityResponse: EligibilityResponseQuery,
		EligibilityResponseList: EligibilityResponseListQuery
	},
	/**
	* Define Mutation Schema's here
	* Each profile will need to define the supported mutations
	* and these keys must be unique across the entire application, like routes
	*/
	mutation: {
		EligibilityResponseCreate: EligibilityResponseCreateMutation,
		EligibilityResponseUpdate: EligibilityResponseUpdateMutation,
		EligibilityResponseDelete: EligibilityResponseDeleteMutation
	},
	/**
	* These properties are so the core router can setup the approriate endpoint
	* for a direct query against a resource
	*/
	instance_query: {
		name: 'EligibilityResponse',
		path: '/3_0_1/EligibilityResponse/:id',
		query: EligibilityResponseInstanceQuery
	}
};
