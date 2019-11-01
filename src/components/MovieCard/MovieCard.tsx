import * as React from "react";
import styled from "styled-components";

const Img = styled.img`
  width: 400px;
  min-height: 400px;
`;

const Title = styled.h3`
  padding: 0;
  margin: 0;
`;

const Item = styled.div`
  width: 400px;
`;

type MovieCardsProps = {
  id: number;
  poster_path: string;
  title: string;
  overview: string;
};

const MovieCards = (props: { results: MovieCardsProps[] }) => {
  return (
    <>
      {props.results.map(movies => (
        <Item key={movies.id}>
          <Img
            src={`https://image.tmdb.org/t/p/w500/${movies.poster_path}`}
            alt={movies.title}
          />
          <Title>{movies.title}</Title>
          <p>{movies.overview}</p>
        </Item>
      ))}
    </>
  );
};
export default MovieCards;
