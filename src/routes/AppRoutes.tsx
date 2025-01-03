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

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/cats" element={<Home />}>
            <Route path=":catId" element={<CatModal />} />
          </Route>

          <Route path="/breeds" element={<CatBreedList />}>
            <Route path=":breedId" element={<div>Breed modal</div>} />
          </Route>

          <Route path="/favourite-cats" element={<div>Favorite cats</div>} />

          <Route path="*" element={<Navigate to="/cats" />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRoutes;
