import React, { Fragment } from 'react'
import Header from './Layout/Header'
import MoviesList from './Components/MoviesList'
import { Container } from 'react-bootstrap'

const App = () => {
  return (
    <Fragment>
    <Header/>
    <Container className='justify-content-center'>
    <MoviesList/>
    </Container>
    </Fragment>
  )
}

export default App
