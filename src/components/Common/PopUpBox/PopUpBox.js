import React from 'react'
import { useState } from 'react'
import { Tooltip } from '@material-tailwind/react';

export default function PopUpBox() {

    let icon = "bx bxs-down-arrow";
    let icon2 = "bx bxs-up-arrow text-[13px]";
    let Class = "text-black border-black border p-1"
    let Class2 = "'text-black border-black border p-1 hidden"

    let [showModal, setModal] = useState(false);
    let [isActive, setActive] = useState(icon);
    let [hide, setHide] = useState(Class)


    const show = () =>{
        setModal(!showModal)
        setActive(!isActive)
        setHide(!hide)
    }

  return (
    <div>
         <Tooltip content="down-triangle" placement='bottom' className={`${hide ? Class : Class2}`}>
            <i className={`${isActive ? icon : icon2} mx-2 text-[13px]`} onClick={show}></i>
         </Tooltip>
        
        {showModal ? (
            <div className='Container w-[23rem] max-h-60 rounded-md absolute left-[250px] overflow-auto top-[70px] shadow-xl border visible-none z-10 bg-white'>
                <div className='location flex mt-4 my-4'>
                    <div className='location-icon mx-4'>
                        <i class='bx bx-current-location'></i>
                    </div>
                    <div className='location-text'>
                        <p>Detect current location</p>
                        <span>using GPS</span>
                    </div>
                </div>
                <hr></hr>
                <div className='address flex my-4'>
                    <div className='icon mx-4'>
                        <i class='bx bx-plus-medical'></i>
                    </div>
                    <div className='text'>
                        <span>Add address</span>
                    </div>
                </div>
                <hr></hr>
                <div className='recernt-location-heading mx-4 my-4'>
                    <span>Recent Locations</span>
                </div>
                <div className='recent-ocations flex my-4'>
                    <div className='icon mx-4'>
                        <i class='bx bx-time-five'></i>
                    </div>
                    <div className='location-text whitespace-nowrap overflow-hidden text-ellipsis w-4/5'>
                        <span>F Block, Wazirabad, Delhi</span>
                    </div>
                </div>
                <hr></hr>
            </div>
        ) : null}
    </div>
  )
}
