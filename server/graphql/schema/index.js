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

  type Source {
    _id: ID!
    title: String!
    author: String!
    year: String!
    url: String!
  }

  input SourceInput {
    title: String!
    author: String!
    year: String!
    url: String!
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
    sources:[Source!]
  }

  type Mutation {
    createMethod(method:MethodInput): Method
    addSource(source:SourceInput): Source
  }

  schema {
    query: Query
    mutation: Mutation
  }
`);
