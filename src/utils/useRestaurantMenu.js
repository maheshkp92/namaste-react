import { useEffect, useState } from "react";
import { MENU_URL } from "./constants";

const useRestaurantMenu = (resId, resSlug) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_URL + resId + "&branchSlug=" + resSlug);
    const json = await data.json();
    // console.log(json.pageProps.initialMenuState.menuData.items);
    setResInfo(json.pageProps.initialMenuState);
  };
  return resInfo;
};

export default useRestaurantMenu;
