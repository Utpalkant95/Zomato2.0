import React, { useEffect, useState } from 'react';
import  {Header} from '../../components';
import {Footer} from '../../components';
import {TabOptions} from '../../components';
import {DeliveryComp} from '../../components';
import {NightLifeComp} from '../../components';
import {DiningOutComp} from '../../components';

const HomePage = () => {
  const [activeTab,setActiveTab] = useState("Delivery");

  return (
    <div>
        <Header />
        <TabOptions activeTab={activeTab} setActiveTab={setActiveTab}/>
        {getCorrectScreen(activeTab)}
        <Footer />
    </div>
  )
};

const getCorrectScreen = (tab) =>{
  switch(tab){
    case "Delivery":
      return <DeliveryComp />
    case "Dining Out":
      return <DiningOutComp />
    case "Nightlife":
      return <NightLifeComp />
    default:
      return <DeliveryComp />
  }
};


export default HomePage


