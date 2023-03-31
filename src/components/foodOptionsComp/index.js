import React from 'react';

const FoodOptions = ({title,foodOptions,className,imgWidth,imgHeight,classes}) => {
  return (
    <div className='Container py-10'>
        <div className='title mb-9'>
            <span className='text-[36px] font-medium'>{title}</span>
        </div>
        <div className='food-items flex gap-8 overflow-scroll overflow-y-hidden hide-scrollbar'>
            {foodOptions.map((item) =>{
                return(
                    <div className='foods-options flex flex-col '>
                        <div className={`food-img ${className} border bottom-1`}>
                            <img src={item.img} className={`${className} bg-cover bg-center bg-no-repeat`}/>
                        </div>
                        <div className='img-name h-8 w-40 text-center mt-[4px]'>
                            <span className='img-name text-xl font-medium text-ellipsis overflow-hidden'>{item.name}</span>
                            </div>
                    </div>
                )
            })}
        </div>
    </div>
  )
}



export const BestFoodComp = ({title,bestFood,alignTop,alignLeft,adjkm}) =>{
    return(
        <div className='Container'>
        <h1 className='heading text-3xl font-medium mt-[10px] mb-2'>{title}</h1>
            <div className='box flex justify-between flex-wrap'>
                {bestFood.map((item) =>{
                    return(
                            <div className='food rounded-xl relative mt-12 ' id='food'>
                                <div className='bestcomp-img'>
                                    <img src={item.img} id='img' className='rounded-xl'/>
                                </div>
                                <div className='labels flex items-center'>
                                    <div className='absolute bottom-[150px] bg-blue-500 text-white px-1 text-sm'>{item.label}</div>
                                    <div className={`absolute left-[275px] bottom-[150px] bg-white text-red-500 px-1 text-[12px] ${adjkm}`}>{item.min}</div>
                                </div> 
                                <div className='description flex'>
                                    <div className='Cname font-medium text-lg whitespace-nowrap w-3/4 overflow-hidden text-ellipsis'>{item.Cname}</div>
                                    <div className='rating rounded-md ml-10 bg-red-600 h-4 px-1 mt-2 text-white text-xs'>{item.rating} <span className={`${item.iconStar} text-[10px]`}></span></div>
                                </div>
                                <div className='price flex items-center text-gray-600'>
                                    <div className='title whitespace-nowrap w-2/4 overflow-hidden text-ellipsis'>{item.title}</div>
                                    <div className={`price`}>
                                        <span className={`ml-16`}>{item.price}</span>
                                    </div>
                                </div>
                                <div className='animatedText'>
                                    <div className='mt-3'>
                                        <hr className={`mr-14 ${item.className}`}></hr>
                                    </div>
                                    <div className='text1 flex items-center justify-end mt-3'>
                                        <div className={`icon w-1/5 ${item.className}`}>
                                            <img  src='BestFood/max.webp' width="48px" height="18px"
                                            />
                                        </div>
                                        <div className={`text leading-[0.3] ml-2 ${alignTop}`}>
                                            <span className={`text-xs ${alignLeft}`}>{item.animationText1}</span>
                                        </div>
                                        <div className={`icon w-1/5 ${item.className}`}>
                                            <img src='BestFood/icon.webp' height="18px" width="18px"
                                            className='ml-6'/>
                                        </div>
                                    </div>

                                    <div className={`text1 flex items-center justify-between mt-3 ${item.className}`}>
                                        <div className='icon w-1/5'>
                                            <img  src='BestFood/icon.webp' width="18" height="18px"
                                            />
                                        </div>
                                        <div className='text w-4/5 leading-[0.3] -ml-12'>
                                            <span className='text-xs ml-3'>{item.animationText2}</span>
                                        </div>
                                        <div className='icon w-1/5 ml-5'>
                                            <img src='BestFood/max.webp' height="18px" width="48px"
                                            className='ml-2'/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    )
                })}
            </div>
        </div>
    )
}


export default FoodOptions

































{/* <div className='ml-4 py-[40px] '>
        <h1 className='mb-[32px] text-[36px]'>{title}</h1>
        <div className='outer-container flex overflow-x-scroll hide-scrollbar'>
        {foodOptions.map((item) =>{
            return(
                <div className='container'>
                        <div className={`food-img h-[150px] w-[150px] rounded-full overflow-hidden mx-5 cursor-pointer`}>
                            <img src={item.img} height={height} width={width}/>
                        </div>
                        <div className='food-name w-[166px] h-[32px] text-center'>
                            <span className='text-[20px] cursor-pointer'>{item.name}</span>
                        </div>
                        <div className='company-min text-center'>
                            {item?.minutes}
                        </div>
                </div>
            )
        })}
        </div>
    </div> */}