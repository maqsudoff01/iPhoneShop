import React from 'react'
import  Search  from '../components/SearchDiv/Search'
import NavBar from '../components/NavBar/NavBar'
import {ImCoinDollar} from 'react-icons/im'

const Home = () => {
    
  const Data = [
    {
      id:1,
      title:'iPhone 14',
      time:'1000$',
      location:'Canada',
      desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae tikki. Readfk',
      company:'Lova.Co'
    },
    {
      id:2,
      title:'iPhone 14',
      time:'1000$',
      location:'Manchestre',
      desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae tikki. Readfk',
      company:'Hometo'
    },
    {
      id:3,
      title:'iPhone 14Pro',
      time:'1100$',
      location:'Florida',
      desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae tikki. Readfk',
      company:'Data'
    },
    {
      id:4,
      title:'iPhone 14Pro',
      time:'1500$',
      location:'Nigeriya',
      desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae tikki. Readfk',
      company:'QoravoyCity'
    },
    {
      id:5,
      title:'iPhone 14Pro Max',
      time:'1800$',
      location:'Germany',
      desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae tikki. Readfk',
      company:'Gitlers'
    },
    {
      id:6,
      title:'iPhone 14Pro Max',
      time:'1200$',
      location:'France',
      desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae tikki. Readfk',
      company:'Nopoleon'
    },
    {
      id:7,
      title:'iPhone 14 Pro Max',
      time:'1900$',
      location:'Italy',
      desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae tikki. Readfk',
      company:'Motodor'
    },
    {
      id:8,
      title:'iPhone 14Pro Max ',
      time:'2000$',
      location:'Uzbekiston',
      desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae tikki. Readfk',
      company:'GM Motors'
    },
    {
      id:9,
      title:'iPhone 14Pro Max',
      time:'2100$',
      location:'Italy',
      desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae tikki. Readfk',
      company:'Motodor'
    },
    {
      id:10,
      title:'iPhone 14Pro Max ',
      time:'2300$',
      location:'Italy',
      desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae tikki. Readfk',
      company:'Motodor'
    },

  ]

  return (
<div>
    <div>
    <NavBar />
    <Search />
    </div>
    
</div>
  )
}

export default Home
