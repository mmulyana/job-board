import { getCompany } from './db/companies.js'
import { getJobs } from './db/jobs.js'

export const resolvers = {
  Query: {
    jobs: () => getJobs(),
  },

  Job: {
    company: (job) => getCompany(job.companyId),
    date: (job) => job.createdAt.slice(0, 'yyyy-mm-dd'.length)
  }
}
