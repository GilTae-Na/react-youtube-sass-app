import React, { useContext, useEffect } from 'react'
import useWindowSize from '../../helpers/useWindowSize'
import SmallSideBar from './SmallSideBar'
import BigSideBar from './BigSideBar'
import { SideBarContext } from '../../context/SideBarContext'

const SideBar  = () => {

  const {width} = useWindowSize()
  const {isToggled, setIsToggled} = useContext(SideBarContext)

  useEffect(()=> {
    width <= 1320
    ? setIsToggled(false)
    :location.pathname.startsWith('/video')
      ?setIsToggled(false)
      :setIsToggled(true)
  }, [location.pathnamem, setIsToggled, width])

  return (
    <>
      {
      location.pathname.startsWith('/video')
        ?(isToggled
          ?<BigSideBar/>
          :null
        )
        : width <792
          ? null
          :(
            isToggled
            ?<BigSideBar/>
            :<SmallSideBar/>
          )
      }
    </>
  )
}

export default SideBar 
