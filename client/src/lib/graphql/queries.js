import { GraphQLClient, gql } from 'graphql-request'

const client = new GraphQLClient('http://localhost:9000/graphql')

export async function getJob(id) {
  const query = gql`
    query JobById($id: ID!) {
      job(id: $id) {
        id
        title
        description
        date
        company {
          id
          name
          description
        }
      }
    }
  `

  const { job } = await client.request(query, { id })
  return job
}

export async function getJobs() {
  const query = gql`
    query {
      jobs {
        id
        date
        title
        company {
          id
          name
        }
      }
    }
  `

  const { jobs } = await client.request(query)
  return jobs
}

export async function getCompanyById(id) {
  const query = gql`
    query CompanyById($id: ID!) {
      company(id: $id) {
        id
        name
        description
        jobs {
          id
          date
          title
        }
      }
    }
  `

  const { company } = await client.request(query, { id })
  return company
}

export async function postNewJob({ title, description }) {
  const mutation = gql`
    mutation CreateNewJob($input: CreateNewJobInput!) {
      job: createNewJob(input: $input) {
        id
        title
        date
        description
        company {
          id
          name
        }
      }
    }
  `

  const { job } = await client.request(mutation, {
    input: { title, description },
  })

  return job
}
