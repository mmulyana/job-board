import { GraphQLError } from 'graphql'
import { getCompany } from './db/companies.js'
import { createJob, deleteJob, updateJob } from './db/jobs.js'
import { getJobs, getJob, getJobsByCompany } from './db/jobs.js'

export const resolvers = {
  Query: {
    job: async (__root, { id }) => {
      const job = await getJob(id)
      if(!job) {
        throw notFoundError(`company not found ${id}`)
      }
      return job
    },
    jobs: () => getJobs(),
    company: async (__root, { id }) => {
      const company = await getCompany(id)
      if (!company) {
        throw notFoundError(`company not found ${id}`)
      }
      return company
    },
  },

  Mutation: {
    createNewJob: (_root, args) => {
      const { title, description } = args.input
      const companyId = 'FjcJCHJALA4i'
      return createJob({ companyId, title, description })
    },
    deleteJob: (__root, { id }) => deleteJob(id),
    updateJob: (__root, args) => {
      const { id, title, description } = args.input
      return updateJob({ id, title, description })
    },
  },

  Job: {
    company: (job) => getCompany(job.companyId),
    date: (job) => job.createdAt.slice(0, 'yyyy-mm-dd'.length),
  },

  Company: {
    jobs: (company) => getJobsByCompany(company.id),
  },
}

function notFoundError(message) {
  return new GraphQLError(message, {
    extensions: { code: 'NOT_FOUND' },
  })
}
