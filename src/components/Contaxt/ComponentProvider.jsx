import React, { createContext, useState } from "react";

const ComponentContext = createContext();

export const ComponentProvider = ({ children }) => {
  const [searchParam, setSearchParam] = useState("");
  const [favorites, setFavorites] = useState([]);

  const addFavorite = (item) => {
    const isDuplicate = favorites.some((fav) => fav.id === item.id);

    if (!isDuplicate) {
      setFavorites((prevFavorites) => [...prevFavorites, item]);
    }
  };

  const removeFavorite = (id) => {
    setFavorites((prevFavorites) =>
      prevFavorites.filter((fav) => fav.id !== id)
    );
  };

  return (
    <ComponentContext.Provider
      value={{
        searchParam,
        setSearchParam,
        favorites,
        addFavorite,
        removeFavorite,
      }}
    >
      {children}
    </ComponentContext.Provider>
  );
};

export default ComponentContext;
