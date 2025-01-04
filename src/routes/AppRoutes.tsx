import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import CatBreedList from "../pages/CatBreeds";
import Home from "../pages/Home";
import MainLayout from "../layouts/MainLayout";
import CatModal from "../components/catModal/CatModal";
import BreedCatsModal from "../components/breedCatsModal/BreedCatsModal";
import FavouriteCats from "../pages/FavouriteCats";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/cats" element={<Home />}>
            <Route path=":catId" element={<CatModal />} />
          </Route>

          <Route path="/breeds" element={<CatBreedList />}>
            <Route path=":breedId" element={<BreedCatsModal />} />
          </Route>

          <Route path="/favourites" element={<FavouriteCats />} />

          <Route path="*" element={<Navigate to="/cats" />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRoutes;
