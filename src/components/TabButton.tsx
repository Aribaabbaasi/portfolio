import React,{ ReactNode } from 'react'

interface TabButtonProps {
    active: boolean;
    selectTab: () => void;
    children: ReactNode;
}

const TabButton = ({ active, selectTab, children}: TabButtonProps) => {
    
  return (
    <button onClick={selectTab}>
        <p className='mr-3 font-semibold hover:text-white ${buttonClasses}'>
        {children}
        </p>
        </button>

  )
}

export default TabButton