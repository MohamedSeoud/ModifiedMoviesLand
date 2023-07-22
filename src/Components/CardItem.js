import React from 'react'
import { Fragment } from 'react'
import { Fade } from 'react-reveal'
import { useNavigate } from 'react-router-dom';


const CardItem = (props) => {
  const navigate = useNavigate();


  const onChooseHandler =(id)=>{
    navigate(`/movieDetail/${id}`,{replace:true});
  }


  return (
<Fragment>
<Fade left>
  <div className="box">
    <div className="body">
      <div className="imgContainer">
        <img onClick={()=>onChooseHandler(props?.movie?.id)} src={`https://image.tmdb.org/t/p/w500/`+ props?.movie?.poster_path} alt='' />
      </div>
      <div className="content d-flex flex-column  justify-content-center">
        <div onClick={()=>onChooseHandler(props?.movie?.id)}>
          <h4 className="text-white fs-5 textCard " style={{textAlign:'center'}} > اسم الفيلم :{props?.movie?.title}</h4>
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
