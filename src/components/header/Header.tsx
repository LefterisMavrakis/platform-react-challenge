import { NavLink } from "react-router-dom";
import { Constraint } from "../shared/styledCommon";
import { Typography } from "@mui/material";
import Flex from "../shared/styledFlex";
import { HeaderWrapper } from "./styledComponents";

const Header = () => {
  return (
    <nav className="app-header" data-testid="app-header">
      <HeaderWrapper>
        <Constraint>
          <Flex $justifyContent="center" $alignItems="center" $fullwidth>
            <Flex $alignItems="center" className="app-logo">
              <NavLink to={"/cats"}>
                <Typography
                  color="#ffffff"
                  style={{ fontWeight: "800", fontSize: "26px" }}
                >
                  LOGO
                </Typography>
              </NavLink>
            </Flex>
          </Flex>
        </Constraint>
      </HeaderWrapper>
    </nav>
  );
};

export default Header;
