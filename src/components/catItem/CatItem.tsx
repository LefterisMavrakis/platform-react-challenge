import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import InfoIcon from "@mui/icons-material/Info";
import LoopIcon from "@mui/icons-material/Loop";
import { Image } from "../../api/types";
import { IconBox } from "../shared/styledCommon";
import { CatCard, CardContainer } from "./styledComponents";
import useFavourites from "../../context/favoritesContext/useFavorites";

export type CatItemProps = {
  itemData: Image;
  canToggleFavourite?: boolean;
};

const CatItem = ({ itemData, canToggleFavourite }: CatItemProps) => {
  const { id, url } = itemData;
  const [favoriteId, setFavoriteId] = useState<number | null>(null);
  const { checkFavourite, toggleFavorite, isToggleFavoriteLoading } =
    useFavourites() || {};

  const handleToggleFavourite = () => {
    if (isToggleFavoriteLoading) return;

    toggleFavorite!(favoriteId, id).then((responseId) => {
      setFavoriteId(responseId);
    });
  };

  useEffect(() => {
    setFavoriteId(checkFavourite!(id));
  }, []);

  return (
    <CatCard $catImage={url} data-testid="cat-item" data-image-url={url}>
      <CardContainer>
        {canToggleFavourite && (
          <IconBox
            onClick={handleToggleFavourite}
            aria-label="Make favorite"
            data-testid="cat-item-toggle-favorite-button"
          >
            {isToggleFavoriteLoading ? (
              <LoopIcon color="inherit" data-testid="loading-icon" />
            ) : (
              <>
                {!!favoriteId ? (
                  <FavoriteIcon color="inherit" />
                ) : (
                  <FavoriteBorderIcon color="inherit" />
                )}
              </>
            )}
          </IconBox>
        )}

        <NavLink to={`/cats/${id}`} data-testid="cat-item-details-button">
          <IconBox aria-label="Show details">
            <InfoIcon color="inherit" />
          </IconBox>
        </NavLink>
      </CardContainer>
    </CatCard>
  );
};

export default CatItem;
