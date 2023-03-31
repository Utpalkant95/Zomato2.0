import React from 'react'
import { Tooltip } from '@material-tailwind/react'

const FilterComp = ({filters,className}) => {
  return (
    <div className={`filter-container p-[16px] sticky top-0 z-10 bg-white ${className}`}>
        <div className='filter flex items-center gap-3 max-w-6xl mx-auto'>
            {filters.map((filter)=>{
                return (
                    <div className='filter flex  border border-slate-400 rounded-md p-[8px] text-[14px] h-[37px] text-center'>
                        <div className='igm'>
                            <Tooltip content="filter" placement='bottom' className='text-black border-black border p-1'>
                                <img src={filter?.icon} width={filter?.height} height={filter?.height} className={filter?.className}></img>
                            </Tooltip>
                        </div>
                        <div className='filter-name'>
                            <span>{filter.title}</span>
                        </div>
                        <div className='filter-icon ml-1 text-[18px]'>
                            <Tooltip content="chevron-down" placement='bottom' className='text-black border-black border p-1'>
                                <i className={filter?.icon_class}></i>
                            </Tooltip>
                        </div>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default FilterComp