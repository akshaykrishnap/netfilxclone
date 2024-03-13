
import './App.css'
import Covernet from './Componetshotstar/Covernet'
import Icon from './Componetshotstar/Icon'
import Languages from './Componetshotstar/Languages'
import NavBar from './Componetshotstar/NavBar'
import Row from './Componetshotstar/Row' 
import requests from './request'

function App() {
 /* js code */


  return (
    /* jsx code */
    <>

   <NavBar/>
   <Covernet fetchUrl={requests.fetchNetflixOriginals} />

  <Row isPoster='true' title ='Latest Releases' fetchUrl={requests.fetchTrending}/>
  <Icon/>
  <Row title ='Best in Sports' fetchUrl={requests.fetchNetflixOriginals}/>
  <Languages title ='Popular Languages'/>
  <br />
  <Row title='Academy Awards  Winners and Nominees' fetchUrl={requests.fetchTopRated}/>
 
  <Row isPoster='true' title='Top-10 in India' fetchUrl={requests.fetchActionMovies}/>
  <Row isPoster='true' title='Coming Soon' fetchUrl={requests.fetchComedyMovies}/>

  
  <Row title='Popular in Crime' fetchUrl={requests.fetchHorrorMovies}/>
  <Row title='Popular in Teen' fetchUrl={requests.fetchRomanceMovies}/>

  <Row title='Popular in Documentry' fetchUrl={requests.fetchDocumentaries}/>
 


    </>
  )
}

export default App
