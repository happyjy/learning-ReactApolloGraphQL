import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { useQuery, gql } from '@apollo/client';

const GET_MOVIE = gql`
  query getYtsMovie($id: Int!) {
    ytsMovie(id: $id) {
      id
      title
      language
      rating
      description_intro
      medium_cover_image
      large_cover_image
    }
    ytsSuggestions(id: $id) {
      id
      title
      medium_cover_image
    }
  }
`;

const Container = styled.div`
  //# 배경 그라디언트 효과 설정
  height: 100vh;
  background-image: linear-gradient(-45deg, #d754ab, #fd723a);
  width: 100%;

  //# flex 적용대상: Column, Poster Component
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: white;
`;

const Column = styled.div`
  width: 50%;
  margin-left: 10px;
`;
const Title = styled.h1`
  font-size: 65px;
  margin-bottom: 15px;
`;
const Subtitle = styled.h4`
  font-size: 35px;
  margin-bottom: 10px;
`;
const Description = styled.p`
  font-size: 28px;
`;

const Poster = styled.div`
  background-image: url(${(props) => props.bg});
  width: 25%;
  height: 60%;
  background-color: transparent;
  background-size: cover;
  background-position: center center;
`;

export default () => {
  const { id } = useParams();
  console.log('### Detail.js > id : ', useParams());
  const { loading, error, data } = useQuery(GET_MOVIE, {
    variables: { id: parseInt(id) },
  });

  console.log('### getMovie > data: ', data);
  return (
    <Container>
      <Column>
        <Title>{loading ? 'Loading...' : data.ytsMovie.title}</Title>
        {!loading && (
          <>
            <Subtitle>
              {data?.ytsMovie?.language} · {data?.ytsMovie?.rating}
            </Subtitle>
            <Description>{data?.ytsMovie?.description_intro}</Description>
          </>
        )}
      </Column>
      <Poster bg={data?.ytsMovie?.large_cover_image} />
    </Container>
    // data.ytsSuggestions: [{id, title, medium_cover_image}]
  );
};
