import { createContext } from "react";

export const SearchContext = createContext()

export const SearchContextProvider = (props) => {
  const [showSpecialSearchBar, setShowSpecialSearchBar] = useState(false);

  return (

    <SearchContext.Provider value={{
      showSpecialSearchBar,
      setShowSpecialSearchBar,
    }} {...props}/>
  )
}
