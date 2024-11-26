import Nav from "./Nav"
import "./HomeScreen.css"
import Banner from "./Banner"
import Raw from "./Raw"
import request from "../Request"
function HomeScreen(){
    return(
        <>
        <div className="homeScreen">
            <Nav/>
            <Banner/>
            <Raw title="NETFLIX ORIGINALS" fetchUrl={request.fetchNetflixOriginals} isLargeRow/>
            <Raw title="TRENDING NOW" fetchUrl={request.fetchTrending}/>
            <Raw title="COMEDY MOVIES" fetchUrl={request.fetchComedyMovies}/>
            <Raw title="HORROR MOVIES" fetchUrl={request.fetchHorrorMovies}/>

            <Raw title="ROMMANCE MOVIES" fetchUrl={request.fetchRomanceMovies}/>
            <Raw title="DOCUMENTRIES" fetchUrl={request.fatchDocumentries}/>
        </div>
        </>
    )
}
export default HomeScreen