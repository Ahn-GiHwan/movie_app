/* eslint-disable jsx-a11y/alt-text */
import useAxios from '../../components/Hooks/useAxios';
import styled from 'styled-components'
import { useHistory } from 'react-router';

const Container = styled.section`
  background-color: #eee;
  width: 100%;
  min-height: 600px;
  padding: 10px;
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
  padding: 10px;
  transition: .3s;
`;

function Movie() {
  const history = useHistory()
  const onClick = (path, title) => {
    history.push(`/movie/${path}`, { title })
  }
  const movieData = useAxios('movie')

  return (
    <Container>
      <Title>Movie</Title>
      <Lists>
        {movieData.map((item, i) => {
          return (
            <div
              className="card"
              style={{ width: '200px', margin: '10px' }}
              key={i}>
              <img
                className="card-img-top"
                src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} />
              <div className="card-body">
                <Name className="card-title">{item.title}</Name>
                <button
                  className="btn btn-primary"
                  onClick={() => onClick(item.id, item.title)}>
                  See Info
                </button>
              </div>
            </div>
          )
        })}
      </Lists>
    </Container>
  );
}

export default Movie;