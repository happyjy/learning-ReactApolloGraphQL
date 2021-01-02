import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
  height: 400px;
  width: 100%;
  // # shadow 기능으로, card 입체 표현
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);

  // # border-rauis 적용
  // overflow: hidden;
  // border-radius: 7px;

  background-color: transparent;
`;

const Poster = styled.div`
  background-image: url(${(props) => props.bg});
  height: 100%;
  width: 100%;
  background-size: cover;
  background-position: center center;
  border-radius: 7px;
`;

export default ({ id, bg, isLiked }) => (
  <Container>
    <Link to={`/${id}`}>
      <Poster bg={bg} />
      <button> {isLiked ? 'Unlike' : 'Like'} </button>
    </Link>
  </Container>
);
