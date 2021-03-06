const { GraphQLObjectType, GraphQLEnumType, GraphQLNonNull, GraphQLString, GraphQLList } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');

let SubstanceResourceType = new GraphQLEnumType({
	name: 'SubstanceResourceType',
	values: {
		Substance: { value: 'Substance' }
	}
});

/**
 * @name exports
 * @summary Substance Schema
 */
module.exports = new GraphQLObjectType({
	name: 'Substance',
	description: 'Base StructureDefinition for Substance Resource.',
	fields: () => extendSchema(require('./domainresource.schema'), {
		resourceType: {
			type: new GraphQLNonNull(SubstanceResourceType),
			description: 'Type of this resource.'
		},
		identifier: {
			type: new GraphQLList(require('./identifier.schema')),
			description: 'Unique identifier for the substance.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/substance-category
		category: {
			type: new GraphQLList(require('./codeableconcept.schema')),
			description: 'A code that classifies the general type of substance.  This is used  for searching, sorting and display purposes.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/substance-code
		code: {
			type: new GraphQLNonNull(require('./codeableconcept.schema')),
			description: 'A code (or set of codes) that identify this substance.'
		},
		description: {
			type: GraphQLString,
			description: 'A description of the substance - its appearance, handling requirements, and other usage notes.'
		},
		_description: {
			type: require('./element.schema'),
			description: 'A description of the substance - its appearance, handling requirements, and other usage notes.'
		},
		instance: {
			type: new GraphQLList(require('./substanceinstance.schema')),
			description: 'Substance may be used to describe a kind of substance, or a specific package/container of the substance: an instance.'
		},
		ingredient: {
			type: new GraphQLList(require('./substanceingredient.schema')),
			description: 'A substance can be composed of other substances.'
		}
	})
});
