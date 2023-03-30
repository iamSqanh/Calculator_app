import React from 'react'

function ItemNumber({value, onClick }) {

  return (
    <div
      onClick={() => onClick(value)} 
      className={`h-[80px] text-[22px] cursor-pointer text-[#333] bg-[#f2cfc4] flex items-center justify-center text-center`}
    >
        {value}
    </div>
  )
}

export default ItemNumber