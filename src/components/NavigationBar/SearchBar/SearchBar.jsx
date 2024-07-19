import React, { useContext } from 'react'
import { ImSearch } from 'react-icons/im'
import { MdKeyboardVoice } from 'react-icons/md'
import useWindowSize from '../../../helpers/useWindowSize'
import { SearchContext } from '../../../context/SearchContext'

const SearchBar = () => {

  const {width} = useWindowSize();

  const {
    setShowSpecialSearchBar,
  } = useContext(SearchContext)

  return (
    <div className={`SearchBar ${width <= 640 ? 'smallSearch': ''}`}>
     {
      width > 640 ? 
      (
        <form onSubmit={onSubmit}>
          <input type = "text" name = 'search' placeholder='Search' autoComplete='false'/>
          <button type = 'submit'>
            <SearchIcon size={20} data-tip='Search' data-for='navbar'/>
          </button>
        </form>
      )
      :
      <button 
      className='icon-container searchIcon'
      onClick={() => setShowSpecialSearchBar(true)}
      >
        <SearchIcon size = {20} data-tip='Search' data-for='navbar'/>
      </button>

     }

      <button className='icon-container voiceIcon'>
        <VoiceIcon size = {25} data-tip='Search with your vioce' data-for='navbar'/>
      </button>
    </div>
  )
}

export default SearchBar 
