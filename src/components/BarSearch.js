/* eslint-disable */

import React, { useState, useCallback, useReducer, useContext } from 'react'
import { 
View, 
Text,
TextInput,
StyleSheet,
TouchableHighlight
} from 'react-native'
import { searchReducer } from '../reducers/searchReducer'
import { SearchContext } from '../context/searchContext'

export const BarSearch = () => {

  const [textSearch, settextSearch] = useState('')
  const { search, dispatch } = useContext(SearchContext)

  
  const handleChangeSearch = (text) => {
    settextSearch(text)
  }

  const handleSearch = () => {
    console.log(textSearch)
    dispatch({
      type: 'search',
      payload: textSearch
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
          placeholder="Naruto"
          onChangeText={ handleChangeSearch }
          onSubmitEditing={ handleSearch }
          value={ textSearch }
        />
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
  },
  title:{
    textAlign: 'center',
    color: '#eee',
    paddingBottom: 30,
    color: '#9426f7',
    fontSize: 20,
    fontWeight: 'bold',
  }
})
