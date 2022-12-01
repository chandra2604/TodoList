import React from 'react'

import {useLocation} from 'react-router-dom'
import MovieCard from './MovieCard'

const MovieRouter = () => {
    const location=useLocation()
  return (
    <div className='movie-router'>
        {location.state.title}
        <br></br>
        {location.state.language} 
        <br></br>
        {location.state.date} 
    {/* <MovieCard image={location.state.image} 
                    language={location.state.language}  date={location.state.date}  title={location.state.title} overview={location.state.overview}/>
         */}
    </div>
  )
}

export default MovieRouter