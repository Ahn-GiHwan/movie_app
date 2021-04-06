import styled from 'styled-components'

const Container = styled.div`
  padding: 10px;
  margin: 10px;
  font-size: 24px;
  font-weight: 1000;
  display: flex;
  justify-content: flex-end;
`

function Footer() {
  return (
    <Container>
      design by AGH
    </Container>
  );
}

export default Footer;