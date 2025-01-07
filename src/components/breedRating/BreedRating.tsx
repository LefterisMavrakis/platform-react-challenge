import Flex from "../shared/styledFlex";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";

export type BreedRatingProps = {
  adaptability: number;
  affection_level: number;
  dog_friendly: number;
  energy_level: number;
  experimental: number;
  grooming: number;
  hairless: number;
  health_issues: number;
  hypoallergenic: number;
  indoor: number;
  intelligence: number;
  social_needs: number;
};

const formatAndCapitalize = (input: string) => {
  return input
    .replace(/_/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());
};

const BreedRating = (props: BreedRatingProps) => {
  return (
    <Flex $spacingSize="8px" $wrap>
      {Object.entries(props).map(([key, value], index) => {
        return (
          <Flex
            $flex={"calc(33.33% - 16px)"}
            key={index}
            $flexDirection="column"
          >
            <Typography variant="subtitle1">
              {formatAndCapitalize(key)}
            </Typography>

            <Rating
              name="customized-10"
              defaultValue={value}
              max={5}
              readOnly
            />
          </Flex>
        );
      })}
    </Flex>
  );
};

export default BreedRating;
