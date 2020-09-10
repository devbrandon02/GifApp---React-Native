/* eslint-disable */


import React, { useReducer, useEffect, useContext, useState } from 'react';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Text,
  StatusBar,
  FlatList,
  View,
  ActivityIndicator,
} from 'react-native';
import { BarSearch } from './components/BarSearch';
import { searchReducer } from './reducers/searchReducer';
import { SearchContext } from './context/searchContext';
import { GifsCard } from './components/GifsCard';

const API = 'k2boTIiM2GQe51axI4ZrWzgYG3jHdHvh'


export const AppGif = () =>{
  const { search: searchText } = useContext(SearchContext)
  const [gifData, setgifData] = useState()

  const {category, typeSearch, search} = searchText


  useEffect(() => {
   if(typeSearch === 'search'){
    fetch(`https://api.giphy.com/v1/${category}/search?q=${search}&api_key=${API}`,{
        method: 'GET',
        headers:{
          'Content-Type': 'application/json',
        }
      })
      .then(res => res.json())
      .then(({data}) => {
        console.log(data)
        setgifData(data)
      })
      .catch((err) => console.log(err))
   } 
  }, [category, search])


  useEffect(() => {
    if(typeSearch === 'trending'){

      fetch(`https://api.giphy.com/v1/${category}/${typeSearch}`,{
        method: 'GET',
        headers:{
          api_key: 'k2boTIiM2GQe51axI4ZrWzgYG3jHdHvh',
          'Content-Type': 'application/json',
        }
      })
      .then(res => res.json())
      .then(({ data }) => {
        setgifData(data)
      })
      .catch((err) => console.log(err))
    }
  },[searchText])
  
  console.log(searchText)
  console.log(gifData)


  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={ styles.content }>
        <BarSearch/>

        { !gifData 
          ? <View style={ styles.loadingView}>
                <ActivityIndicator
                  size="large"
                  color="#9426f7"
                  animating
                />
            </View>
          

          : <FlatList
              initialNumToRender="20"
              progressViewOffset
              removeClippedSubviews
              data={ gifData }
              keyExtractor={(item) => (item.id)}
              renderItem={({item}) =>(
                <GifsCard
                  gifData={ item } 
                  search={ search }
                />
              )}
            />
        }
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  content:{
    backgroundColor: '#303030',
    height: '100%'
  },
  loadingView:{
    alignItems: 'center',
    justifyContent: 'center',
    height: '55%'
  },
})

