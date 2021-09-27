import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({movie}) => {
    return (
        <div className="movie-list">
            {
                movie.map(
                    (el,i)=><MovieCard filem={el} key={i}/>
                )
            }
        </div>
    )
}

export default MovieList