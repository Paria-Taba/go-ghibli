import useFilmsApi from "../data/getData";
import "../styles/Films.css"
import { useFavoriteStore } from "../data/favoriteStore";
import { useState } from "react";


function Films(){
	const data=useFilmsApi()
	const favoriteFilms=useFavoriteStore((state)=>state.favoriteFilms)
	const [sortOption,setSortOption]=useState("year-desc")
	
const sortData = data?.slice().sort((a, b) => {
  if (sortOption === "year-desc") {
    return parseInt(b.release_date) - parseInt(a.release_date);
  } else if (sortOption === "year-asc") {
    return parseInt(a.release_date) - parseInt(b.release_date);
  } else if (sortOption === "title-asc") {
    return a.title.localeCompare(b.title);
  } else if (sortOption === "title-desc") {
    return b.title.localeCompare(a.title);
  } else {
    return 0;
  }
});

	
	
	 
	return(
		<div>
			<div className="sort">
				<select  id="sort" value={sortOption} onChange={(event)=>setSortOption(event.target.value)}>
					<option value="year-desc">Senaste först</option>
        <option value="year-asc">Äldsta först</option>
        <option value="title-asc">Titel A-Ö</option>
        <option value="title-desc">Titel Ö-A</option>
				</select>
			</div>
			<div className="main">
		{sortData?.map((film)=>(
			<div key={film.id} className="film-div">
			<div className="favorite-row">
			<h2>{film.title}</h2>
			<span className="star" onClick={()=>favoriteFilms(film)} >★</span>
			</div>
			<h3 className="director">{film.director}</h3>
			<p>{film.description}</p>
			<div className="div-img"><img src={film.image} /></div>
			
			
			
			</div>
			
		))}
		</div>
		</div>
		
	)
}
export default Films;
