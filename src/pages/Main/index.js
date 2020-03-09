import React, { useState, useEffect } from 'react'
import { FaGithubAlt, FaPlus, FaSpinner } from 'react-icons/fa'
import { Link } from 'react-router-dom'

import api from '../../services/api'

import Container from '../../components/Container'
import { Form, SubmitButton, List } from './styles'

export default function Main() {
  const [newRepo, setNewRepo] = useState('')
  const [repositories, setRepositories] = useState(JSON.parse(localStorage.getItem('repositories')) || [])
  const [loading, setLoading] = useState(0)

  useEffect(()=>localStorage.setItem('repositories', JSON.stringify(repositories)), [repositories])

  function handleInputChange(e) {
    setNewRepo(e.target.value)
  }
  
  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(1)
    try {  
      const response = await api.get(`/repos/${newRepo}`)
      const data = { name: response.data.full_name }
      setRepositories([...repositories, data])
    } catch (e) {
      console.log(e)
    }
    setNewRepo('')
    setLoading(0)
  }

  function removeRepository(index) {
    let newRepositories = [...repositories]
    newRepositories.splice(index, 1)
    setRepositories(newRepositories)
  }

  return (
    <Container>
      <h1>
        <FaGithubAlt />
        Repositories
      </h1>
      <Form onSubmit={handleSubmit}>
        <input 
          value={newRepo} 
          onChange={handleInputChange}
          type='text' 
          placeholder='Add repository' 
        />
        <SubmitButton loading={loading}>
          { loading ? (
            <FaSpinner color='#FFF' size={14} />
          ) : (
          <FaPlus color='#FFF' size={14} />
          )}
        </SubmitButton>
      </Form>

      <List>
        {repositories.map((repository, index) => (
          <li key={index}>
            <Link to={`/repository/${encodeURIComponent(repository.name)}`}>{repository.name}</Link>
            <span onClick={()=>removeRepository(index)} className="remove-btn">Remove</span>
          </li>
        ))}
      </List>
    </Container>
  );
}
