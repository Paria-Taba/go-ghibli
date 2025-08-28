import "../styles/Header.css"
import { NavLink } from "react-router-dom"
function Header(){
	return(
		<div className="header-div">
		<h1>🎬 Studio Ghibli Films</h1>
		
		<nav>
			<ul>
				<NavLink to={"/"}>ALL FILMS</NavLink>
				<NavLink to={"/favorite"}>FAVORITE</NavLink>
			</ul>
		</nav>
		</div>

	)
}
export default Header
