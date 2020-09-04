/* eslint-disable */


import React, { useReducer, useEffect, useContext } from 'react';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Text,
  StatusBar,
} from 'react-native';
import { BarSearch } from './components/BarSearch';
import { searchReducer } from './reducers/searchReducer';
import { SearchContext } from './context/searchContext';



export const AppGif = () =>{
  const { search } = useContext(SearchContext)

  console.log(search)
  
  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={ styles.content }>
        <BarSearch/>

        <ScrollView>
          <Text>{ search.search }</Text>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  content:{
    backgroundColor: '#303030',
    height: '100%'
  }
})

