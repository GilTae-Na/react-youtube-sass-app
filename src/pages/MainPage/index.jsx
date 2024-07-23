import React, { useCallback, useEffect, useState } from 'react'
import { getVideoInfo } from '../../helpers/fetchingData'
import axios from '../../api/axios'

const MainPage = () => {

  const [mainVideos, setMainVideos] = useState([])

  const getMainVideos = useCallback( async()=>{
    try{
      const response = await axios.get(`/search?part=snippet&maxResults=10&q=beautiful%20place`)
      console.log(response.data)
      let videoArray = await  response.data.items      
      console.log(videoArray)

      videoArray = await getVideoInfo(videoArray)
      setMainVideos(videoArray)

    }catch(e){
      console.log(e)
    }

  }, [])

  useEffect(( )=> {
    getMainVideos();
  }, [getMainVideos])

  return (
    <div>
      MainPage
    </div>
  )
}

export default MainPage
