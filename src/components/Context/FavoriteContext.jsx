import { createContext, useState } from 'react';

export const FavoritosContext = createContext();

export const FavoritosStorage = ({children}) => {
  const [ listaFavoritos, setListaFavoritos ] = useState([])

  return (
    <FavoritosContext.Provider value={{ listaFavoritos, setListaFavoritos }}>
      {children}
    </FavoritosContext.Provider>
  )
}