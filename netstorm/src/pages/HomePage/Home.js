import React from 'react'
import Header from '../../components/Header'
import Discover from './Discover'
import LiveAuction from './LiveAuction'
import TopSellers from './TopSellers'
import Collection from './Collection'
import Explore from './Explore'
import SellNFT from './SellNFT'
import Footer from '../../components/Footer'


function Home() {
  return (
    <div>
        <Header/>
        <Discover/>
        <LiveAuction/>
        <TopSellers/>
        <Collection/>
        <Explore/>
        <SellNFT/>
        <Footer/>
    </div>
  )
}

export default Home