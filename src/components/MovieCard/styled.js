import { SmallText, SubText } from "components/UI/Typography";
import { styled } from "styled-components";

export const Wrapper = styled.div`
  width: 50%;
  background-color: ${({ theme }) => theme.colors.lightGrey};
  margin: 100px auto;
  padding: 30px;
  display: flex;
  flex-direction: column;
  gap: 25px;
  border-radius: 15px;
  transition: all ease-in-out 0.2s;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 10px 20px ${({ theme }) => theme.colors.lightGrey};
  }
`;

export const InfoWrapper = styled.div`
  width: 50%;
  display: flex;
  gap: 15px;
`;

export const MovieInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Summary = styled(SubText)`
  width: 50%;
`;

export const Genres = styled(SmallText)`
  margin-top: 20px;
  color: ${({ theme }) => theme.colors.secondaryGrey};
`;

export const ButtonWrapper = styled.div`
  width: 50%;
  display: flex;
  gap: 15px;
`;
