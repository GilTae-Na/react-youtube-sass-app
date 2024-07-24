import React, { useCallback, useContext, useEffect, useState } from 'react'
import { SearchContext } from '../../context/SearchContext';
import { SideBarContext } from '../../context/SideBarContext';

const SearchedVideosPage = () => {

  const [searchVideos, setSearchVideos] = useState([]);
  const {searchQuery} = useContext(SearchContext)
  const {setIsToggled} = useContext(SideBarContext)

  const loadVideoInfo = useCallback(async () => {
    setIsToggled(true)
    const videos = await getVideoInfo(searchQuery.videos)
    setSearchVideos(videos)

  }, [searchQuery.videos, setIsToggled])

  useEffect(() => {
    loadVideoInfo()
  }, [loadVideoInfo]);
  
  return (
    <div>
      SearchedVideosPage
    </div>
  )
}

export default SearchedVideosPage
