/* eslint-disable */
import React from 'react'
import {View, ActivityIndicator, StyleSheet, Text} from 'react-native'


export const Loading = () => {
  return (
    <>
      <View style={ styles.loadingView}>
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
    </>
  )
}

const styles = StyleSheet.create({
  loadingView:{
    alignItems: 'center',
    justifyContent: 'center',
    height: '55%'
  },
})
