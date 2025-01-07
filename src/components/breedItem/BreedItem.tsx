import { NavLink } from "react-router-dom";
import Typography from "@mui/material/Typography";
import EastIcon from "@mui/icons-material/East";
import { Breed } from "../../api/types";
import Flex from "../shared/styledFlex";
import {
  AppButton,
  Card,
  GradientIconBox,
  StyledFlexBox,
  StyledFlexBoxWithBorder,
  CircleImage,
} from "../shared/styledCommon";
import BreedRating from "../breedRating/BreedRating";

export type BreedItemProps = {
  item: Breed;
};

const BreedItem = ({ item }: BreedItemProps) => {
  const {
    name,
    id,
    image,
    adaptability,
    affection_level,
    dog_friendly,
    energy_level,
    experimental,
    grooming,
    hairless,
    health_issues,
    hypoallergenic,
    indoor,
    intelligence,
    social_needs,
  } = item;

  return (
    <Card $flexDirection="column" data-testid="company-item">
      <StyledFlexBoxWithBorder
        $spacingSize="8px"
        $alignItems="center"
        $justifyContent="space-between"
      >
        <Flex $spacingSize="12px" $alignItems="center">
          <Typography style={{ fontWeight: "800" }}>{name}</Typography>
        </Flex>

        <NavLink to={`${id}`}>
          <AppButton variant="contained" data-testid="shipments-button">
            <Flex $spacingSize="8px" $alignItems="center">
              <Typography variant="body2" style={{ fontWeight: "700" }}>
                View cats
              </Typography>
              <EastIcon />
            </Flex>
          </AppButton>
        </NavLink>
      </StyledFlexBoxWithBorder>

      <StyledFlexBox
        $flexDirection="column"
        $spacingSize="18px"
        $alignItems="center"
      >
        <GradientIconBox>
          <CircleImage $image={image?.url} />
        </GradientIconBox>

        <BreedRating
          adaptability={adaptability}
          affection_level={affection_level}
          dog_friendly={dog_friendly}
          energy_level={energy_level}
          experimental={experimental}
          grooming={grooming}
          hairless={hairless}
          health_issues={health_issues}
          hypoallergenic={hypoallergenic}
          indoor={indoor}
          intelligence={intelligence}
          social_needs={social_needs}
        />
      </StyledFlexBox>
    </Card>
  );
};

export default BreedItem;
