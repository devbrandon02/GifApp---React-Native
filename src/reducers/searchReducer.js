/* eslint-disable */
import React from 'react'


export const searchReducer = (state={}, action) => {
  switch (action.type) {
    case 'search':
      return{
        search: action.payload,
        typeSearch: action.typeSearch,
        category: action.category
      }

    case 'stickers':
      return{
        search: action.payload,
        category: action.category,
        typeSearch: action.typeSearch,
      }

    case 'memes':
    return{
      typeSearch: action.typeSearch,
    }
      
    case 'resetSearch':
      return{
        typeSearch: 'search',
        search: 'trending',
        category: action.category
      }

    default:
      return state
  }
}
