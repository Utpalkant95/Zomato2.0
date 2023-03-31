import React from 'react';
import FilterComp from '../Common/filterComp';
import FoodOptions from '../foodOptionsComp';
import { BestFoodComp } from '../foodOptionsComp';
import Collections from '../Collections/Collections';
import Localities from '../Localities/Localities';
import ExploreOptions from '../exploreOptions/ExploreOptions';

let filters=[
  {
    id:"1",
    title:"Filters",
    icon:"filter.svg",
    height:"18px",
    width:"18px",
    className:"mt-[2px] mx-1"
  },
  {
    id:"2",
    title:"Rating: 4.0+"
  },
  {
    id:"3",
    title:"Pure Veg"
  },
  {
    id:"4",
    title:"Cuisines",
    icon_class:"bx bxs-chevron-down"
  },
  {
    id:"5",
    title:"More filters",
    icon_class:"bx bxs-chevron-down"
  }
]

let foodOptions=[
  {
    id:"1",
    img:"foodImages/Pizza.avif",
    name:"Pizza"
  },
  {
    id:"2",
    img:"foodImages/Burger.avif",
    name:"Burger"
  },
  {
    id:"3",
    img:"foodImages/Cake.avif",
    name:"Cake"
  },
  {
    id:"4",
    img:"foodImages/Thali.avif",
    name:"Thali"
  },
  {
    id:"5",
    img:"foodImages/PaneerRools.avif",
    name:"Paneer Rools"
  },
  {
    id:"6",
    img:"foodImages/Biryani.avif",
    name:"Biryani"
  },
  {
    id:"7",
    img:"foodImages/Chicken.webp",
    name:"Chicken"
  },
  {
    id:"8",
    img:"foodImages/VegMomos.avif",
    name:"Veg Momos"
  },
  {
    id:"9",
    img:"foodImages/Dosa.avif",
    name:"Dosa"
  },
  {
    id:"10",
    img:"foodImages/Panner.avif",
    name:"Paneer"
  },
  {
    id:"11",
    img:"foodImages/Idli.avif",
    name:"Idli"
  },
  {
    id:"12",
    img:"foodImages/FriedRice.avif",
    name:"Fried Rice"
  }
]

let topCompanyOptions=[
  {
    id:"1",
    name:"McDonald's",
    img:"https://b.zmtcdn.com/data/brand_creatives/logos/bb30587d1148b6ab628a61945f64bf88_1625164768.png?output-format=webp",
    minutes:"40 min",
    className:"h-[118px] w-[116px]"
  },
  {
    id:"2",
    name:"Burger King",
    img:"https://b.zmtcdn.com/data/brand_creatives/logos/6a11fd0f30c9fd9ceaff2f5b21f61d23_1617187857.png?output-format=webp", 
    minutes:"36 min",
    className:"h-[118px] w-[116px]"
  },
  {
    id:"3",
    name:"KFC",
    img:"https://b.zmtcdn.com/data/brand_creatives/logos/466f8fc74274145f3b21795c3d21816d_1589433692.png?output-format=webp",
    minutes:"33 min",
    className:"h-[118px] w-[116px]"
  },
  {
    id:"4",
    name:"Pizza Hut",
    img:"https://b.zmtcdn.com/data/brand_creatives/logos/d46560ce3d7b84605cab233c5abc65f3_1625165852.png?output-format=webp",
    minutes:"33 min",
    className:"h-[118px] w-[116px]"
  },
  {
    id:"5",
    name:"Subway",
    img:"https://b.zmtcdn.com/data/brand_creatives/logos/9302c59eca94abbee01aec9acf9305f6_1676471786.png?output-format=webp",
    minutes:"27 min",
    className:"h-[118px] w-[116px]"
  },
  {
    id:"6",
    name:"Bikkgane Biryani",
    img:"https://b.zmtcdn.com/data/brand_creatives/logos/4bf3cd23b591c0292aba5fe476fadbef_1625160389.png?output-format=webp",
    minutes:"28 min",
    className:"h-[118px] w-[116px]"
  },
  {
    id:"7",
    name:"La Pino'z Pizza",
    img:"https://b.zmtcdn.com/data/brand_creatives/logos/05142cf68ce04384bb185659e1bfe450_1625160307.png?output-format=webp",
    minutes:"36 min",
    className:"h-[118px] w-[116px]"
  },
  {
    id:"8",
    name:"The Burger Club",
    img:"https://b.zmtcdn.com/data/brand_creatives/logos/26155927d30d8e56d537b65d6a5b9969_1617944079.png?output-format=webp",
    minutes:"31 min",
    className:"h-[118px] w-[116px]"
  },
  {
    id:"9",
    name:"Burger Singh - Big Punjabi Burgers",
    img:"https://b.zmtcdn.com/data/brand_creatives/logos/a175a6938688350fb3da3018da6293db_1625244343.png?output-format=webp",
    minutes:"30 min",
    className:"h-[118px] w-[116px]"
  },
  {
    id:"10",
    name:"Nazeer Foods",
    img:"https://b.zmtcdn.com/data/brand_creatives/logos/6dd2b0ee7bba33519ec2fa361df4b748_1640338762.png?output-format=webp",
    minutes:"36 min",
    className:"h-[118px] w-[116px]"
  }
]

