import React, { useState } from 'react';
import { FaGithubAlt, FaPlus, FaSpinner } from 'react-icons/fa'

import api from '../../services/api'

import { Container, Form, SubmitButton } from './styles';

export default function Main() {
  const [newRepo, setNewRepo] = useState('')
  const [repositories, setRepositories] = useState([])
  const [loading, setLoading] = useState(0)

  function handleInputChange(e) {
    setNewRepo(e.target.value)
  }
  
  async function handleSubmit(e) {
    e.preventDefault();

    setLoading(1)

    const response = await api.get(`/repos/${newRepo}`)

    const data = {
      name: response.data.full_name
    }

    setRepositories([...repositories, data])
    setNewRepo('')
    setLoading(0)
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
    </Container>
  );
}
