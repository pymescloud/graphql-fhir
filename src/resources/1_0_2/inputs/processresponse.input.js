const DateTimeScalar = require('../scalars/datetime.scalar');
const { GraphQLInputObjectType, GraphQLEnumType, GraphQLNonNull, GraphQLString, GraphQLList } = require('graphql');

// Util for extending gql objects
const { extendSchema } = require('../../../utils/schema.utils');

let ProcessResponseResourceInputType = new GraphQLEnumType({
	name: 'ProcessResponseResourceInputType',
	values: {
		ProcessResponse: { value: 'ProcessResponse' }
	}
});

/**
 * @name exports
 * @summary ProcessResponse Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'ProcessResponse_Input',
	description: 'Base StructureDefinition for ProcessResponse Resource.',
	fields: () => extendSchema(require('./domainresource.input'), {
		resourceType: {
			type: new GraphQLNonNull(ProcessResponseResourceInputType),
			description: 'Type of this resource.'
		},
		identifier: {
			type: new GraphQLList(require('./identifier.input')),
			description: 'The Response business identifier.'
		},
		request: {
			type: require('./reference.input'),
			description: 'Original request resource reference.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/process-outcome
		outcome: {
			type: require('./coding.input'),
			description: 'Transaction status: error, complete, held.'
		},
		disposition: {
			type: GraphQLString,
			description: 'A description of the status of the adjudication or processing.'
		},
		_disposition: {
			type: require('./element.input'),
			description: 'A description of the status of the adjudication or processing.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/ruleset
		ruleset: {
			type: require('./coding.input'),
			description: 'The version of the style of resource contents. This should be mapped to the allowable profiles for this and supporting resources.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/ruleset
		originalRuleset: {
			type: require('./coding.input'),
			description: 'The style (standard) and version of the original material which was converted into this resource.'
		},
		created: {
			type: DateTimeScalar,
			description: 'The date when the enclosed suite of services were performed or completed.'
		},
		_created: {
			type: require('./element.input'),
			description: 'The date when the enclosed suite of services were performed or completed.'
		},
		organization: {
			type: require('./reference.input'),
			description: 'The organization who produced this adjudicated response.'
		},
		requestProvider: {
			type: require('./reference.input'),
			description: 'The practitioner who is responsible for the services rendered to the patient.'
		},
		requestOrganization: {
			type: require('./reference.input'),
			description: 'The organization which is responsible for the services rendered to the patient.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/forms
		form: {
			type: require('./coding.input'),
			description: 'The form to be used for printing the content.'
		},
		notes: {
			type: new GraphQLList(require('./processresponsenotes.input')),
			description: 'Suite of processing note or additional requirements is the processing has been held.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/adjudication-error
		error: {
			type: new GraphQLList(require('./coding.input')),
			description: 'Processing errors.'
		}
	})
});
