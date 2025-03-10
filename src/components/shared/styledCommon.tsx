import styled from "styled-components";
import { styled as muiStyled } from "@mui/material/styles";
import Flex from "./styledFlex";
import Button, { ButtonProps } from "@mui/material/Button";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";

export const NavButton = muiStyled(IconButton)<IconButtonProps>(
  ({ theme }) => ({
    color: theme.palette.getContrastText("#31228E"),
    backgroundColor: "#31228E",
    fontWeight: "600",
    padding: "12px",
    borderRadius: "50px",
    boxShadow: "none",
    minWidth: "unset",
    "&:hover": {
      color: theme.palette.getContrastText("#4c3dac"),
      backgroundColor: "#4c3dac",
    },
  })
);

export const AppButton = muiStyled(Button)<ButtonProps>(({ theme }) => ({
  color: "#E3844D",
  backgroundColor: "#FFEFE5",
  borderRadius: "50px",
  boxShadow: "none",
  "&:hover": {
    color: theme.palette.getContrastText("#fbbe98"),
    backgroundColor: "#fbbe98",
    boxShadow: "none",
  },
  "@media (max-width: 767px)": {
    width: "40px",
    height: "40px",
    padding: "5px",
    BoxSizing: "border-box",
    borderRadius: "50%",
    minWidth: "unset",
    "& p": {
      display: "none",
    },
  },
}));

export const Constraint = styled(Flex)`
  width: 100%;
  max-width: 1500px;
  padding: 0 20px;
  box-sizing: border-box;
  margin: 0 auto;

  @media (max-width: 767px) {
    padding: 0 16px;
  }
`;

export const Card = styled(Flex)`
  border-radius: 40px;
  padding: 0 24px 12px;
  box-sizing: border-box;
  width: 100%;
  min-width: 320px;
  background-color: #fcfbff;
  border: 2px solid #fff;

  @media (max-width: 900px) {
    padding: 0 12px 12px;
  }
`;

export const IconBox = styled.div`
  width: 60px;
  height: 60px;
  color: #ffffff;
  border: 2px solid #fff;
  padding: 5px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  flex-shrink: 0;
`;

export const GradientIconBox = styled.div`
  width: 100px;
  height: 100px;
  padding: 5px;
  color: #ffffff;
  background: linear-gradient(116deg, #ffc8d1 0%, #f3e1e3 100%);
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  flex-shrink: 0;
`;

export const CircleImage = styled.div<{ $image: string }>`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-image: ${({ $image }) => `url(${$image})`};
  background-position: center;
  background-size: cover;
`;

export const StyledFlexBox = styled(Flex)`
  width: 100%;
  padding: 24px 12px;
  box-sizing: border-box;
`;

export const StyledFlexBoxWithBorder = styled(StyledFlexBox)`
  border-bottom: 2px solid #e8e6f2;
`;

export const GridContainer = styled.div<{ $cols?: number }>`
  width: 100%;
  display: grid;
  flex-direction: column;
  gap: 16px;
  grid-template-columns: repeat(
    ${({ $cols }) => $cols ?? "3"},
    minmax(280px, 1fr)
  );

  @media (max-width: 1150px) {
    grid-template-columns: repeat(
      ${({ $cols }) => ($cols ? $cols - 1 : "2")},
      minmax(280px, 1fr)
    );
  }

  @media (max-width: 767px) {
    grid-template-columns: repeat(1, minmax(280px, 1fr));
  }
`;
