/* eslint-disable */
import React from 'react'
import RNFetchBlob from 'react-native-fetch-blob'

export const saveGifs = async(gifUrl, slug) => {
  let directorys = RNFetchBlob.fs.dirs
  let date = new Date()
  let ext = '.gif' 

  await RNFetchBlob.config({
    fileCache: true,
    appendExt: 'gif',
    addAndroidDownloads: {
      useDownloadManager: true,
      notification: true,
      path: directorys.DCIMDir + '/GifApp/gifs/image-'+slug+ext,
      description: 'GifApp'
    }
  })
  .fetch('GET', gifUrl)
  .then((res) => {
    console.log(res.path())

    return true
  })
  
  .catch((err) => {
    return false
  })
  
}
