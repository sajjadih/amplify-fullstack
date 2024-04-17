/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTodo = /* GraphQL */ `
  query GetTodo($id: ID!) {
    getTodo(id: $id) {
      id
      name
      description
      interest_rate
      inflation_rate
      current_value
      future_value
      present_value
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listTodos = /* GraphQL */ `
  query ListTodos(
    $filter: ModelTodoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTodos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        interest_rate
        inflation_rate
        current_value
        future_value
        present_value
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