let bestFood=[
  {
    id:"1",
    img:"BestFood/Layla.avif",
    label:"50% OFF up to 100",
    min:"36 min",
    Cname:"Layla's Shawarma & Middle Eastern Kitchen",
    rating:"4.2",
    iconStar:"bx bxs-star",
    title:"Lebanese, Arabian, Middle Eastern",
    price:"₹300 for one",
    iconRuppe:"bx bx-rupee",
    animationImg:"Max.webp",
    animationText1:"Follows all Max Safety measures to ensure your food is safe",
    animationText2:"5800+ orders placed from here recently",
    icon:"BestFood/icon.webp"
  },
  {
    id:"2",
    img:"BestFood/McDonalds.avif",
    label:"50% OFF up to 100",
    min:"34 min",
    Cname:"McDonal's",
    rating:"4.2",
    iconStar:"bx bxs-star",
    title:"Burger, Wraps, Fast Food, Beverages, Desserts",
    price:"₹200 for one",
    animationImg:"Max.webp",
    animationText1:"Follows all Max Safety measures to ensure your food is safe",
    animationText2:"5800+ orders placed from here recently",
    icon:"BestFood/icon.webp"
  },
  {
    id:"3",
    img:"https://b.zmtcdn.com/data/pictures/chains/7/147/c249b8f80da4d40d2d5771ae201edc32_o2_featured_v2.jpg?output-format=webp",
    label:"30% OFF",
    min:"27 min",
    Cname:"Subway",
    rating:"3.8",
    iconStar:"bx bxs-star",
    title:"Healthy Food, Sandwich, Fast Food, Wraps, Salad, Beverages",
    price:"₹200 for One",
    animationImg:"Max.webp",
    animationText1:"Follows all Max Safety measures to ensure your food is safe",
    animationText2:"5800+ orders placed from here recently",
    icon:"BestFood/icon.webp"
  },
  {
    id:"4",
    img:"https://b.zmtcdn.com/data/pictures/6/18423876/9bbbadfad1ea5dedec5d4f40020b7c08_o2_featured_v2.jpg?output-format=webp",
    label:"50% OFF up to 100",
    min:"27 min",
    Cname:"Madras Cafe",
    rating:"4.0",
    iconStar:"bx bxs-star",
    title:"South Indian, Chinese",
    price:"₹200 for One",
    animationImg:"Max.webp",
    animationText1:"Follows all Max Safety measures to ensure your food is safe",
    animationText2:"5800+ orders placed from here recently",
    icon:"BestFood/icon.webp"
  },
  {
    id:"5",
    img:"https://b.zmtcdn.com/data/pictures/chains/3/18517243/2cabffd384f178b1a04f5d699bba17cc_o2_featured_v2.jpg?output-format=webp",
    label:"50% OFF up to 100",
    min:"18 min",
    Cname:"Aggarwal Sweet India",
    rating:"4.1",
    iconStar:"bx bxs-star",
    title:"Mithai",
    price:"₹200 for One",
    animationImg:"Max.webp",
    animationText1:"Follows all Max Safety measures to ensure your food is safe",
    animationText2:"5800+ orders placed from here recently",
    icon:"BestFood/icon.webp"
  },
  {
    id:"6",
    img:"https://b.zmtcdn.com/data/pictures/chains/9/300809/2cb2591d5cd3dde4aaa527c79b60333f_o2_featured_v2.jpg?output-format=webp",
    label:"50% OFF up to 100",
    min:"31 min",
    Cname:"SGF - Spice Grill Flame",
    rating:"4.1",
    iconStar:"bx bxs-star",
    title:"North Indian, Chinese, Rools, Beverages",
    price:"₹200 for One",
    animationImg:"Max.webp",
    animationText1:"Follows all Max Safety measures to ensure your food is safe",
    animationText2:"5800+ orders placed from here recently",
    icon:"BestFood/icon.webp"
  },
  {
    id:"7",
    img:"https://b.zmtcdn.com/data/pictures/chains/1/931/06031a926aeddf6a3cff1def5db653de_o2_featured_v2.jpg?output-format=webp",
    label:"50% OFF up to 100",
    min:"40 min",
    Cname:"KFC",
    rating:"4.1",
    iconStar:"bx bxs-star",
    title:"Fast Food, Burger, Biryani, Desserts, Beverages",
    price:"₹200 for One",
    animationImg:"Max.webp",
    animationText1:"Follows all Max Safety measures to ensure your food is safe",
    animationText2:"5800+ orders placed from here recently",
    icon:"BestFood/icon.webp"
  },
  {
    id:"8",
    img:"https://b.zmtcdn.com/data/pictures/4/18481404/a85f8518c15a6bc9a7d63da9c56998dc_o2_featured_v2.jpg?output-format=webp",
    label:"50% OFF up to 100",
    min:"32 min",
    Cname:"Dosa Plaza",
    rating:"4.1",
    iconStar:"bx bxs-star",
    title:"South Indian, Chinese, North Indian, Beverages, Shake, Sichuan",
    price:"₹200 for One",
    animationImg:"Max.webp",
    animationText1:"Follows all Max Safety measures to ensure your food is safe",
    animationText2:"5800+ orders placed from here recently",
    icon:"BestFood/icon.webp"
  },
  {
    id:"9",
    img:"https://b.zmtcdn.com/data/pictures/chains/6/246/3f082a046a641c523081cbab51734d9f_o2_featured_v2.jpg?output-format=webp",
    label:"50% OFF up to 100",
    min:"31 min",
    Cname:"Pizza Hut",
    rating:"3.6",
    iconStar:"bx bxs-star",
    title:"Pizza, Fast Food, Pasta, Desserts, Beverages",
    price:"₹200 for One",
    animationImg:"Max.webp",
    animationText1:"Follows all Max Safety measures to ensure your food is safe",
    animationText2:"5800+ orders placed from here recently",
    icon:"BestFood/icon.webp"
  },
  {
    id:"10",
    img:"https://b.zmtcdn.com/data/pictures/6/2286/fa185fdf84fc2d5bda710b5f5cfb88a0_o2_featured_v2.jpg",
    label:"50% OFF up to 100",
    min:"23 min",
    Cname:"Punjabi Rasoi",
    rating:"4.0",
    iconStar:"bx bxs-star",
    title:"North Indian",
    price:"₹100 for One",
    animationImg:"Max.webp",
    animationText1:"Follows all Max Safety measures to ensure your food is safe",
    animationText2:"5800+ orders placed from here recently",
    icon:"BestFood/icon.webp"
  },
  {
    id:"11",
    img:"https://b.zmtcdn.com/data/pictures/chains/3/18517243/2cabffd384f178b1a04f5d699bba17cc_o2_featured_v2.jpg?output-format=webp",
    label:"50% OFF up to 100",
    min:"31 min",
    Cname:"The Burger Club",
    rating:"4.1",
    iconStar:"bx bxs-star",
    title:"Cafe, Coffee, Burger, Fast Food, Beverages",
    price:"₹100 for One",
    animationImg:"Max.webp",
    animationText1:"Follows all Max Safety measures to ensure your food is safe",
    animationText2:"5800+ orders placed from here recently",
    icon:"BestFood/icon.webp"
  },
  {
    id:"12",
    img:"https://b.zmtcdn.com/data/pictures/7/19550957/ae1c6acf3c72963e60990c76230cc85d_o2_featured_v2.jpg",
    label:"50% OFF up to 100",
    min:"24 min",
    Cname:"Madras Cafe",
    rating:"4.1",
    iconStar:"bx bxs-star",
    title:"South Indian",
    price:"₹100 for One",
    animationImg:"Max.webp",
    animationText1:"Follows all Max Safety measures to ensure your food is safe",
    animationText2:"5800+ orders placed from here recently",
    icon:"BestFood/icon.webp"
  },
  {
    id:"13",
    img:"https://b.zmtcdn.com/data/pictures/4/2274/c8419d83ceeaba738b746c6096564947_o2_featured_v2.jpg",
    label:"50% OFF up to 100",
    min:"25 min",
    Cname:"Chawla Fast Food",
    rating:"4.0",
    iconStar:"bx bxs-star",
    title:"North Indian, Chinese",
    price:"₹100 for One",
    animationImg:"Max.webp",
    animationText1:"Follows all Max Safety measures to ensure your food is safe",
    animationText2:"5800+ orders placed from here recently",
    icon:"BestFood/icon.webp"
  },
  {
    id:"14",
    img:"https://b.zmtcdn.com/data/pictures/chains/8/310078/a60387cca3992269b628f69c17745d19_o2_featured_v2.jpg",
    label:"50% OFF up to 100",
    min:"40 min",
    Cname:"Burger King",
    rating:"4.1",
    iconStar:"bx bxs-star",
    title:"Burger, Fast Food, Desserts, Shake",
    price:"₹100 for One",
    animationImg:"Max.webp",
    animationText1:"Follows all Max Safety measures to ensure your food is safe",
    animationText2:"5800+ orders placed from here recently",
    icon:"BestFood/icon.webp"
  },
  {
    id:"15",
    img:"https://b.zmtcdn.com/data/pictures/chains/3/307893/2738bd3dfa84f54d62587a1f5af1c8fe_o2_featured_v2.jpg",
    label:"60% OFF",
    min:"27 min",
    Cname:"Bikkgane Biryani",
    rating:"4.0",
    iconStar:"bx bxs-star",
    title:"Biryani, Hydrabadi, Andhra, North Indian, Mughlai",
    price:"₹100 for One",
    animationImg:"Max.webp",
    animationText1:"Follows all Max Safety measures to ensure your food is safe",
    animationText2:"5800+ orders placed from here recently",
    icon:"BestFood/icon.webp"
  },
  {
    id:"16",
    img:"https://b.zmtcdn.com/data/pictures/5/18950465/e9aac9fee31d67dbfa7e5bafa6602a8d_o2_featured_v2.jpg",
    label:"30% OFF",
    min:"39 min",
    Cname:"New Khushboo vaishno Dhaba",
    rating:"3.6",
    iconStar:"bx bxs-star",
    title:"North Indian",
    price:"₹100 for One",
    animationImg:"Max.webp",
    animationText1:"Follows all Max Safety measures to ensure your food is safe",
    animationText2:"5800+ orders placed from here recently",
    icon:"BestFood/icon.webp"
  },
  {
    id:"17",
    img:"https://b.zmtcdn.com/data/pictures/6/307406/f511569e81ac66f12954abcddee427d4_o2_featured_v2.jpg",
    label:"50% OFF up to 100",
    min:"43 min",
    Cname:"Pandit Ji Parantha Hut",
    rating:"4.2",
    iconStar:"bx bxs-star",
    title:"North Indian, Fast Food, Beverages",
    price:"₹100 for One",
    animationImg:"Max.webp",
    animationText1:"Follows all Max Safety measures to ensure your food is safe",
    animationText2:"5800+ orders placed from here recently",
    icon:"BestFood/icon.webp"
  },
  {
    id:"18",
    img:"https://b.zmtcdn.com/data/pictures/7/2287/116cfcf776f9e3a702bd6a88c7925715_o2_featured_v2.jpg",
    label:"50% OFF up to 100",
    min:"32 min",
    Cname:"Samrat Restaurant",
    rating:"4.1",
    iconStar:"bx bxs-star",
    title:"North Indian, Chinese, Mughlai, South Indian, Seafood, Biryani, Fast Food, Ice Cream",
    price:"₹100 for One",
    animationImg:"Max.webp",
    animationText1:"Follows all Max Safety measures to ensure your food is safe",
    animationText2:"5800+ orders placed from here recently",
    icon:"BestFood/icon.webp"
  },
  {
    id:"19",
    img:"https://b.zmtcdn.com/data/pictures/6/20430006/3a9e19237d22ea91802fce1147c09ef4_o2_featured_v2.jpg",
    label:"Flat 20% OFF",
    min:"18 min",
    Cname:"A One Chicken Corner",
    rating:"3.7",
    iconStar:"bx bxs-star",
    title:"Biryani, North Indian, Kebab",
    price:"₹100 for One",
    animationImg:"Max.webp",
    animationText1:"Follows all Max Safety measures to ensure your food is safe",
    animationText2:"5800+ orders placed from here recently",
    icon:"BestFood/icon.webp"
  },
  {
    id:"20",
    img:"https://b.zmtcdn.com/data/pictures/5/19582075/d2b5051b3b8a0c33a66b596be822c6b2_o2_featured_v2.jpg",
    label:"50% OFF up to 100",
    min:"27 min",
    Cname:"Burger Xpress",
    rating:"3.7",
    iconStar:"bx bxs-star",
    title:"Fast Food, Sandwich, Burger, Wraps, Momos, Street Food, Beverages",
    price:"₹100 for One",
    animationImg:"Max.webp",
    animationText1:"Follows all Max Safety measures to ensure your food is safe",
    animationText2:"5800+ orders placed from here recently",
    icon:"BestFood/icon.webp"
  },
  {
    id:"21",
    img:"https://b.zmtcdn.com/data/pictures/1/5771/dd10805c5eb6814155442abb4d549b0d_o2_featured_v2.jpg",
    label:"50% OFF up to 100",
    min:"33 min",
    Cname:"Zaika Punjabi",
    rating:"4.0",
    iconStar:"bx bxs-star",
    title:"North Indian, Mughlai, Chinese",
    price:"₹100 for One",
    animationImg:"Max.webp",
    animationText1:"Follows all Max Safety measures to ensure your food is safe",
    animationText2:"5800+ orders placed from here recently",
    icon:"BestFood/icon.webp"
  }
];

