import React from 'react'


const tabs=[
    {
        id:"1",
        img:"https://b.zmtcdn.com/webFrontend/e5b8785c257af2a7f354f1addaf37e4e1647364814.jpeg?output-format=webp&fit=around|402:360&crop=402:360;*,*",
        heading:"Order Online",
        title:"Stay home and order to your doorstep"
    },
    {
        id:"2",
        img:"https://b.zmtcdn.com/webFrontend/d026b357feb0d63c997549f6398da8cc1647364915.jpeg?output-format=webp&fit=around|402:360&crop=402:360;*,*",
        heading:"Dining",
        title:"View the city's favourite dining venues"
    },
    {
        id:"3",
        img:"https://b.zmtcdn.com/webFrontend/d9d80ef91cb552e3fdfadb3d4f4379761647365057.jpeg?output-format=webp&fit=around|402:360&crop=402:360;*,*",
        heading:"Nightlife and Clubs",
        title:"Explore the city's top nightlife outlets"
    }
]

export default function LoginTabOption({activeTab, setActiveTab}) {
  return (
    <div className='container max-w-6xl mx-auto mt-9 flex justify-between'>
        {tabs.map((item) =>{
            return(
                <div className='inner-container cursor-pointer' onClick={()=>setActiveTab(item.heading)}>
                   <div className='box h-64 w-[366px] border-2 rounded-xl'>
                        <div className='w-full h-[70%]'>
                            <img src={item.img} className="h-full w-full rounded-xl" />
                        </div>
                        <div className='py-2 px-6'>
                            <h2 className='font-medium text-xl'>{item.heading}</h2>
                        </div>
                        <div className='px-6'>
                            <span>{item.title}</span>
                        </div>
                   </div>
                </div>
            )
        })}
    </div>
  )
}
