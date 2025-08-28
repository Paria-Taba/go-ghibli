
import Header from "../components/Header"
import { useFavoriteStore } from "../data/favoriteStore"
import "../styles/Films.css"

function Favorite(){
	const list=useFavoriteStore((state)=>state.films)
	const deleteFilm=useFavoriteStore((state)=>state.deleteFilm)
	console.log(list)
	function deleteHandler(id:string){
		deleteFilm(id)
	}
	return(
		<div>
		<Header></Header>
		{list.length > 0 ? (list.map((film)=>(
			<div key={film.id} className="favorite-div"><h2>{film.title}</h2>
			<h3>{film.director}</h3>
			<p>{film.description}</p>
			<img src={film.image} />
			<button onClick={()=>deleteHandler(film.id)}>Delete</button></div>
			
		)) ): (<h1 className="header-css">*You have not favorite films*</h1>)}
		
		</div>
		
		
	)
}
export default Favorite