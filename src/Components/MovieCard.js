import React, { useState } from 'react';
import './MovieCard.css';

import { useNavigate } from 'react-router-dom'
const MovieCard = (props) => {

    const navigate = useNavigate();
    // const handlenavigate=()=>{
    //     navigate('./about',{state:props})
    // }

    const [show, setShow] = useState(false)
    
    const handleShow = () => {
        setShow(true)
        navigate('./about', { state: props })
    }
    const handleClose = () => { setShow(false) }




    let image_url = 'https://image.tmdb.org/t/p/w500/';
    return (

        <div className='movie_card' >
            <div className='img_card'>
                <img className='img__img'
                    src={image_url + props.image}
                    alt="new"
                />
                {show && <div>
                    <h3>title:{props.title}</h3>
                    <h4>language:{props.language}</h4>
                    <h5>date:{props.date}</h5>
                    <h6>overview:{props.overview}</h6>
                </div>
                }

                <button type='submit' className=' btn1 btn-dark' onClick={!show ? handleShow : handleClose}>{!show ? "ViewMore" : "Close"}</button>

                {/* <img className='img__img'
                src={image_url + props.image}
                alt="new"
            />
            <h3>Title:{props.title}</h3>
            <h4>Language:{props.language}</h4>
            <h5>date:{props.date}</h5>
            <br></br>
            <h6>overview:{props.overview}</h6> */}







            </div>

        </div>





    );
}
export default MovieCard;