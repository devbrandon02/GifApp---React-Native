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
import { AdMobBanner } from 'react-native-admob'
import { BarSearch } from './BarSearch';
import { searchReducer } from '../reducers/searchReducer';
import { SearchContext } from '../context/searchContext';
import { GifsCard } from './GifsCard';

const API = 'dwQacYa21OI16ljYleVkrKyTQ43HIhiY'


export const AppGif = () =>{
  const { search: searchText } = useContext(SearchContext)
  const [gifData, setgifData] = useState()

  const {category, typeSearch, search} = searchText


  useEffect(() => {
    setgifData()

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
    setgifData()
    
    if(typeSearch === 'trending'){
      fetch(`https://api.giphy.com/v1/${category}/${typeSearch}`,{
        method: 'GET',
        headers:{
          api_key: API,
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
      <AdMobBanner
        adSize="fullBanner"
        adUnitID="ca-app-pub-7987300867740926/5722986468"
        testDevices={[AdMobBanner.simulatorId]}
        onAdFailedToLoad={error => console.error(error)}
      />
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
              <Text 
                style={{
                  color: '#eee',
                  marginTop: 10,
                  fontWeight: 'bold',
                  fontSize: 15
                }}>
                Loading...
              </Text>
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

