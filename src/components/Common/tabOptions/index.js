import React from "react";

const tabs = [
  {
    id: "1",
    name: "Delivery",
    active_img:
      "https://b.zmtcdn.com/data/o2_assets/c0bb85d3a6347b2ec070a8db694588261616149578.png?output-format=webp",
    backdrop: "FCEEC0",
    inactive_img:
      "https://b.zmtcdn.com/data/o2_assets/246bbd71fbba420d5996452be3024d351616150055.png",
  },
  {
    id: "2",
    name: "Dining Out",
    active_img:
      "https://b.zmtcdn.com/data/o2_assets/30fa0a844f3ba82073e5f78c65c18b371616149662.png",
    backdrop: "F8F8F8",
    inactive_img:
      "https://b.zmtcdn.com/data/o2_assets/78d25215ff4c1299578ed36eefd5f39d1616149985.png?output-format=webp",
  },
  {
    id: "3",
    name: "Nightlife",
    active_img:
      "https://b.zmtcdn.com/data/o2_assets/855687dc64a5e06d737dae45b7f6a13b1616149818.png",
    backdrop: "F8F8F8",
    inactive_img:
      "https://b.zmtcdn.com/data/o2_assets/01040767e4943c398e38e3592bb1ba8a1616150142.png?output-format=webp",
  },
];

const TabOptions = ({ activeTab, setActiveTab }) => {
  return (
    <div className="Options-container">
      <div className="Options">
        <div className="flex max-w-6xl mx-auto items-center">
          {tabs.map((tab) => {
            return (
              <div
                className="options flex items-center w-[186px] h-[89px] mr-[15px] cursor-pointer"
                onClick={() => setActiveTab(tab.name)}
              >
                <div className="mx-4">
                  <img
                    src={
                      activeTab === tab.name ? tab.active_img : tab.inactive_img
                    }
                    alt={tab.name}
                    width="30px"
                    height="30p"
                  ></img>
                </div>
                <div className="opition-name">
                  <span className="text-[20px] text-slate-500 font-semibold">
                    {tab.name}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TabOptions;

// (
//   <div
//     onClick={() =>setActiveTab(tab.name)}
//     className={`text-2xl ${activeTab === tab.name && "text-sm"}`}
//   >
//     <div
//       className=''
//       style={{backgroundColor:`${activeTab === tab.name ? tab.backdrop : ""}`
//       }}
//     >
//       <img
//         className='tab-img'
//         alt={tab.name}
//         src={activeTab === tab.name ? tab.active_img : tab.inactive_img}
//       ></img>
//     </div>
//   </div>
// )

{
  /*  */
}
