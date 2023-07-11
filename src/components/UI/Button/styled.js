import { styled } from "styled-components";

export const StyledButton = styled.button`
  border: none;
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 10px;
  border-radius: 15px;

  &:hover {
    cursor: pointer;
  }
`;
