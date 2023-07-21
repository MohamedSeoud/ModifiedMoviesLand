import React, { Fragment } from 'react'
import CardItem from './CardItem'
import { Container,Row } from 'react-bootstrap'
import { useEffect } from 'react'
import { useState } from 'react'
import { Fade } from 'react-reveal'
import axios from 'axios'

const MoviesList = () => {

const [listData,setListData] = useState([]);

useEffect(()=>{    
const FetchData = async()=>{
  let config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: 'https://api.themoviedb.org/3/movie/popular',
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
FetchData();
},[])
  return (

    <Fragment>
    <Fade left>
    <Row className='moviesContainer d-flex  justify-content-center' >
    { listData.map((item)=>{
      return(<CardItem movie={item}/>)})
    }
    </Row>
    </Fade>
    
    </Fragment>
  )
}

export default MoviesList
