/* eslint-disable */


import React, { useReducer, useEffect, useContext, useState } from 'react';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Text,
  StatusBar,
  FlatList,
  View
} from 'react-native';
import { AdMobBanner } from 'react-native-admob'
import { BarSearch } from './BarSearch';
import { SearchContext } from '../context/searchContext';
import { GifsCard } from './GifsCard';
import { Loading } from './Loading';


const API = 'dwQacYa21OI16ljYleVkrKyTQ43HIhiY'


export const AppGif = ({navigation}) =>{
  const { search: searchText } = useContext(SearchContext)
  const [gifData, setgifData] = useState([])
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


  return (
    <>
      <StatusBar barStyle="light-content"/>

      <AdMobBanner
        adSize="fullBanner"
        adUnitID="ca-app-pub-7987300867740926/5722986468"
        testDevices={[AdMobBanner.simulatorId]}
        onAdFailedToLoad={error => console.error(error)}
      />

      <SafeAreaView style={ styles.content }>
        <BarSearch 
          navigation={navigation}
        />

        { 
          gifData === undefined || gifData.length <= 0
          ? <View style={ styles.noResult }>
              <Text style={ styles.textNoResult }>No hay Resultados</Text>
            </View>
          : <Text></Text>
        } 


        { !gifData 
          ? <Loading/>
          
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
  noResult:{
    backgroundColor: '#DE4034',
    height: 60,
    marginTop: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textNoResult:{
    fontSize: 20,
    fontWeight: 'bold',
    color: '#9F1409'
  }
})

