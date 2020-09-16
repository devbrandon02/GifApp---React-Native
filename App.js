/* eslint-disable */

import React, { useContext, useReducer } from 'react'
import { AppGif } from './src/components/AppGif'
import { searchReducer } from './src/reducers/searchReducer'
import { SearchContext } from './src/context/searchContext'


export const App: () => React$Node = () => {
  const [search, dispatch] = useReducer(searchReducer, {
    search: '',
    typeSearch: 'trending',
    category: 'gifs'
  })

  return (
      <SearchContext.Provider value={{search, dispatch}}>
        <AppGif/>
      </SearchContext.Provider>
  )
}
