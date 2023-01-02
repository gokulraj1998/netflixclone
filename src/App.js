import instance from './instance';
import Row from './Row';
import requests from './request';
import Banner from './Banner';
import Nav from './Nav';
import './App.css'
function App() {
   console.log(requests.fetchNetflixOriginals)
  return (
    <div className="App">
      <Nav/>
      <Banner/>
      <Row
       title="Netflix Originala" 
       fetchurl={requests.fetchNetflixOriginals}isLargeRow={true}/>
       <Row
       title="Treanding Now" 
       fetchurl={requests.fetchTrending}/>
       <Row
       title="Action Movies" 
       fetchurl={requests.fetchActionMovies}/>
       <Row
       title="Comedy Movies" 
       fetchurl={requests.fetchComedyMovies}/>
       <Row
       title="Horror Movies" 
       fetchurl={requests.fetchHorrorMovies}/>
       <Row
       title="Romance Movies" 
       fetchurl={requests.fetchRomanceMovies}/>
       <Row
       title="Documentaries" 
       fetchurl={requests.fetchDocumentaries}/>
       
    </div>
  );
}

export default App;
