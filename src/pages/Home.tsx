import { useEffect, useState } from "react";
import { Outlet } from "react-router";
import theCatAPI from "../api/api";
import { Image } from "../api/types";
import CatList from "../components/catList/CatList";


const Home = () => {
    const [shouldFetch, setShouldFetch] = useState(true)
    const [isLoading, setIsLoading] = useState(false);
    const [catsList, setCatsList] = useState<Image[]>([]);

    const handleLoadMore = () => {
        setShouldFetch(true);
      };

    useEffect(() => {
        if (!shouldFetch) return;

        setIsLoading(true);

        theCatAPI.images.searchImages({
            limit: 10,
        }).then((images) => {
            setCatsList((prevCatList) => [
                ...prevCatList,
                ...images,
              ])
            setIsLoading(false)
            setShouldFetch(false)
         })
    },[shouldFetch])


    return (
        <>
            <CatList listData={catsList} isLoading={isLoading} onLoadMore={handleLoadMore} />
            <Outlet/>
        </>)
}

export default Home;