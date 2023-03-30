import React from 'react'

function Header({result}) {
 



  return (
    <div className='flex h-[120px] bg-[#433c3c] relative'>
      <h1 className='text-[36px] text-[#fff] absolute right-[12px] bottom-[8px] '>{result}</h1> 
    </div>
  )
}

export default Header