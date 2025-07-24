import React from 'react'

import Header from '../Header'
import Footer from '../Footer'
import Sidebar from '../Sidebar'
const Home = () => {
  return (
	<div>
	<Header/>
	<div className=' p-4 bg-violet-200 gap-3 flex grid-cols-4'>
	<Sidebar/>
	</div>
	<Footer/>
    </div>
  )
} 

export default Home