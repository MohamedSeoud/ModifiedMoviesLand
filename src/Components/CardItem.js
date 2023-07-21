import React from 'react'
import { Fragment } from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import image from '../images/logo.jpg'
import { Zoom,Fade } from 'react-reveal'


const CardItem = (props) => {
  console.log(`https://image.tmdb.org/t/p/w500/`+ props?.movie?.poster_path)
  return (
    <Fragment>
<Fade left>
  <div className="box">
    <div className="body">
      <div className="imgContainer">
        <img src={`https://image.tmdb.org/t/p/w500/`+ props?.movie?.poster_path} alt />
      </div>
      <div className="content d-flex flex-column  justify-content-center">
        <div>
          <h4 className="text-white fs-5 textCard " style={{textAlign:'center'}}> اسم الفيلم :{props?.movie?.title}</h4>
          <h4 className="text-white fs-5 textCard" style={{textAlign:'center'}}>تاريخ الاصدار :{props?.movie?.release_date}</h4>
          <h4 className="text-white fs-5 textCard" style={{textAlign:'center'}}>التقيم :{props?.movie?.vote_average}</h4>
          <h4 className="text-white fs-5 textCard" style={{textAlign:'center'}}>عدد الماشهادات :{props?.movie?.vote_count}</h4>

        </div>
      </div>
    </div>
  </div>
  </Fade>
  



    </Fragment>
  )
}

export default CardItem
