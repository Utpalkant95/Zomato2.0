import React from "react";

export default function Collections({
  heading,
  title,
  tagline,
  icon,
  collection,
  adjTop,
  adjHeading,
  className
}) {
  return (
    <section className={`collection mt-[100px] ${adjTop} max-w-6xl mx-auto`}>
      <h2 className={`text-[36px] font-medium ${adjHeading}`}>{heading}</h2>
      <div className="box">
        <div className="heading-des flex items-center justify-between mb-4">
          <div className="title font-semibold text-[18px]">{title}</div>
          <div className="tagline text-gray-400">
            <span className="">{tagline}</span>
            <i className={icon}></i>
          </div>
        </div>
      </div>
      <div className={`Container flex gap-9 ${className}`}>
        {collection.map((item) => {
          return(
            <div className="img-box relative">
              <div className="img">
                <img src={item.img} className={`rounded-md`} id="col"/>
              </div>
              <div className="absolute bottom-8 left-4 text-white text-lg">{item.headline}</div>
              <div className="flex items-center absolute bottom-2  left-4 text-white font-normal">
                <span className="">{item.places}</span>
                <i className={`${item.icon} text-sm mt-1`}></i>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  );
}
