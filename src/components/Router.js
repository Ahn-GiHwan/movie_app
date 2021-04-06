import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import Header from './Header'
import Main from '../routes/Main'
import TV from '../routes/TV'
import TVInfo from '../routes/TV/Info'
import Movie from '../routes/Movie'
import MovieInfo from '../routes/Movie/Info'
import Footer from './Footer'
import Search from '../routes/Search';

function index() {
  return (
    <BrowserRouter>
      <Header />
      <Route exact path='/' component={Main} />
      <Route exact path='/tv' component={TV} />
      <Route exact path='/tv/:id' component={TVInfo} />
      <Route exact path='/movie' component={Movie} />
      <Route exact path='/movie/:id' component={MovieInfo} />
      <Route exact path='/search' component={Search} />
      <Footer />
    </BrowserRouter>
  );
}
export default index;