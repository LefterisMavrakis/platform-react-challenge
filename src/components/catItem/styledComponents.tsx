import styled from "styled-components";
import Flex from "../shared/styledFlex";

export const CatCard = styled(Flex)<{ $catImage: string }>`
  border-radius: 40px;
  background-image: ${({ $catImage }) => `url(${$catImage})`};
  background-position: center;
  background-size: cover;
  padding: 50% 20px;
  position: relative;
  overflow: hidden;
  cursor: pointer;

  &:hover {
    > div {
      background-color: rgba(0, 0, 0, 0.3);
      opacity: 1;
      pointer-events: all;
    }
  }
`;

export const CardContainer = styled(Flex)`
  background-color: rgba(0, 0, 0, 0);
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  transition: all 0.3s ease;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 24px;
  opacity: 0;
  pointer-events: none;
`;
