import React from "react";
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
import Button from "components/UI/Button";

function MovieCard({
  originalTitle,
  image,
  releaseDate,
  overview,
  movieGenresText,
  clickedId,
  toggleSavedMovie,
  isSaved,
}) {
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
          <Genres>{movieGenresText}</Genres>
        </MovieInfo>
      </InfoWrapper>
      <Summary>{overview}</Summary>
      <ButtonWrapper>
        <Button>
          <SmallText>Share</SmallText>
        </Button>
        <Button>
          <SmallText>Comment</SmallText>
        </Button>
        <Button onClick={() => toggleSavedMovie(clickedId)}>
          <SmallText>{isSaved ? "Unsave" : "Save"}</SmallText>
        </Button>
      </ButtonWrapper>
    </Wrapper>
  );
}

MovieCard.propTypes = {
  originalTitle: PropTypes.string,
};

export default MovieCard;
