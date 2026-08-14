import {Switch, Route} from 'react-router-dom'
import './App.css'

import Navbar from './components/Navbar'
import PopularMovies from './pages/PopularMovies'
import TopRatedMovies from './pages/TopRatedMovies'
import UpcomingMovies from './pages/UpcomingMovies'
import MovieDetails from './pages/MovieDetails'
import SearchMovies from './pages/SearchMovies'

const App = () => (
  <>
    <Navbar />

    <Switch>
      <Route exact path="/" component={PopularMovies} />
      <Route exact path="/top-rated" component={TopRatedMovies} />
      <Route exact path="/upcoming" component={UpcomingMovies} />
      <Route exact path="/movie/:movieId" component={MovieDetails} />
      <Route exact path="/search/:query" component={SearchMovies} />
    </Switch>
  </>
)

export default App
