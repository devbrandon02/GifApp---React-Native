/* eslint-disable */

import React, { useState, useCallback, useReducer, useContext } from 'react'
import { 
View, 
Text,
TextInput,
StyleSheet,
TouchableHighlight,
TouchableOpacity,
Alert
} from 'react-native'
import { searchReducer } from '../reducers/searchReducer'
import { SearchContext } from '../context/searchContext'

export const BarSearch = () => {

  const [textSearch, settextSearch] = useState()
  const { search, dispatch } = useContext(SearchContext)
  const [btnActive, setbtnActive] = useState(false)


  console.log(search)
  
  const handleChangeSearch = (text) => {
    settextSearch(text)
  }

  const handleSearch = () => {
    if(textSearch === ""){
      dispatch({
        type: 'resetTrending',
        category: search.category
      })

    } else{
        dispatch({
          type: 'search',
          payload: textSearch,
          typeSearch: 'search',
          category: search.category
        })
      }
    }

    const handleSearchGifs = () => {
      dispatch({
        type: 'stickers',
        payload: textSearch,
        typeSearch: 'search',
        category: 'gifs'
      })
      
    }

    const handleSearchStickers = () => {

      dispatch({
        type: 'stickers',
        payload: textSearch,
        category: 'stickers',
        typeSearch: search.typeSearch,
      })
    }

   
  return (
    <>
      <View style={ style.viewContainer }>
        <Text style={ style.title }>
          Busca Tus gifs Favoritos
        </Text>

        <TextInput
          style={ style.input }
          autoCompleteType="off"
          blurOnSubmit
          placeholder="Trending"
          onChangeText={ handleChangeSearch }
          onSubmitEditing={ handleSearch }
          value={ textSearch }
        />

        <View style={ style.typesContent }>
          <TouchableOpacity
            tvParallaxProperties
            onPress={ handleSearchGifs }
            style={ style.tagsType }>
            <Text style={ style.tagsText }>
              Gifs
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            tvParallaxProperties
            onPress={ handleSearchStickers }
            style={ style.tagsType }>
            <Text style={ style.tagsText }>
              Stickers
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  )
}

const style = StyleSheet.create({
  input:{
    backgroundColor: '#eee',
    color: '#6714b3',
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderBottomWidth: 2,
    borderTopWidth: 2,
    borderRadius: 5,
    borderColor: '#4F2E6D',
    marginLeft: 20,
    marginRight: 20,

    fontSize: 16,
    padding: 10
  },
  viewContainer:{
    justifyContent: 'center',
    height: 200,
    borderBottomColor: '#eee',
    borderBottomWidth: 1
  },
  title:{
    textAlign: 'center',
    color: '#eee',
    paddingBottom: 30,
    color: '#9426f7',
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 40
  },
  typesContent:{
    marginLeft: 20,
    marginRight: 20,
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 10,
    margin: 20,
    height: 40,
  },
  tagsType:{
    backgroundColor: '#460c7c',
    marginRight: 10,
    borderRadius: 5,
    borderColor: '#eee'
  },
  tagsText:{
    fontSize: 20,
    padding: 3,
    color: '#eee'
  }
})
