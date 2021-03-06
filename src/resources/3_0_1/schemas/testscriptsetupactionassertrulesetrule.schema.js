const IdScalar = require('../scalars/id.scalar');
const { GraphQLObjectType, GraphQLNonNull, GraphQLList } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary TestScript.setup.action.assert.ruleset.rule Schema
 */
module.exports = new GraphQLObjectType({
	name: 'TestScriptSetupActionAssertRulesetRule',
	description: 'The referenced rule within the external ruleset template.',
	fields: () => extendSchema(require('./backboneelement.schema'), {
		ruleId: {
			type: new GraphQLNonNull(IdScalar),
			description: 'Id of the referenced rule within the external ruleset template.'
		},
		_ruleId: {
			type: require('./element.schema'),
			description: 'Id of the referenced rule within the external ruleset template.'
		},
		param: {
			type: new GraphQLList(require('./testscriptsetupactionassertrulesetruleparam.schema')),
			description: 'Each rule template can take one or more parameters for rule evaluation.'
		}
	})
});
