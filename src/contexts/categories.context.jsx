import { useState, createContext, useEffect } from "react";

import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils";

export const CategoriesContext = createContext({
  categories: {},
});

export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({});
  // We add SHOP_DATA to the firestore but as we needed
  // to happen one time we do it with useEffect and then
  // we don`t needed anymore. Now they are all upload to
  // our firstore db. If we let It uncommented then will
  // add the data in each rendering.
  // useEffect(() => {
  //   console.log("before");
  //   addCollectionAndDocuments("categories", SHOP_DATA);
  //   console.log("after");
  // }, []);

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      setCategoriesMap(categoryMap);
    };
    getCategoriesMap();
  }, []);

  const value = { categoriesMap };
  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
