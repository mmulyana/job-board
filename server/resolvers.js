export const resolvers = {
  Query: {
    job: () => {
      return {
        title: 'frontend intern',
        description: 'work closely with backend and product',
      }
    },
    jobs: () => {
      return [
        {
          title: 'frontend intern',
          description: 'proficient with frontend framework like react or vue'
        },
        {
          title: 'backend intern',
          description: 'must have experience with express js with 1+ year'
        },
      ]
    }
  },
}
 