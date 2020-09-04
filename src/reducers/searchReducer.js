/* eslint-disable */
import React from 'react'


export const searchReducer = (state={}, action) => {
  switch (action.type) {
    case 'search':
      return{
        search: action.payload
      }

    default:
      return state
  }
}