let Collection=[
  {
    id:"1",
    headline:"17 Flavourful Navratri Thalis",
    places:"17 Places",
    icon:"bx bxs-right-arrow",
    img:"Collection/first.avif"
  },
  {
    id:"2",
    headline:"22 Best Insta-Worthy Places",
    places:"22 Places",
    icon:"bx bxs-right-arrow",
    img:"Collection/second.avif"
  },
  {
    id:"3",
    headline:"22 Great Cafes",
    places:"22 Places",
    icon:"bx bxs-right-arrow",
    img:"Collection/third.avif"
  },
  {
    id:"4",
    headline:"8 Buzzing Events",
    places:"8 Places",
    icon:"bx bxs-right-arrow",
    img:"Collection/fourth.avif"
  }
]

let localitiSeeMore=[
  {
    id:"1",
    placeName:"Connaught Place",
    places:"246 places",
    icon:"bx bx-chevron-right"
  },
  {
    id:"2",
    placeName:"Sector 29",
    places:"141 places",
    icon:"bx bx-chevron-right"
  },
  {
    id:"3",
    placeName:"Sector 19, Noida",
    places:"202 places",
    icon:"bx bx-chevron-right"
  },
  {
    id:"4",
    placeName:"Rajori Garden",
    places:"290 places",
    icon:"bx bx-chevron-right"
  },
  {
    id:"5",
    placeName:"Saket",
    places:"304 places",
    icon:"bx bx-chevron-right"
  },
  {
    id:"6",
    placeName:"DLF Cyber City",
    places:"151 places",
    icon:"bx bx-chevron-right"
  },
  {
    id:"7",
    placeName:"Golf Course Road",
    places:"154 places",
    icon:"bx bx-chevron-right"
  },
  {
    id:"8",
    placeName:"DLF Phase 4",
    places:"217 places",
    icon:"bx bx-chevron-right"
  },
  {
    id:"9",
    text:"see more",
    icon:"bx bx-chevron-down"
  }
]

