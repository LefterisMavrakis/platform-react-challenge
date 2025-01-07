import { describe, it, expect, vi } from "vitest";
import { BrowserRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import { render, screen, waitFor } from "@testing-library/react";
import FavouritesContextProvider from "../../context/favoritesContext/FavoritesContextProvider";
import CatItem, { CatItemProps } from "./CatItem";
import theCatAPI from "../../api/api";

const mockedCatItem = {
  breeds: [],
  height: 188,
  id: "6p3",
  url: "https://cdn2.thecatapi.com/images/6p3.gif",
  width: 245,
};

vi.mock("../../api/api", () => ({
  default: {
    favourites: {
      addFavourite: vi.fn(),
      deleteFavourite: vi.fn(),
      getFavourites: vi.fn().mockResolvedValue([
        {
          id: 123,
          image: {
            id: "6p3",
          },
        },
      ]),
    },
  },
}));

const defaultProps = {
  itemData: mockedCatItem,
  canToggleFavourite: true,
};

const renderWithProviders = (props: CatItemProps = { ...defaultProps }) => {
  render(
    <BrowserRouter>
      <FavouritesContextProvider>
        <CatItem {...props} />
      </FavouritesContextProvider>
    </BrowserRouter>
  );
};

describe("CatItem", () => {
  it("renders correctly with provided image", () => {
    renderWithProviders();

    const catItem = screen.getByTestId("cat-item");

    expect(catItem).toBeInTheDocument();

    expect(catItem).toHaveAttribute("data-image-url", mockedCatItem.url);
  });

  it("renders the correct action buttons", () => {
    renderWithProviders();

    expect(
      screen.getByTestId("cat-item-toggle-favorite-button")
    ).toBeInTheDocument();

    const detailsButton = screen.getByTestId("cat-item-details-button");

    expect(detailsButton).toBeInTheDocument();

    expect(detailsButton.getAttribute("href")).toBe(
      `/cats/${mockedCatItem.id}`
    );
  });

  describe("when clicks the favourite icon button", () => {
    it("makes api request to toggle image favourite state", async () => {
      renderWithProviders();

      const catItem = screen.getByTestId("cat-item");
      const favouriteButton = screen.getByTestId(
        "cat-item-toggle-favorite-button"
      );

      expect(screen.queryByTestId("loading-icon")).not.toBeInTheDocument();

      userEvent.hover(catItem);

      userEvent.click(favouriteButton);

      await waitFor(() => {
        expect(screen.getByTestId("loading-icon")).toBeInTheDocument();

        expect(theCatAPI.favourites.addFavourite).toHaveBeenCalled();
      });

      expect(theCatAPI.favourites.addFavourite).toHaveBeenCalledWith(
        mockedCatItem.id
      );
    });
  });

  describe("when canToggleFavourite props is false", () => {
    it("does not render the favourite icon button", () => {
      renderWithProviders({ ...defaultProps, canToggleFavourite: false });

      expect(
        screen.queryByTestId("cat-item-toggle-favorite-button")
      ).not.toBeInTheDocument();
    });
  });
});
