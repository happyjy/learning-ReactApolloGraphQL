import React from 'react';
import { useQuery, gql } from '@apollo/client';

const GET_MOVIES = gql`
  query {
    ytsMovies {
      id
      medium_cover_image
    }
  }
`;

export default () => {
  const { loading, error, data } = useQuery(GET_MOVIES);
  console.log(loading, error, data);
  if (loading) {
    return 'loading...';
  }

  if (data && data.ytsMovies) {
    return data.ytsMovies.map((m) => <h1>{m.id}</h1>);
  }
};
