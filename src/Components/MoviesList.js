import React, { Fragment } from 'react'
import CardItem from './CardItem'
import { Container,Row } from 'react-bootstrap'
import { useEffect } from 'react'
import { useState } from 'react'
import { Fade } from 'react-reveal'
import axios from 'axios'
import PaginationPage from './PaginationPage'

const MoviesList = () => {

const [pageNumber,setPageNumber]=useState(1);
const [listData,setListData] = useState([]);

const FetchData = async()=>{
  let config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=ar-US&page=${pageNumber}&sort_by=popularity.desc`,
    headers: { 
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MzdlMDM3ZWRmOGU2ZmE3ODUyMzAyZjIzNDVkOTY2OSIsInN1YiI6IjY0YmE3NjlmMDZmOTg0MDEzOGJjYTI5NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.q-2zY5sZuLTwDPX_U_naZA7JvZveNJI0HMeL85kbL1w'
    }
  };
  
  axios.request(config)
  .then((response) => {
    setListData(response.data.results);
  })
  .catch((error) => {
    console.log(error);
  });
}

useEffect(()=>{    
FetchData();
},[pageNumber])

const onPageChange =(pageNumber)=>{
  setPageNumber(pageNumber);
}
  return (

    <Fragment>
    <Fade left>
    <Row className='moviesContainer d-flex  justify-content-center' >
    { listData.map((item)=>{
      return(<CardItem movie={item}/>)})
    }
    </Row>
    <Row className='d-flex justify-content-center'>
    <PaginationPage pageNumber={onPageChange}/>
    </Row>
    </Fade>
    
    </Fragment>
  )
}

export default MoviesList
