import React, { Fragment } from 'react'
import Header from './Layout/Header'
import MoviesList from './Components/MoviesList'
import { Container } from 'react-bootstrap'
import MovieDetails from './Components/MovieDetails'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <Fragment>
    <Header/>
    <div className='about'>
    <Container className='justify-content-center'>
    <Routes>
    <Route path='/' element={<MoviesList/>}/>
    <Route path='/movieDetail/:id' element={<MovieDetails/>}/>
    </Routes>
    </Container>
    </div>
    </Fragment>
  )
}

export default App
