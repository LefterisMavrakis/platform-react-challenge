import { useState, useEffect } from "react";
import { catApiAxiosClient } from "../../api/api";
import { Breed } from "../../api/types";
import BreedItem from "../breedItem/BreedItem";
import { GridContainer } from "../shared/styledCommon";
import Flex from "../shared/styledFlex";
import Typography from "@mui/material/Typography";
import Skeleton from "@mui/material/Skeleton";

const BreedList = () => {
  const [breedList, setBreedList] = useState<Breed[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchCatBreeds = () => {
    setIsLoading(true);
    catApiAxiosClient.get("v1/breeds").then((response) => {
      setBreedList(response.data);
      setIsLoading(false);
    });
  };

  useEffect(() => {
    fetchCatBreeds();
  }, []);

  return (
    <Flex $flexDirection="column" $spacingSize="24px" $fullwidth data-testid="breeds-list">
      <Typography variant="h5">Breeds list</Typography>

      {!isLoading ? (
        <GridContainer $cols={2}>
          {breedList?.map((breed) => {
            return <BreedItem key={breed.id} item={breed} />;
          })}
        </GridContainer>
      ) : (
        <GridContainer $cols={2}>
          {Array.from({ length: 10 }).map((_, index) => (
            <Skeleton
              key={index}
              animation={"wave"}
              height={500}
              style={{ borderRadius: "40px", transform: "unset" }}
            />
          ))}
        </GridContainer>
      )}
    </Flex>
  );
};

export default BreedList;
