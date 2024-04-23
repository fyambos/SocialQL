import {gql} from 'graphql-tag'

export const typeDefs = gql`
  type User {
    id: ID!
    username: String!
    email: String!
  }

  type Query {
    getUsers: [User!]!
    getUser(id: ID!): User
  }
`;