let localitiSeeLess=[
  {
    id:"1",
    placeName:"Connaught Place",
    places:"246 places",
    icon:"bx bx-chevron-right"
  },
  {
    id:"2",
    placeName:"Sector 29",
    places:"141 places",
    icon:"bx bx-chevron-right"
  },
  {
    id:"3",
    placeName:"Sector 19, Noida",
    places:"202 places",
    icon:"bx bx-chevron-right"
  },
  {
    id:"4",
    placeName:"Rajori Garden",
    places:"290 places",
    icon:"bx bx-chevron-right"
  },
  {
    id:"5",
    placeName:"Saket",
    places:"304 places",
    icon:"bx bx-chevron-right"
  },
  {
    id:"6",
    placeName:"DLF Cyber City",
    places:"151 places",
    icon:"bx bx-chevron-right"
  },
  {
    id:"7",
    placeName:"Golf Course Road",
    places:"154 places",
    icon:"bx bx-chevron-right"
  },
  {
    id:"8",
    placeName:"DLF Phase 4",
    places:"217 places",
    icon:"bx bx-chevron-right"
  },
  {
    id:"9",
    placeName:"Delhi University-GTB Nagar",
    places:"143 places",
    icon:"bx bx-chevron-right"
  },
  {
    id:"10",
    placeName:"Indirapuram",
    places:"708 places",
    icon:"bx bx-chevron-right"
  },
  {
    id:"11",
    placeName:"Vasant Kunj",
    places:"287 places",
    icon:"bx bx-chevron-right"
  },
  {
    id:"12",
    placeName:"Greater Kailash 1 (GK1)",
    places:"93 places",
    icon:"bx bx-chevron-right"
  },
  {
    id:"13",
    placeName:"Chanakyapuri",
    places:"100 places",
    icon:"bx bx-chevron-right"
  },
  {
    id:"14",
    placeName:"Rohini",
    places:"1022 places",
    icon:"bx bx-chevron-right"
  },
  {
    id:"15",
    placeName:"Janpath",
    places:"43 places",
    icon:"bx bx-chevron-right"
  },
  {
    id:"16",
    placeName:"Hauz Khas Village",
    places:"48 places",
    icon:"bx bx-chevron-right"
  },
  {
    id:"17",
    placeName:"Sector 38, Noida",
    places:"81 places",
    icon:"bx bx-chevron-right"
  },
  {
    id:"18",
    placeName:"Janakpuri",
    places:"385 places",
    icon:"bx bx-chevron-right"
  },
  {
    id:"19",
    placeName:"Sector 50",
    places:"206 places",
    icon:"bx bx-chevron-right"
  },
  {
    id:"20",
    placeName:"MG Road",
    places:"170 places",
    icon:"bx bx-chevron-right"
  },
  {
    id:"21",
    placeName:"DLF Phase 3",
    places:"380 places",
    icon:"bx bx-chevron-right"
  },
  {
    id:"22",
    placeName:"Punjabi Bagh",
    places:"169 places",
    icon:"bx bx-chevron-right"
  },
  {
    id:"23",
    placeName:"Netaji Subhash Place",
    places:"97 places",
    icon:"bx bx-chevron-right"
  },
  {
    id:"24",
    placeName:"Malviya Nagar",
    places:"354 places",
    icon:"bx bx-chevron-right"
  },
  {
    id:"25",
    placeName:"Khan Market",
    places:"51 places",
    icon:"bx bx-chevron-right"
  },
  {
    id:"26",
    placeName:"Karol Bagh",
    places:"280 places",
    icon:"bx bx-chevron-right"
  },
  {
    id:"27",
    placeName:"Nehru Place",
    places:"90 places",
    icon:"bx bx-chevron-right"
  },
  {
    id:"28",
    placeName:"Sohna Road",
    places:"267 places",
    icon:"bx bx-chevron-right"
  },
  {
    id:"29",
    placeName:"Greater Kailash 2 (2)",
    places:"304 places",
    icon:"bx bx-chevron-right"
  },
  {
    id:"30",
    text:"see less",
    icon:"bx bx-chevron-up"
  }
]

