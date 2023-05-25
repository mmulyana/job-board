import { useParams } from 'react-router'
import { useEffect, useState } from 'react'
import { getCompanyById } from '../lib/graphql/queries'
import JobList from '../components/JobList'

function CompanyPage() {
  const { companyId } = useParams()
  const [company, setCompany] = useState(null)

  useEffect(() => {
    getCompanyById(companyId).then(setCompany)
    return () => setCompany(null)
  }, [companyId])

  if (!company) {
    return <p>Loading</p>
  }

  return (
    <div>
      <h1 className='title'>{company.name}</h1>
      <div className='box'>{company.description}</div>
      <JobList jobs={company.jobs} />
    </div>
  )
}

export default CompanyPage
