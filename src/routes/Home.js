import React from 'react';
import { useQuery, gql } from '@apollo/client';
import styled from 'styled-components';
import Movie from '../components/Movie.js';

const GET_MOVIES = gql`
  query {
    ytsMovies {
      id
      title
      medium_cover_image
    }
  }
`;

const Container = styled.div`
  display: flex; // Container 하위 Header, Movie component
  flex-direction: column; // 세로
  align-items: center;
  width: 100%;
  // border: 1px red solid;
`;
const Header = styled.div`
  // border: 1px blue solid;
  background-image: linear-gradient(-45deg, #d754ab, #fd723a);
  height: 45vh;
  color: white;
  display: flex; // Title, SubTitle component flex 적용
  flex-direction: column; // flex 적용 방향: 세로
  justify-content: center; // flex 적용뱡향(세로) 정렬
  align-items: center; // flex 적용방향 90degree 회전 방향(가로) 정렬
  width: 100%;
`;
const Title = styled.div`
  // border: 1px solid yellow;
  font-size: 60px;
  font-weight: 600;
  margin-bottom: 20px;
`;
const SubTitle = styled.div`
  // border: 1px solid pink;
  font-size: 35px;
`;
const Loading = styled.div`
  // border: 1px solid green;
  font-size: 18px;
  opacity: 0.5;
  font-widht: 500;
  margin-top: 10px;
`;

export default () => {
  const { loading, error, data } = useQuery(GET_MOVIES);
  console.log(loading, error, data);

  return (
    <Container>
      <Header>
        <Title>Apollo 2020</Title>
        <SubTitle>I love GraphQL</SubTitle>
      </Header>
      {loading && <Loading> Loading... </Loading>}
      {!loading &&
        data &&
        data.ytsMovies &&
        data.ytsMovies.map((m) => (
          <Movie key={m.id} id={m.id}>
            m.title
          </Movie>
        ))}
    </Container>
  );
};
