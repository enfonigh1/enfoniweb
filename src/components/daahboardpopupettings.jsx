import React from 'react'
import {IoSettingsSharp} from 'react-icon/io'

const daahboardpopupettings = () => {
  return (
    <div>
        <IoSettingsSharp onClick={()=>{
            setISOpen(prevState => !prevState)
          } }className="absolute right-6 bottom-10 z-[600] text-4xl max-w-[300px] max-h-[400px] text-white" />
    </div>
  )
}

export default daahboardpopupettings