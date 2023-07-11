import React, { useEffect, useState } from "react";
import {
  Wrapper,
  InfoWrapper,
  MovieInfo,
  Summary,
  Genres,
  ButtonWrapper,
} from "./styled";
import PropTypes from "prop-types";
import { SmallText, Text } from "components/UI/Typography";
import { theme } from "Theme";
import { genres } from "common/genres";
import Button from "components/UI/Button";

function MovieCard({
  originalTitle,
  image,
  releaseDate,
  overview,
  genresList,
  clickedId,
  toggleSavedMovie,
}) {
  const getGenres = () => {
    let allGenres = [];
    for (let i of genresList) {
      for (let j of genres) {
        if (i === j.id) {
          allGenres.push(j.name);
        }
      }
    }
    return allGenres;
  };
  const allGenresList = getGenres();

  const allGenres = allGenresList.join(", ");

  return (
    <Wrapper>
      <InfoWrapper>
        <img
          src={`https://image.tmdb.org/t/p/w300/${image}`}
          alt={originalTitle}
        ></img>
        <MovieInfo>
          <Text>{originalTitle}</Text>
          <SmallText
            style={{ color: theme.colors.secondaryGrey }}
          >{`${releaseDate?.slice(0, 4)}`}</SmallText>
          <Genres>{allGenres}</Genres>
        </MovieInfo>
      </InfoWrapper>
      <Summary>{overview}</Summary>
      <ButtonWrapper>
        <Button>
          <SmallText>Share</SmallText>
        </Button>
        <Button>
          <SmallText>Like</SmallText>
        </Button>
        <Button onClick={() => toggleSavedMovie(clickedId)}>
          <SmallText>Save</SmallText>
        </Button>
      </ButtonWrapper>
    </Wrapper>
  );
}

MovieCard.propTypes = {
  originalTitle: PropTypes.string,
};

export default MovieCard;
