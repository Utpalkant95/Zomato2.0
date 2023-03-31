import React from 'react';
import { Tooltip } from '@material-tailwind/react';
import { useState } from 'react';


export default function ProfileDropDown(){

    let icon = "bx bxs-chevron-down";
    let icon2 = "bx bxs-chevron-up";
    let Class = "text-black border-black border p-1"
    let Class2 = "'text-black border-black border p-1 hidden"



    let [showModal, setModal] = useState(false);
    let [isActive, setActive] = useState(icon);
    let [hide, setHide] = useState(Class);

    

    const show = () =>{
        setModal(!showModal);
        setActive(!isActive);
        setHide(!hide);
    }

    const options = ["Profile","Notification","Bookmarks", "Reviews", "Network", "Find Friends", "Setting", "Log Out"]
    const renderList = options.map((item,index)=>{
        return <div key={index} className="h-9 px-2 w-full hover:bg-blue-200">{item}</div>
    });

  return (
    <div>
        <Tooltip content="chevron-down" placement='bottom' className={`${hide ? Class : Class2}`}>
            <i className={`${isActive ? icon : icon2} mx-2 my-[10px] text-[13px]`} onClick={show}></i>
        </Tooltip>

        {showModal ? (
            <div className='container'>
                <div className='box w-[10rem] h-auto rounded-md absolute shadow-xl top-16 left-[1100px] border z-10 bg-white'>
                    {renderList}
                </div>
            </div>
        ) : null}

    </div>
  )
}
