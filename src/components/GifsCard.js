/* eslint-disable */

import React, { useContext } from 'react'
import { Text, View, StyleSheet, Image, TouchableHighlight, PermissionsAndroid} from 'react-native'
import { SearchContext } from '../context/searchContext'



export const GifsCard = ({search, gifData}) => {
  
  const { search: searchContext } = useContext(SearchContext)

  const { category } = searchContext

  const requestCameraPermission = async () => {
    const permisionResponse = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE) 

    if(permisionResponse === PermissionsAndroid.RESULTS.GRANTED && category === 'gifs' ){
    
    } else{
      console.log('NO LO PUEDES USAR')
    }
  } 


  return (
    <>
        <Text style={ styles.titleStyle }>{ gifData.title }</Text>
        <View style={ styles.content }>
          <View style={styles.cardGif}>
            <Image
              style={ styles.gifImages }
              source={{
                uri: gifData.images.fixed_height.url
              }}
            />
            <TouchableHighlight
              onPress={ requestCameraPermission } 
              style={ styles.btnDownloaded }>
              <Text style={ styles.textBtn }>
                ¡Descarga este { category }!
              </Text>
            </TouchableHighlight>
          </View>
        </View>
    </>
  )   
}


const styles = StyleSheet.create({
  content:{
    height: 300,
    margin: 20,
    marginBottom: 70

  },
  gifImages:{
    height: 300,
    borderRadius: 5
  },
  titleStyle:{
    color: '#eee',
    fontSize: 20,
    textAlign: 'center',    
    marginLeft: 20,
    marginRight: 20
  },
  cardGif:{
    justifyContent: 'center',
    borderRadius: 5
  },
  btnDownloaded:{
    justifyContent: 'center',
    backgroundColor: '#460c7c',
    alignItems: 'center',
    height: 50,
    borderRadius: 3
  },
  textBtn:{
    color: '#eee',
    fontSize: 20,
    fontWeight: 'bold'
  }

})
