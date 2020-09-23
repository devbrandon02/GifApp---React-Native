/* eslint-disable */

import React, { useReducer } from 'react'
import { searchReducer } from './src/reducers/searchReducer'
import { SearchContext } from './src/context/searchContext'
import { Navigation } from './src/navigation/Navigation'


export const App: () => React$Node = () => {

  const [search, dispatch] = useReducer(searchReducer, {
    search: 'trending',
    typeSearch: 'search',
    category: 'gifs'
  })

  return (
      <SearchContext.Provider value={{search, dispatch}}>
        <Navigation/>
      </SearchContext.Provider>
  )
}


