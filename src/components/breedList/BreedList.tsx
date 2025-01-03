import { useState, useEffect } from "react";
import { catApiAxiosClient } from "../../api/api";
import { Breed } from "../../api/types";
import BreedItem from "../breedItem/BreedItem";
import { GridContainer } from "../shared/styledCommon";
import Flex from "../shared/styledFlex";
import Typography from "@mui/material/Typography";

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

  return !isLoading ? (
    <Flex $flexDirection="column" $spacingSize="24px" $fullwidth>
      <Typography variant="h5">Breeds list</Typography>

      <GridContainer $cols={2}>
        {breedList?.map((breed) => {
          return <BreedItem key={breed.id} item={breed} />;
        })}
      </GridContainer>
    </Flex>
  ) : (
    "Loading"
  );
};

export default BreedList;
