import React, { useContext, useEffect } from 'react'
import useWindowSize from '../../helpers/useWindowSize'
import SmallSideBar from './SmallSideBar'
import BigSideBar from './BigSideBar'
import { SideBarContext } from '../../context/SideBarContext'

const SideBar  = () => {

  const {width} = useWindowSize()
  const {isToggled, setIsToggled} = useContext(SideBarContext)

  useEffect(()=> {
    width <= 1300
    ? setIsToggled(false)
    :setIsToggled(true)
  }, [width])

  return (
    <>
      {width<792
      ? null
      : (
        isToggled
        ?<BigSideBar/> 
        :<SmallSideBar/>
      )}
    </>
  )
}

export default SideBar 
