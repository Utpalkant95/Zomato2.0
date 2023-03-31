import React from 'react'
import {useState} from 'react';

const Localities = ({localitiSeeLess, localtiSeeMore, place, heading}) => {
  const [toggleHide, setToggleHide] = useState(false);
  const [buttonText, setButtonText] = useState("See More")
  
  function handleClick(){
    if(!toggleHide){
      setButtonText("See Less")
    } else {
      setButtonText("See More")
    }

    setToggleHide(!toggleHide);
  }
  return (
    <div className='container mt-[120px] max-w-6xl mx-auto'>
      <h2 className='text-[36px] font-normal'>{heading} {place}</h2>
       <div className='inner-container'>
        {!toggleHide ? 
          <div className='inner-outer flex flex-wrap mt-[40px] justify-between'>
            {localtiSeeMore.map((item)=>{
              return(
                <div className="box flex shadow-md rounded-sm bg-white border border-solid py-[12px] px-[15px] mb-2 cursor-pointer justify-between items-center w-[356px] h-[80px] my-[4px]">
                  <div className='name overflow-hidden text-ellipsis ml-[5px]'>
                    <h3 className='text-[20px] font-normal'>{item.placeName}</h3>
                    <span>{item.places}</span>
                    <button onClick={()=>handleClick()}>{item.text}</button>
                  </div>
                  <div className='icon'>
                    <i className={item.icon}></i>
                  </div>
                </div>
              )
            })}
          </div>
        : 
        <div className='inner-outer flex flex-wrap justify-between mt-[40px]'>
            {localitiSeeLess.map((item)=>{
              return(
                <div className="box flex shadow-md rounded-sm bg-white border border-solid py-[12px] px-[15px] mb-2 cursor-pointer justify-between items-center w-[356px] h-[80px] my-[4px]">
                  <div className='name overflow-hidden text-ellipsis ml-[5px]' >
                    <h3 className='text-[20px] font-normal'>{item.placeName}</h3>
                    <span>{item.places}</span>
                    <button onClick={()=>handleClick()}>{item.text}</button>
                  </div>
                  <div className='icon'>
                    <i className={item.icon}></i>
                  </div>
                </div>
              )
            })}
          </div>
        }
       </div> 
       
    </div>
  )
}

export default Localities
{/* <button onClick={()=>handleClick()}>{buttonText}</button> */}