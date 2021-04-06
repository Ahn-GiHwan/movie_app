/* eslint-disable jsx-a11y/img-redundant-alt */
import styled from 'styled-components'
import axios from 'axios'
import { useState } from 'react';
import { useHistory } from 'react-router';

const Container = styled.section`
background-color: #eee;
`
const Title = styled.div`
  font-size: 40px;
  font-weight: 1000;
  margin: 10px;
  padding: 10px;
  width: 98%;
  border-bottom: 5px double #343A40;
`
const Lists = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`
const Name = styled.div`
  width: 100%;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  transition: .3s;
`;

const Div = styled.div`
  display: flex;
  min-height: 500px;
  /* background-color: #eee; */
`
const SubTitle = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  border-bottom: 3px double #ddd;
  padding: 10px;
  font-size: 20px;
`

function Search() {
  const [movieData, setMovieData] = useState([])
  const [tvData, setTvData] = useState([])

  const ChangeMovie = (value) => {
    if (value === '') {
      setMovieData([])
    }
    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=a721dd910292becd0d78ed436463db21&language=en-US&query=${value}&page=1&include_adult=false`)
      .then(res => {
        setMovieData(res.data.results)
      })
  }

  const ChangeTv = (value) => {
    if (value === '') {
      setTvData([])
    }
    axios.get(`https://api.themoviedb.org/3/search/tv?api_key=a721dd910292becd0d78ed436463db21&language=en-US&query=${value}&page=1&include_adult=false`)
      .then(res => {
        setTvData(res.data.results)
      })
  }

  const history = useHistory()
  const onClickMovie = (path, title) => {
    history.push(`/movie/${path}`, { title })
  }
  const onClickTv = (path, name) => {
    history.push(`/tv/${path}`, { name })
  }

  return (
    <Container>
      <Title>Search</Title>
      <div
        className="form-group"
        style={{ width: '80%', marginLeft: '10px' }}>
        <input
          type="text"
          className="form-control form-control-lg"
          placeholder="ex) frozen"
          onChange={(e) => {
            ChangeMovie(e.target.value)
            ChangeTv(e.target.value)
          }}
        />
      </div>
      <SubTitle>
        <div>Movie {movieData.length === 0 ? '' : `(${movieData.length})`}</div>
        <div>TV {tvData.length === 0 ? '' : `(${tvData.length})`}</div>
      </SubTitle>
      <Div>
        <Lists style={{ borderRight: '1px solid #ddd' }}>
          {movieData.map((item, i) => {
            return (
              <div
                className="card"
                style={{ width: '150px', margin: '10px' }}
                key={i}>
                <img
                  className="card-img-top"
                  src={`https://image.tmdb.org/t/p/w500/${item.poster_path ? item.poster_path : item.backdrop_path}`}
                  alt="Card image" />
                <div className="card-body">
                  <Name className="card-title">{item.title}</Name>
                  <button
                    className="btn btn-primary"
                    onClick={() => onClickMovie(item.id, item.title)}
                  >
                    See Info
                </button>
                </div>
              </div>
            )
          })}
        </Lists>
        <Lists>
          {tvData.map((item, i) => {
            return (
              <div
                className="card"
                style={{ width: '150px', margin: '10px' }}
                key={i}>
                <img
                  className="card-img-top"
                  src={`https://image.tmdb.org/t/p/w500/${item.poster_path ? item.poster_path : item.profile_path}`}
                  alt="Card image" />
                <div className="card-body">
                  <Name className="card-title">{item.name}</Name>
                  <button
                    className="btn btn-primary"
                    onClick={() => onClickTv(item.id, item.name)}
                  >
                    See Info
                </button>
                </div>
              </div>
            )
          })}
        </Lists>
      </Div>
    </Container >
  );
}

export default Search;