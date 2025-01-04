import { useContext } from "react";
import { FavouritesContext } from "./FavoritesContextProvider";

const useFavourites = () => {
  const context = useContext(FavouritesContext);

  return context;
};

export default useFavourites;
