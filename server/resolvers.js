import { getJobs } from "./db/jobs.js"

export const resolvers = {
  Query: {
    job: () => {
      return {
        title: 'frontend intern',
        description: 'work closely with backend and product',
      }
    },
    jobs: () => getJobs(),
  },
}
 