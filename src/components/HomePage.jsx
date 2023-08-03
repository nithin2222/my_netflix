import Nav from "../Nav"
import Banner from "../Banner"
import Row from "../Row"
import requests from "../requests"

const HomePage = ()=>{
    return(
        <div className="HomePage">
            <Nav/>
      <Banner/>
      <Row title="NETFLIX ORGINALS" fetchUrl={requests.fetchNetflixOriginals}/>{/* isLargeRow */}
      
      <Row title="Trending Now" fetchUrl={requests.fetchTrendings}/>
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated}/>
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}/>
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries}/>

    </div>
    )
}
export default HomePage;