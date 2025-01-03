import styled from "styled-components";

export const CardHeroImage = styled.div<{
  $image: string;
  $width: number;
  $height: number;
}>`
  max-width: 100%;
  width: ${({ $width }) => `${$width}px`};
  height: ${({ $height }) => `${$height}px`};
  max-height: 100vh;
  background-image: ${({ $image }) => `url(${$image})`};
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
`;
