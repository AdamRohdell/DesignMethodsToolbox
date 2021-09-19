const { buildSchema } = require("graphql");

module.exports = buildSchema(`

  type Method {
    _id: ID!
    title: String!
    input: String!
    output: String!
    what: String!
    how: String!
    experiences: String!
    research: String!
    createdAt: String!
  }


  input MethodInput {
    title: String!
    input: String!
    output: String!
    what: String!
    how: String!
    experiences: String!
    research: String!
  }

  type Query {
    methods:[Method!]
  }

  type Mutation {
    createMethod(method:MethodInput): Method
  }

  schema {
    query: Query
    mutation: Mutation
  }
`);
