import { useMemo } from "react";
import CatList from "../components/catList/CatList";
import useFavourites from "../context/favoritesContext/useFavorites";
import { Image } from "../api/types";
import Flex from "../components/shared/styledFlex";

const FavouriteCats = () => {
  const { favourites, isLoading } = useFavourites() || {};

  const transformedFavouritesToImages = useMemo(() => {
    const images: Image[] =
      favourites?.map((item) => {
        return {
          id: item.imageId,
          width: 0,
          height: 0,
          url: item.image.url,
        };
      }) ?? [];
    return images;
  }, [favourites]);

  return (
    <Flex $fullwidth data-testid="favourite-cats-list">
      <CatList
        pageTitle="Favourite cats"
        listData={transformedFavouritesToImages}
        isLoading={isLoading ?? false}
        canToggleFavourite
      />
    </Flex>
  );
};

export default FavouriteCats;
