import { useNavigate, useParams } from 'react-router-dom';
import image from '../images/2.jpg'
import React, { Fragment, useEffect, useState } from 'react'
import axios from 'axios';

const MovieDetails = () => {

    const navigate = useNavigate();

    const [data,setData] = useState({});
    const {id} = useParams();

    const FetchMovie = async()=>{
        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: `https://api.themoviedb.org/3/movie/${id}?language=ar`,
            headers: { 
              'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MzdlMDM3ZWRmOGU2ZmE3ODUyMzAyZjIzNDVkOTY2OSIsInN1YiI6IjY0YmE3NjlmMDZmOTg0MDEzOGJjYTI5NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.q-2zY5sZuLTwDPX_U_naZA7JvZveNJI0HMeL85kbL1w'
            }
          };
          
          await axios.request(config)
          .then((response) => {
            setData(response.data);
          })
          .catch((error) => {
            console.log(error);
          });
    }

    useEffect(()=>{

        FetchMovie();

    },[])

    const onBackHandler = ()=>{
        navigate('/',{replace:true})
    }



  return (
    <Fragment>
    {
<section id="about" className="about">
  <div className="container" data-aos="fade-up">
    <div className="row">
      <div className="col-lg-6 order-1 order-lg-2" data-aos="zoom-in" data-aos-delay={100}>
        <div className="about-img">
          <img src={`https://image.tmdb.org/t/p/w500/`+ data?.backdrop_path} alt />
        </div>
      </div>
      <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content">
        <h3 style={{color:'white',fontSize:'40px'}} className='textDetails'>اسم الفيلم : {data?.title} </h3>
        <p className="fst-italic textDetails" style={{color:'white',fontSize:'20px'}} >
          وصف القيلم : {data?.tagline}
        </p>
        <ul>
          <li style={{color:'white',fontSize:'30px'}} className='textDetails'><i className="bi bi-check-circle" /> تاريخ الاصدار : {data?.release_date}</li>
          <li style={{color:'white',fontSize:'30px'}} className='textDetails'><i className="bi bi-check-circle" /> عدد المشاهدات : {data?.runtime}</li>
          <li style={{color:'white',fontSize:'30px'}} className='textDetails'><i className="bi bi-check-circle" /> ألتقيم : {data?.vote_average}</li>
          <li style={{color:'white',fontSize:'30px'}} className='textDetails'><i className="bi bi-check-circle" /> عدد المقيمين : {data?.vote_count}</li>
          </ul>
        <p style={{color:'white'}} className='textDetails'>
        قصة الفيلم : {data?.overview}
        </p>
        
  
      </div>
      
    </div>
    
    <div className='AddToCartBtn'>
  
    <button  className='addToCart textDetails' onClick={onBackHandler}  type="submit" style={{color:'white',fontSize:'30px'}} >  الصفحة الرئيسيه</button>
    <button  className='addToCart textDetails'  type="submit" style={{color:'white',fontSize:'30px'}}> صفحة المشاهدة</button>
    </div>
  </div>
  
</section>

    }    
    </Fragment>
  )
}

export default MovieDetails
