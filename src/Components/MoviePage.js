import { useState } from "react";
import MovieCard from "./MovieCard";
import "./MovieCard.css";
import Header from "./Header";


const MoviePage =(props)=>{
 

    const[db,setdb]=useState([]);
    
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=19655dd653e9bed5f5bb50746a1aa39f')
        .then(res=>res.json())
        .then(json=>setdb(json))
        console.log(db)

       
    return(
        <>
        <Header/>
 <div className="grid">
        {
            db?.results?.map((data)=>{
               
                return(
                   <>
                    <MovieCard key={data.id} image={data.poster_path} 
                    language={data.original_language}  date={data.release_date}  title={data.title} overview={data.overview}/>
                    </>
                    
                )

            })
            
        }
   
    
    

    </div>
       
       </>
    
    );

}

export default MoviePage;