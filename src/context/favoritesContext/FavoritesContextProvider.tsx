import React, { createContext, useState, useEffect } from "react";
import { Favourite } from "../../api/types";
import theCatAPI from "../../api/api";

type FavouritesContextType = {
  isLoading: boolean;
  favourites: Favourite[];
  isToggleFavoriteLoading: boolean;
  checkFavourite: (imageId: string) => number | null;
  toggleFavorite: (
    favoriteId: number | null,
    imageId: string
  ) => Promise<number | null>;
  initFavourites: () => void;
  addToFavourites: (imageId: string) => Promise<unknown>;
};

export const FavouritesContext = createContext<
  FavouritesContextType | undefined
>(undefined);

const FavouritesContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isToggleFavoriteLoading, setIsToggleFavouritesLoading] =
    useState(false);
  const [favourites, setFavourites] = useState<Favourite[]>([]);

  const checkFavourite = (imageId: string) => {
    const imageToFind = favourites.find((item) => item.image.id === imageId);

    return imageToFind?.id ?? null;
  };

  const addToFavourites = (imageId: string) => {
    return new Promise((resolve) => {
      theCatAPI.favourites
        .addFavourite(imageId)
        .then(() => {
          setIsToggleFavouritesLoading(false);
          initFavourites();
          resolve(true);
        })
        .catch((error) => {
          setIsToggleFavouritesLoading(false);
          console.log(error);
        });
    });
  };

  const toggleFavorite = (
    favoriteId: number | null,
    imageId: string
  ): Promise<number | null> => {
    return new Promise((resolve) => {
      setIsToggleFavouritesLoading(true);

      if (!favoriteId) {
        theCatAPI.favourites
          .addFavourite(imageId)
          ?.then((data) => {
            setIsToggleFavouritesLoading(false);
            initFavourites();
            resolve(data.id);
          })
          .catch((error) => {
            setIsToggleFavouritesLoading(false);
            console.log(error);
          });
        return;
      }

      theCatAPI.favourites.deleteFavourite(favoriteId)?.finally(() => {
        setFavourites([...favourites.filter((fav) => fav.id !== favoriteId)]);
        setIsToggleFavouritesLoading(false);
        resolve(null);
      });
    });
  };

  const initFavourites = async () => {
    await theCatAPI.favourites
      .getFavourites()
      ?.then((data) => {
        setFavourites(data);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        console.log(error);
      });
  };

  useEffect(() => {
    setIsLoading(true);

    initFavourites();
  }, []);

  return (
    <FavouritesContext.Provider
      value={{
        favourites,
        isLoading,
        checkFavourite,
        toggleFavorite,
        isToggleFavoriteLoading,
        initFavourites,
        addToFavourites,
      }}
    >
      {children}
    </FavouritesContext.Provider>
  );
};

export default FavouritesContextProvider;
