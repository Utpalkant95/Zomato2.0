import React from 'react';
import Avatar from '../Avatar';
import { Tooltip } from '@material-tailwind/react';
import { Fragment } from 'react';
import PopUpBox from '../PopUpBox/PopUpBox';
import ProfileDropDown from '../../ProfileDropDown/ProfileDropDown';

const Header = () => {
  return (
    <Fragment>
      <div className='flex justify-between items-center max-w-6xl mx-auto h-[72px]'>
      <div className='logo mr-2'>
        <img src='https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png'
         width="127px"
          height="27px"
          alt='Zomato Logo'
        >
        </img>
      </div>
      <div className='location-search-bar flex items-center border border-gray-200 flex-1 mx-4 h-[52px] rounded-md shadow-sm'>
        <div className='location-bar flex items-center'>
          <div className='location-icon py-[10px] px-[2px]'>
            <Tooltip content="location fill" placement='bottom' className='text-black border-black border p-1'>
              <i className='bx bxs-map text-red-400 text-[22px] '></i>
            </Tooltip>
          </div>
          <div className='location-name py-[2px] px-[1px]'>
            <input type="text" placeholder='F Block, Wazirabad, Delhi' className='focus:outline-none'/>
          </div>
          <div className='location-downArrow'>
            <Tooltip content="down-triangle" placement='bottom' className='text-black border-black border p-1'>
              {/* <i className='bx bxs-down-arrow mx-2 text-[13px]'></i> */}
              <PopUpBox />
            </Tooltip>
          </div>
        </div>
        <div className='text-2xl mb-2 text-slate-300 font-bold'>
          |
        </div>
        <div className='Search-bar flex items-center'>
          <div className='Search-icon text-[22px] text-slate-300'>
            <Tooltip content="search" placement='bottom' className='text-black border-black border p-1'>
              <i className='bx bx-search mx-3 mt-2' ></i>
            </Tooltip>
          </div>
          <div className='Search-Input'>
            <input 
            type="text" 
            placeholder='Search for restaurant, Cuisine or a dish'
            className='w-[413px] h-[40px] mt-[-6px] focus:outline-none ' 
            />
          </div>
        </div>
      </div>
      <div className='SignUp flex ml-[85px]'>
        <div className='Avatar'>
          <Avatar />
        </div>
        <div className='Avatar-name ml-1 my-1'>
          <span className='text-[20px] text-slate-800'>Utpalkant</span>
        </div>
        <div className='Avatar-icon'>
          {/* <Tooltip content="chevron-down" placement='bottom' className='text-black border-black border p-1'>
            <i class='bx bxs-chevron-down my-2 text-[20px]'></i>
          </Tooltip> */}
          <ProfileDropDown />
        </div>
      </div>
    </div>
    </Fragment>
  )
}

export default Header