/* eslint-disable jsx-a11y/img-redundant-alt */
import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router";
import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  background-color: #eee;
  display: flex;
  justify-content: center;
  flex-direction: column;
`
const Title = styled.div`
  font-size: 40px;
  font-weight: 1000;
  margin: 10px;
  padding: 10px;
  width: 98%;
  border-bottom: 5px double #343A40;
`

function Info() {
  const [data, setData] = useState([])
  const history = useHistory()
  const location = useLocation()
  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3${location.pathname}?api_key=a721dd910292becd0d78ed436463db21&language=en-US`)
      .then(res => {
        setData(res.data)
      })
  }, [location.pathname])

  if (location.state === undefined) {
    history.push('/tv')
    return null;
  }
  const name = location.state.name

  return (
    <Container>
      <Title>Detail - {name}</Title>
      <div
        className="card"
        style={{ width: '100%', margin: '10px' }}>
        <img
          className="card-img-top"
          src={`https://image.tmdb.org/t/p/w500/${data.backdrop_path ? data.backdrop_path : data.poster_path}`}
          alt="Card image" />
        <div className="card-body">
          <p className="card-title" style={{ fontWeight: 1000, fontSize: '25px' }}>{name}</p>
          <p style={{ margin: '10px 0' }}>Air Date : {data.first_air_date} ~ {data.last_air_date}</p>
          <p style={{ margin: '10px 0' }}>Vote : {data.vote_average}/10</p>
          <hr />
          <p>{data.overview}</p>
        </div>
      </div>
    </Container>
  );
}

export default Info;