import { Image } from "../../api/types";
import { NavLink } from "react-router-dom";
import { CatCard, CardContainer } from "./styledComponents";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import InfoIcon from "@mui/icons-material/Info";
import { IconBox } from "../shared/styledCommon";

type CatItemProps = {
  itemData: Image;
};

const CatItem = ({ itemData }: CatItemProps) => {
  const { id, url } = itemData;

  return (
    <CatCard $catImage={url}>
      <CardContainer>
        <IconBox aria-label="Make favorite">
          <FavoriteBorderIcon color="inherit" />
        </IconBox>

        <NavLink to={`${id}`}>
          <IconBox aria-label="Show details">
            <InfoIcon color="inherit" />
          </IconBox>
        </NavLink>
      </CardContainer>
    </CatCard>
  );
};

export default CatItem;
