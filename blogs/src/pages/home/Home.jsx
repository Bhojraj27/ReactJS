import  './home.css'
import Header from '../../components/header/Header'
import Posts from '../../components/posts/Posts'
import Sidebar from '../../components/sidebar/Sidebar'
import { useEffect, useState } from 'react'

export default function Home() {
  const [posts, setPosts]=useState([]);
  useEffect(()=>{
    const fetchPosts=async()=>{
     const res= axios.get("/posts")
     console.log(res)
    }
    fetchPosts()
  },[])
  return (
    <>
    
      <Header/>
    <div className='home'>
      <Posts/>
      <Sidebar/>    
    </div>
    </>
  )
}
