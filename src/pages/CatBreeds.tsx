import { Outlet } from "react-router";
import BreedList from "../components/breedList/BreedList";

const CatBreedList = () => {
  return (
   <>
      <BreedList />
      <Outlet />
   </>
   
  );
};

export default CatBreedList;
