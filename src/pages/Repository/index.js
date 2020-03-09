import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import api from '../../services/api'

import Container from '../../components/Container'
import { Loading, Owner } from './styles'

export default function Repository({ match }) {
  const [repository, setRepository] = useState({})
  const [repoName, setRepoName] = useState({})
  const [issues, setIssues] = useState([])
  const [loading, setLoading] = useState(true)
  
  useEffect(()=>{
    setRepoName(decodeURIComponent(match.params.repository))
    
    async function getRepositoriesFromAPI(){
      const [repository, issues] = await Promise.all([
        api.get(`/repos/${repoName}`),
        api.get(`/repos/${repoName}/issues`, {
          params: {
            state: 'open',
            per_page: 5
          }
        }),
      ])
      setRepository(repository.data)
      setIssues(issues.data)
      setLoading(false)
    }
    getRepositoriesFromAPI()
  },[match.params.repository, repoName])

  if(loading) {
    return <Loading>Loading...</Loading>
  }

  return (
  <Container>
    <Owner>
      <Link to="/">{"← Back to repositories"}</Link>
      <img src={repository.owner.avatar_url} alt={repository.owner.login} />
      <h1>{repository.name}</h1>
      <p>{repository.description}</p>
      <a rel="noopener noreferrer" target='_blank' href={`https://github.com/${repoName}`}>Go to Github</a>
    </Owner>
  </Container>
  );
}

Repository.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      repository: PropTypes.string
    })
  }).isRequired
}
