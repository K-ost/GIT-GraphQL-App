import { gql } from "@apollo/client"

export const fetchUser = (login: string) => gql`
  query GetUser {
    user(login: "${login}") {
      id
      name
      login
      avatarUrl
      bioHTML
    }
  }
`

export const fetchAllRepos = (login: string) => gql`
  query GetAllRepos {
    user(login: "${login}") {
      repositories(first: 20, orderBy: {
        field: CREATED_AT
        direction: DESC
      }) {
        edges {
          node {
            id, name
          }
        }
      }
    }
  }
`

export const fetchIssues = (login: string, repo: string) => gql`
  query GetIssues {
    user(login: "${login}") {
      repository(name: "${repo}") {
        id, name
        issues(first: 100, states: OPEN, orderBy: {
          direction: DESC
          field: CREATED_AT
        }) {
          edges {
            node {
              id, title, bodyHTML, number,
              comments(first: 100) {
                edges {
                  node {
                    id
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`

export const fetchComments = (login: string, repo: string, num: number) => gql`
  query GetComments {
    user(login: "${login}") {
      repository(name: "${repo}") {
        issue(number: ${num}) {
          id, title
          comments(first: 100) {
            edges {
              node {
                id
                author {
                  avatarUrl
                  login
                }
                bodyHTML
                createdAt
              }
            }
          }
        }
      }
    }
  }
`

// Mutation
export const ADD_COMMENT = gql`
  mutation AddComment($input: AddCommentInput!) {
    addComment(input: $input) {
      subject {
        id
      }
    }
  }
`


