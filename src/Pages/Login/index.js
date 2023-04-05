import { useState } from "react";
import LoginTabOption from "../../components/LoginTabOptions";
import { NightLifeComp } from "../../components";
import {DeliveryComp} from "../../components";
import {DiningOutComp} from "../../components";
import Collections from "../../components/Collections/Collections";
import {Localities} from "../../components";
import {ExploreOptions} from "../../components";
import { SignUpModal } from "../../components/SignUpModal";
import LoginModal from "../../components/LoginModal";

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


function Login() {

  const [activeTab, setActiveTab] = useState('');
  const [showSignUp,setShowSignUp] = useState(false);
  const [showLogIn, setShowLogIn] = useState(false)

  const showHideSignUp = () =>{
    setShowSignUp(!showSignUp)
  };

  const showHideLogIn = () =>{
    setShowLogIn(!showLogIn)
  };

  return (
    <div className="">
      <section className="w-full bg-[url('https://b.zmtcdn.com/web_assets/81f3ff974d82520780078ba1cfbd453a1583259680.png')] text-white">
        <header class="site-header flex justify-between items-center h-[72px] font-light max-w-6xl mx-auto">
          <div class="site-identity">
            <h1>Get the App</h1>
          </div>
          <nav class="site-navigation">
            <ul class="nav flex text-lg cursor-pointer px-4 gap-10">
              <li>Investor Relations</li>
              <li>Add restaurant</li>
              <li onClick={showHideLogIn}>Log In</li>
              <li onClick={showHideSignUp}>Sign Up</li>
            </ul>
          </nav>
        </header>
        <div className="header-detail">
          <div className="zomato-img flex justify-center mt-9">
            <img
              src="https://b.zmtcdn.com/web_assets/8313a97515fcb0447d2d77c276532a511583262271.png"
              width="300px"
              height="60px"
              alt="Zomato Logo"
            ></img>
          </div>
          <div className="title text-center text-4xl text-white font-normal mt-8">
            <h2>
              Discover the best food & drinks in<span className="font-medium"> Delhi NCR</span>
            </h2>
          </div>
        </div>
        <div className="search-bar flex justify-center mt-8">
          <div className="container h-[52] w-[774px] border-2 bg-white rounded-md flex mb-24">
            <div className="location flex items-center w-60 justify-around py-3"> 
              <div className="location-icon">
                <i className="bx bxs-map text-red-400 text-2xl"></i>
              </div>
              <div className="loction-input py-[2px]">
                <input type="text" className="w-44 h-5 " placeholder="F Block, Wazirabad, Delhi"/>
              </div>
              <div className="icon">
                <i className="bx bxs-down-arrow text-black"></i>
              </div>
            </div>
            <div className="search-icon flex items-center h-14 w-14 justify-center gap-2">
              <div className="divider text-2xl -mt-[10px] text-slate-300">
                |
              </div>
              <div className="search-icon mt-1">
                <i className="bx bx-search text-gray-500 text-[22px]"></i>
              </div>
            </div>
            <div className="search-input items-center flex flex-1">
              <div className="input">
                <input type="text" placeholder="Search for restaurant, cuisine or a dish" className="w-[474px] h-14 focus:outline-none text-black"/>
              </div>
            </div> 
          </div>
        </div>
      </section>
      <LoginTabOption activeTab={activeTab} setActiveTab={setActiveTab}/>
      {getCorrectScreen(activeTab)}

      <Collections heading="Collections" title="Explore curated lists of top restaurants, cafes, pubs, and bars in Delhi NCR, Based on trends" tagline="All collections in Delhi NCR" icon="bx bxs-right-arrow" collection={Collection}/>

      <Localities heading="Popular localities in and around" place="Delhi NCR" localtiSeeMore={localitiSeeMore} localitiSeeLess={localitiSeeLess}/>

      <ExploreOptions heading="Explore options near me" exploreOptions={exploreOptions}/>

      {
        showSignUp ? <SignUpModal/> : ""
      }

      {
        showLogIn ? <LoginModal/> : ""
      }
    </div>
  );
}


const getCorrectScreen = (tab) =>{
  switch(tab){
    case "Order Online":
      return <DeliveryComp />
    case "Dining":
      return <DiningOutComp />
    case "Nightlife and Clubs":
      return <NightLifeComp />
    default:
      return ""
  }
}

export default Login;
