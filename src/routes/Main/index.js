import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 600px;
  background-color: #eee;
`
const Title = styled.span`
  font-size: 40px;
  font-weight: 1000;
  animation: slide 2s;
  @keyframes slide {
    0% {
      margin-bottom: -500px;
    }
    70% {
      margin-bottom: 0;
      transform: scale(1.5);
    }
    100% {
      margin-bottom: 0;
      transform: scale(1);
    }
  }

`
function Main() {
  return (
    <Container>
      <Title>Welcome MovieApp</Title>
    </Container>
  );
}

export default Main;