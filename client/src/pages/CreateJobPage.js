import { useState } from 'react'
import { postNewJob } from '../lib/graphql/queries'
import { useNavigate } from 'react-router-dom'

function CreateJobPage() {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const navigate = useNavigate()

  const handleSubmit = async (event) => {
    event.preventDefault()

    const job = await postNewJob({ title, description })
    console.log('successfull post new job', job)
    if (job.id !== '') {
      navigate('/')
    }
  }

  return (
    <div>
      <h1 className='title'>New Job</h1>
      <div className='box'>
        <form>
          <div className='field'>
            <label className='label'>Title</label>
            <div className='control'>
              <input
                className='input'
                type='text'
                value={title}
                onChange={(event) => setTitle(event.target.value)}
              />
            </div>
          </div>
          <div className='field'>
            <label className='label'>Description</label>
            <div className='control'>
              <textarea
                className='textarea'
                rows={10}
                value={description}
                onChange={(event) => setDescription(event.target.value)}
              />
            </div>
          </div>
          <div className='field'>
            <div className='control'>
              <button className='button is-link' onClick={handleSubmit}>
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default CreateJobPage
