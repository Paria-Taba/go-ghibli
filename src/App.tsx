
import './App.css'
import { HashRouter,Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import Favorite from './pages/Favorite'

function App() {


  return (
    <>
	<HashRouter>
		<Routes>
			<Route path='/' element={<Home></Home>}></Route>
			<Route path='/favorite' element={<Favorite></Favorite>}></Route>
		</Routes>
	</HashRouter>
   
    </>
  )
}

export default App
