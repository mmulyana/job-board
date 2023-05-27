import { getCompany } from './db/companies.js'
import { createJob } from './db/jobs.js'
import { getJobs, getJob, getJobsByCompany } from './db/jobs.js'

export const resolvers = {
  Query: {
    job: (__root, { id }) => getJob(id),
    jobs: () => getJobs(),
    company: (__root, { id }) => getCompany(id),
  },

  Mutation: {
    createNewJob: (_root, args) => {
      const { title, description } = args.input
      const companyId = 'FjcJCHJALA4i'
      return createJob({ companyId, title, description })
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
