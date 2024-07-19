import React, { useContext } from 'react'
import LeftNav from './LeftNav'
import SearchBar from './SearchBar/SearchBar'
import RightNav from './RightNav'
import { BiArrowBack } from 'react-icons/bi'
import { ImSearch } from 'react-icons/im'
import { MdKeyboardVoice } from 'react-icons/md'
import { SearchContext } from '../../context/SearchContext'

const NavigationBar  = () => {

  const {
    showSpecialSearchBar,
    setShowSpecialSearchBar,
  } = useContext(SearchContext)

  const specialSearchBarMarkUp = (
    <div className='special_searchbar'>
      <button onClick={()=> {setShowSpecialSearchBar(false)}}>
        <BiArrowBack size ={25}/>
      </button>
      <form>
        <input type = "text"
        name = 'search'
        placeholder= 'Search'
        autoComplete = 'false'
        />

        <button type="submit">
          <ImSearch size={20} data-tip='Search' data-for='navbar'/>
        </button>
      </form>
      <button className='icon-container voiceIcon'>
        <MdKeyboardVoice size={25} data-tip='Search with your voice' data-for='navbar'/>
      </button>
    </div>
  )

  return (
    <nav className='Navbar'>
      {
        width<= 640 && showSpecialSearchBar
        ? specialSearchBarMarkUp
        :<>
          <LeftNav/>
          <SearchBar/>
          <RightNav/>
        </>

      }

    </nav>
  )
}

export default NavigationBar 
