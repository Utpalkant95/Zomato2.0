import React from 'react';
import { useState } from 'react';
import { Tooltip } from '@material-tailwind/react';

const ExploreOptions = ({heading,exploreOptions}) => {
  const hide = "hidden"
  let icon = "bx bx-chevron-down";
  let icon2 = "bx bx-chevron-up";

  let [isActive, setActive] = useState(icon);
  let [activeClass, setActiveClass] = useState(hide);
  // let [activeOption, setActiveOption] = useState(exploreOptions[].id);

  const Show = () =>{
    // setActiveOption(exploreOptions[].id);
    setActive(!isActive)
    setActiveClass(!activeClass)
  };

  return (
    <div className='container mt-[90px] max-w-6xl mx-auto'>
      <h2 className='text-[36px] font-medium'>{heading}</h2>
      <div className='explore-options'>
        {exploreOptions.map((item)=>{
          return(
            <Tooltip content={item.title} placement='bottom' className='text-black border-black border p-1'>
              <div className='box border-2' onClick={Show}>
                <div className='item flex justify-between items-center'>
                  <div className='item-name'>
                    <p className='text-[20px] text-gray-600 py-[20px] px-[24px] font-normal'>{item.title}</p>
                  </div>
                  <div>
                    <i className={`${isActive ? icon : icon2}`}></i>
                  </div>
                </div>
                <div className={`${activeClass ? hide : "area-options"}`}>
                  {item.options.map((option)=>{
                    return(
                      <li>{option}</li>
                   )
                  })}
                </div>
              </div>
            </Tooltip>
          )
        })}
      </div>
    </div>
  )
}

export default ExploreOptions


// 