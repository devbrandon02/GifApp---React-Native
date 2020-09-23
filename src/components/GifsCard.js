/* eslint-disable */

import React, { useContext, useState } from 'react'
import { Text, View, StyleSheet, Image, TouchableOpacity, PermissionsAndroid, Modal, Alert} from 'react-native'
import { SearchContext } from '../context/searchContext'
import { saveGifs, saveStickers } from '../helpers/saveImages'


export const GifsCard = ({gifData}) => {
  
  const [MessageSuccess, setMessageSuccess] = useState(false)
  const { search: searchContext } = useContext(SearchContext)
  const { category } = searchContext


  const saveImageConfirmed = async (dataUrl, slug) => {
    const permisionResponse = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE) 

    Alert.alert(
      'Confirmacion de la descarga',
      '¿Estas SEGURO que desea descargar la Imagen?',
        [{
          style: 'default',
          text: 'Cancelar',
        },{
          style: 'default',
          text: 'SI, Estoy seguro', 
          onPress: (() => 
            saveGifsOrStickers(permisionResponse, dataUrl, slug)
          )
        }]
    )
  }


  const saveGifsOrStickers = (permisionResponse, url, slug) => {
    if(permisionResponse === PermissionsAndroid.RESULTS.GRANTED && category === 'gifs' ){
      saveGifs(url, slug)
        .then(() => {
          Alert.alert(
            'Estado de tu descarga!',
            'Descarga de tu Gif Exitosa :)',
            [{
              style: 'default',
              text: 'Entendido'
            }]
          )
          setMessageSuccess(true)
        })
        .catch(async()=> {
          await Alert.alert('Error con tu descarga :(')
        })

    } else{
      saveStickers(url, slug)
      .then(async() => {
        await Alert.alert(
          'Estado de tu descarga!',
          'Descarga de tu Stickers Exitosa :)',
          [{
            style: 'default',
            text: 'Entendido'
          }]
        )
        setMessageSuccess(true)
      })
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
                saveImageConfirmed(
                  gifData.images.downsized_medium.url, gifData.slug
                )
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