let exploreOptions=[
  {
    id:"1",
    title:"Popular cuisines near me",
    options:["Bakery food near me"],
    icon:"bx bx-chevron-down",
    icon2:"bx bx-chevron-up"
  },
  {
    id:"2",
    title:"Popular restuarent types near me",
    options:["Bakeries near me"],
    icon:"bx bx-chevron-down",
    icon2:"bx bx-chevron-up"
  },
  {
    id:"3",
    title:"Top Restuarent Chains",
    options:["Bikanervala"],
    icon:"bx bx-chevron-down",
    icon2:"bx bx-chevron-up"
  },
  {
    id:"4",
    title:"Cities We Deliver To",
    options:["Delhi NCR"],
    icon:"bx bx-chevron-down",
    icon2:"bx bx-chevron-up"
  }
]


const DeliveryComp = () => {
  return (
    <div className='py-[16px] max-w-6xl mx-auto'>
    <FilterComp filters={filters} />

    <FoodOptions title="Inspiration for your first order" foodOptions={foodOptions} width="150px" height="150px" className="w-[150px] h-[150px] rounded-full overflow-hidden"/>

    <FoodOptions title="Top Brands for you" foodOptions={topCompanyOptions} imgHeight="118px" imgWidth="118px" className=" rounded-full" classes="h-[150px] w-[150px]"
    />

    <BestFoodComp title="Best Food in Delhi NCR" bestFood={bestFood}/>

    <Collections heading="Collections" title="Explore curated lists of top restaurants, cafes, pubs, and bars in Delhi NCR, Based on trends" tagline="All collections in Delhi NCR" icon="bx bxs-right-arrow" collection={Collection}/>

    <Localities heading="Popular localities in and around" place="Delhi NCR" localtiSeeMore={localitiSeeMore} localitiSeeLess={localitiSeeLess}/>

    <ExploreOptions heading="Explore options near me" exploreOptions={exploreOptions}/>
    </div>
  )
}

export default DeliveryComp

