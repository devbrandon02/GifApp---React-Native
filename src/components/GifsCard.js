/* eslint-disable */

import React, { useContext, useState } from 'react'
import { Text, View, StyleSheet, Image, TouchableOpacity, PermissionsAndroid, Modal, Alert} from 'react-native'
import { SearchContext } from '../context/searchContext'
import { saveGifs } from '../helpers/saveGifs'


export const GifsCard = ({search, gifData}) => {
  
  const [showModal, setshowModal] = useState(true)
  const [MessageSuccess, setMessageSuccess] = useState(false)
  const { search: searchContext } = useContext(SearchContext)

  const { category } = searchContext


  const saveGifsAndStckers = async (dataUrl, slug) => {
    const permisionResponse = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE) 

    if(permisionResponse === PermissionsAndroid.RESULTS.GRANTED && category === 'gifs' ){
      saveGifs(dataUrl, slug)
        .then((res) => {
          setMessageSuccess(true)
          Alert.alert('Tu Gifs Se ah descargado correctamente :)')
        })
        .catch((err)=> {
          Alert.alert('Ah ocurrido un error con tu descarga :(')
        })

    } else{
      console.log('NO LO PUEDES USAR')
    }
  } 

  return (
    <>
      <View>
        <Text style={ styles.titleStyle }>{ gifData.title }</Text>
        <View style={ styles.content }>
          <View style={styles.cardGif}>
            <Image
              style={ styles.gifImages }
              source={{
                uri: gifData.images.fixed_height.url
              }}
            />
            <TouchableOpacity
              onPress={() => 
                saveGifsAndStckers(gifData.images.downsized_medium.url, gifData.slug)
              } 
              style={ styles.btnDownloaded }>
              <Text style={ styles.textBtn }>
                ¡Descarga este { category }!
              </Text>
            </TouchableOpacity>

          </View>
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
  },
  modalMessage:{
    height: '50%',
    width: '50%',
    backgroundColor: '#eee'
  }

})
