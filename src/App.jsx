
import './App.css'
import Covernet from './Componetsnetfilx/Covernet'
import Row from './Componetsnetfilx/Row' 
import requests from './request'
import NavBar from './Componetsnetfilx/NavBar'
function App() {
 /* js code */


  return (
    /* jsx code */
    <>

   <NavBar/>
   <Covernet fetchUrl={requests.fetchNetflixOriginals} />

  <Row isPoster='true' title ='Trending Movies' fetchUrl={requests.fetchTrending}/>
  <Row title ='Netflix Originals' fetchUrl={requests.fetchNetflixOriginals}/>
  <Row title='Top Rated' fetchUrl={requests.fetchTopRated}/>
  <Row title='Action' fetchUrl={requests.fetchActionMovies}/>
  <Row title='Comedy' fetchUrl={requests.fetchComedyMovies}/>
  <Row title='Horror' fetchUrl={requests.fetchHorrorMovies}/>
  <Row title='Romance' fetchUrl={requests.fetchRomanceMovies}/>
  <Row title='Documentry' fetchUrl={requests.fetchDocumentaries}/>
 


    </>
  )
}

export default App
