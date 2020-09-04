/* eslint-disable */

import React, { useContext, useReducer } from 'react'
import { AppGif } from './src/AppGif'
import { searchReducer } from './src/reducers/searchReducer'
import { SearchContext } from './src/context/searchContext'

export const App: () => React$Node = () => {
  const [search, dispatch] = useReducer(searchReducer, {search: 'naruto'})

  return (
      <SearchContext.Provider value={{search, dispatch}}>
        <AppGif/>
      </SearchContext.Provider>
  )
}
