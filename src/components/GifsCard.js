/* eslint-disable */

import React from 'react'
import { Text, View, StyleSheet, Image} from 'react-native'

export const GifsCard = ({search, gifData}) => {
  
  
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
          </View>
        </View>
    </>
  )   
}


const styles = StyleSheet.create({
  content:{
    height: 300,
  },
  gifImages:{
    height: 300,
  },
  titleStyle:{
    color: '#eee',
    fontSize: 20,
    textAlign: 'center',    
    paddingTop: 20,
    paddingBottom: 20
    
  },
  cardGif:{
    justifyContent: 'center',
  }

})
