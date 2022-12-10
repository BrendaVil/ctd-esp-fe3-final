import { useState } from "react";
import { createContext, useContext, useEffect, useReducer } from "react";

export const ContextGlobal = createContext();

const initialFavState = []

const favsReducer = (state, action) => {
  switch(action.type){
      case 'ADD_FAV':
          return [...state, action.payload]
  }
}

export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
  const [stateFavs, dispatchFavs] = useReducer(favsReducer, initialFavState, initFav)

  function initFav(initialFavState) {
    return localStorage.getItem("favs")
      ? JSON.parse(localStorage.getItem("favs"))
      : initialFavState;
  }

  useEffect(() => {
    localStorage.setItem('favs', JSON.stringify(stateFavs))
}, [stateFavs])

  return (
    <ContextGlobal.Provider value={{stateFavs, dispatchFavs}}>
      {children}
    </ContextGlobal.Provider>
  );
};

export default ContextProvider

export const useContextGlobal = () => {
  return useContext(ContextGlobal)
}
