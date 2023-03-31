import React from 'react'
import Collections from '../Collections/Collections'
import FilterComp from '../Common/filterComp'
import ExploreOptions from '../exploreOptions/ExploreOptions'
import { BestFoodComp } from '../foodOptionsComp'


let Collection=[
  {
    id:"1",
    headline:"19 Lit Party Places",
    places:"19 Places",
    icon:"bx bxs-right-arrow",
    img:"https://b.zmtcdn.com/data/collections/d6c20926317f6753461c59af08d566f1_1674820841.jpg"
  },
  {
    id:"2",
    headline:"16 Finest Microbreweries",
    places:"17 Places",
    icon:"bx bxs-right-arrow",
    img:"https://b.zmtcdn.com/data/collections/a9362905a0378c532acc0c146dbf472c_1675078835.jpg"
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

let bestFood=[
  {
    id:"1",
    img:"https://b.zmtcdn.com/data/pictures/4/307374/2fe5ec7974cd037fb0e7db233011411f_featured_v2.jpg",
    min:"2.4 km",
    Cname:"AMA Cafe",
    rating:"4.4",
    iconStar:"bx bxs-star",
    title:"Cafe, Continental, Fast Food, Street Food, Pizza, Burger, Desserts, Beverages",
    price:"₹950 for two",
    animationText1:"Majnu ka Tila , New Delhi",
    className:"hidden"
  },
  {
    id:"2",
    img:"https://b.zmtcdn.com/data/pictures/8/18605978/446616c6a905779fb44b60416a8eb425_featured_v2.jpg",
    min:"3.2 km",
    Cname:"Cantino",
    rating:"4.4",
    iconStar:"bx bxs-star",
    title:"North Indian, Chinese, Pasta, Pizza",
    price:"₹1000 for two",
    animationText1:"Hudson Lane, New Delhi",
    className:"hidden"
  },
  {
    id:"3",
    img:"https://b.zmtcdn.com/data/pictures/8/20479848/d0060904f84cac34c5bd64de7b64d374_featured_v2.jpg",
    min:"3.9 km",
    Cname:"My Sky",
    rating:"4.3",
    iconStar:"bx bxs-star",
    title:"North Indian, Chinese, Continental, Sushi, Fast Food, Asian, Desserts, Beverages",
    price:"₹2500 for two",
    animationText1:"Gujranwala Town, New Delhi",
    className:"hidden"
  },
  {
    id:"4",
    img:"https://b.zmtcdn.com/data/pictures/chains/3/18688683/ecda243c1a0ad9b756c683ae190ec144_featured_v2.jpg",
    min:"3.1 km",
    Cname:"Paparizza - Woodfired Pizzas",
    rating:"4.3",
    iconStar:"bx bxs-star",
    title:"Pizza, Italian, Pasta, Fast Food, Salad, Chinese, Shake, Beverages",
    price:"₹1200 for two",
    animationText1:"Delhi University-GTB Nagar, New Delhi",
    className:"hidden"
  },
  {
    id:"5",
    img:"https://b.zmtcdn.com/data/pictures/3/18518483/141dfade9093af0b266ed6919a78e2f5_featured_v2.jpg",
    min:"3.1 km",
    Cname:"Echoes Living Room",
    rating:"4.6",
    iconStar:"bx bxs-star",
    title:"Cafe, Coffee, Beverages, American, Italian, North Indian, Chinese, Desserts",
    price:"₹700 for two",
    animationText1:"Hudson Lane, New Delhi",
    className:"hidden"
  },
  {
    id:"6",
    img:"https://b.zmtcdn.com/data/pictures/0/18400720/46a9793cd00bf4cd1de1b6dd4c031ae0_featured_v2.jpg",
    min:"3.3 km",
    Cname:"Mama's Buio",
    rating:"4.1",
    iconStar:"bx bxs-star",
    title:"Chinese,Italian,Continental",
    price:"₹1200 for two",
    animationText1:"Hudson Lane, New Delhi",
    className:"hidden"
  },
  {
    id:"7",
    img:"https://b.zmtcdn.com/data/pictures/7/18161577/05556b2eb11f414f66b793ee6c7e73fc_featured_v2.jpg",
    min:"3.1 km",
    Cname:"Spezia Bistro",
    rating:"4.5",
    iconStar:"bx bxs-star",
    title:"Continental, Chinese, Pizza, Desserts, Beverages",
    price:"₹1100 for two",
    animationText1:"Hudson Lane, New Delhi",
    className:"hidden"
  },
  {
    id:"8",
    img:"https://b.zmtcdn.com/data/pictures/6/312396/537dfdc2c02a5fab07aa10f07e2c7842_featured_v2.jpg",
    min:"2.4 km",
    Cname:"Busan Korean Restaurant",
    rating:"4.0",
    iconStar:"bx bxs-star",
    title:"Korean, Asian, Beverages",
    price:"₹1400 for two",
    animationText1:"Majnu Ka Tila, New Delhi",
    className:"hidden"
  },
  {
    id:"9",
    img:"https://b.zmtcdn.com/data/pictures/4/18579994/e133366241a727dc356e3b186ba6fe52_featured_v2.jpg",
    min:"3.2 km",
    Cname:"Sambookas",
    rating:"4.2",
    iconStar:"bx bxs-star",
    title:"Cafe, Italian, Mexican, North Indian, Chinese, Desserts, Beverages, Shake",
    price:"₹1100 for two",
    animationText1:"Delhi University-GTB Nagar, New Delhi",
    className:"hidden"
  },
  {
    id:"10",
    img:"https://b.zmtcdn.com/data/pictures/2/18617282/80ee724cd29d0cbea5ea7d6c6fd5a210_featured_v2.jpg",
    min:"3.1 km",
    Cname:"By the Bay",
    rating:"4.1",
    iconStar:"bx bxs-star",
    title:"Chinese, Salad, North Indian, Mughlai, Biryani, Pizza, Burger, Seafood",
    price:"₹1600 for two",
    animationText1:"Hudson Lane, New Delhi",
    className:"hidden"
  },
  // {
  //   id:"11",
  //   img:"https://b.zmtcdn.com/data/pictures/chains/3/18517243/2cabffd384f178b1a04f5d699bba17cc_o2_featured_v2.jpg?output-format=webp",
  //   label:"50% OFF up to 100",
  //   min:"31 min",
  //   Cname:"The Burger Club",
  //   rating:"4.1",
  //   iconStar:"bx bxs-star",
  //   title:"Cafe, Coffee, Burger, Fast Food, Beverages",
  //   price:"₹100 for One",
  //   animationImg:"Max.webp",
  //   animationText1:"Follows all Max Safety measures to ensure your food is safe",
  //   animationText2:"5800+ orders placed from here recently",
  //   icon:"BestFood/icon.webp"
  // },
  // {
  //   id:"12",
  //   img:"https://b.zmtcdn.com/data/pictures/7/19550957/ae1c6acf3c72963e60990c76230cc85d_o2_featured_v2.jpg",
  //   label:"50% OFF up to 100",
  //   min:"24 min",
  //   Cname:"Madras Cafe",
  //   rating:"4.1",
  //   iconStar:"bx bxs-star",
  //   title:"South Indian",
  //   price:"₹100 for One",
  //   animationImg:"Max.webp",
  //   animationText1:"Follows all Max Safety measures to ensure your food is safe",
  //   animationText2:"5800+ orders placed from here recently",
  //   icon:"BestFood/icon.webp"
  // },
  // {
  //   id:"13",
  //   img:"https://b.zmtcdn.com/data/pictures/4/2274/c8419d83ceeaba738b746c6096564947_o2_featured_v2.jpg",
  //   label:"50% OFF up to 100",
  //   min:"25 min",
  //   Cname:"Chawla Fast Food",
  //   rating:"4.0",
  //   iconStar:"bx bxs-star",
  //   title:"North Indian, Chinese",
  //   price:"₹100 for One",
  //   animationImg:"Max.webp",
  //   animationText1:"Follows all Max Safety measures to ensure your food is safe",
  //   animationText2:"5800+ orders placed from here recently",
  //   icon:"BestFood/icon.webp"
  // },
  // {
  //   id:"14",
  //   img:"https://b.zmtcdn.com/data/pictures/chains/8/310078/a60387cca3992269b628f69c17745d19_o2_featured_v2.jpg",
  //   label:"50% OFF up to 100",
  //   min:"40 min",
  //   Cname:"Burger King",
  //   rating:"4.1",
  //   iconStar:"bx bxs-star",
  //   title:"Burger, Fast Food, Desserts, Shake",
  //   price:"₹100 for One",
  //   animationImg:"Max.webp",
  //   animationText1:"Follows all Max Safety measures to ensure your food is safe",
  //   animationText2:"5800+ orders placed from here recently",
  //   icon:"BestFood/icon.webp"
  // },
  // {
  //   id:"15",
  //   img:"https://b.zmtcdn.com/data/pictures/chains/3/307893/2738bd3dfa84f54d62587a1f5af1c8fe_o2_featured_v2.jpg",
  //   label:"60% OFF",
  //   min:"27 min",
  //   Cname:"Bikkgane Biryani",
  //   rating:"4.0",
  //   iconStar:"bx bxs-star",
  //   title:"Biryani, Hydrabadi, Andhra, North Indian, Mughlai",
  //   price:"₹100 for One",
  //   animationImg:"Max.webp",
  //   animationText1:"Follows all Max Safety measures to ensure your food is safe",
  //   animationText2:"5800+ orders placed from here recently",
  //   icon:"BestFood/icon.webp"
  // },
  // {
  //   id:"16",
  //   img:"https://b.zmtcdn.com/data/pictures/5/18950465/e9aac9fee31d67dbfa7e5bafa6602a8d_o2_featured_v2.jpg",
  //   label:"30% OFF",
  //   min:"39 min",
  //   Cname:"New Khushboo vaishno Dhaba",
  //   rating:"3.6",
  //   iconStar:"bx bxs-star",
  //   title:"North Indian",
  //   price:"₹100 for One",
  //   animationImg:"Max.webp",
  //   animationText1:"Follows all Max Safety measures to ensure your food is safe",
  //   animationText2:"5800+ orders placed from here recently",
  //   icon:"BestFood/icon.webp"
  // },
  // {
  //   id:"17",
  //   img:"https://b.zmtcdn.com/data/pictures/6/307406/f511569e81ac66f12954abcddee427d4_o2_featured_v2.jpg",
  //   label:"50% OFF up to 100",
  //   min:"43 min",
  //   Cname:"Pandit Ji Parantha Hut",
  //   rating:"4.2",
  //   iconStar:"bx bxs-star",
  //   title:"North Indian, Fast Food, Beverages",
  //   price:"₹100 for One",
  //   animationImg:"Max.webp",
  //   animationText1:"Follows all Max Safety measures to ensure your food is safe",
  //   animationText2:"5800+ orders placed from here recently",
  //   icon:"BestFood/icon.webp"
  // },
  // {
  //   id:"18",
  //   img:"https://b.zmtcdn.com/data/pictures/7/2287/116cfcf776f9e3a702bd6a88c7925715_o2_featured_v2.jpg",
  //   label:"50% OFF up to 100",
  //   min:"32 min",
  //   Cname:"Samrat Restaurant",
  //   rating:"4.1",
  //   iconStar:"bx bxs-star",
  //   title:"North Indian, Chinese, Mughlai, South Indian, Seafood, Biryani, Fast Food, Ice Cream",
  //   price:"₹100 for One",
  //   animationImg:"Max.webp",
  //   animationText1:"Follows all Max Safety measures to ensure your food is safe",
  //   animationText2:"5800+ orders placed from here recently",
  //   icon:"BestFood/icon.webp"
  // },
  // {
  //   id:"19",
  //   img:"https://b.zmtcdn.com/data/pictures/6/20430006/3a9e19237d22ea91802fce1147c09ef4_o2_featured_v2.jpg",
  //   label:"Flat 20% OFF",
  //   min:"18 min",
  //   Cname:"A One Chicken Corner",
  //   rating:"3.7",
  //   iconStar:"bx bxs-star",
  //   title:"Biryani, North Indian, Kebab",
  //   price:"₹100 for One",
  //   animationImg:"Max.webp",
  //   animationText1:"Follows all Max Safety measures to ensure your food is safe",
  //   animationText2:"5800+ orders placed from here recently",
  //   icon:"BestFood/icon.webp"
  // },
  // {
  //   id:"20",
  //   img:"https://b.zmtcdn.com/data/pictures/5/19582075/d2b5051b3b8a0c33a66b596be822c6b2_o2_featured_v2.jpg",
  //   label:"50% OFF up to 100",
  //   min:"27 min",
  //   Cname:"Burger Xpress",
  //   rating:"3.7",
  //   iconStar:"bx bxs-star",
  //   title:"Fast Food, Sandwich, Burger, Wraps, Momos, Street Food, Beverages",
  //   price:"₹100 for One",
  //   animationImg:"Max.webp",
  //   animationText1:"Follows all Max Safety measures to ensure your food is safe",
  //   animationText2:"5800+ orders placed from here recently",
  //   icon:"BestFood/icon.webp"
  // },
  // {
  //   id:"21",
  //   img:"https://b.zmtcdn.com/data/pictures/1/5771/dd10805c5eb6814155442abb4d549b0d_o2_featured_v2.jpg",
  //   label:"50% OFF up to 100",
  //   min:"33 min",
  //   Cname:"Zaika Punjabi",
  //   rating:"4.0",
  //   iconStar:"bx bxs-star",
  //   title:"North Indian, Mughlai, Chinese",
  //   price:"₹100 for One",
  //   animationImg:"Max.webp",
  //   animationText1:"Follows all Max Safety measures to ensure your food is safe",
  //   animationText2:"5800+ orders placed from here recently",
  //   icon:"BestFood/icon.webp"
  // }
];

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
    title:"Distance",
    icon:"distance.svg",
    height:"18px",
    width:"18px",
    className:"mt-[2px] mx-1"
  },
  {
    id:"4",
    title:"Pubs & Bars"
  }
]


const NightLifeComp = () => {
  return (
    <div className=' max-w-6xl mx-auto'>
    <Collections heading="Collections" title="Explore curated lists of top restaurants, cafes, pubs, and bars in Delhi NCR, Based on trends" tagline="All collections in Delhi NCR" icon="bx bxs-right-arrow" collection={Collection} adjTop="-mt-[5px]" />

    <FilterComp filters={filters} className="mt-5 -ml-4"/>

      <BestFoodComp title="Nightlife Restaurants in Mukherjee Nagar" bestFood={bestFood} widht="ml-2" alignTop="-mt-[15px]" alignLeft="-ml-[328px]" adjkm="bottom-[80px]"/>

      <ExploreOptions heading="Explore options near me" exploreOptions={exploreOptions}/>
    </div>
  )
}

export default NightLifeComp